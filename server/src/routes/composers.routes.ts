import { Router } from 'express';
import pool from '../config/db';
import { QueryResult } from 'pg';
import { ComposerRow } from '../interfaces/composers';

const composersRouter = Router();

/**
 * @openapi
 * /composers:
 *  get:
 *     tags:
 *     - Composers
 *     description: Returns a list of composers
 *     parameters:
 *       - in: query
 *         name: name
 *         type: string
 *         required: false
 *         description: Name of the composer to find
 *     responses:
 *       200:
 *         description: Successfully fetched composers
 *
 */
export default composersRouter.get('/', async (req, res) => {
    try {
        const { name } = req.query;
        let composers: QueryResult<ComposerRow>;

        if (name) {
            composers = await pool.query(
                `
         SELECT * FROM composers
         WHERE first_name || ' ' || last_name
         ILIKE $1`,
                [`%${name}%`]
            );
        } else {
            composers = await pool.query(
                `
         SELECT * FROM composers`
            );
        }

        res.json(composers.rows);
    } catch (error) {
        console.log(error);
    }
});

/**
 * @openapi
 * /composers/{composerId}:
 *  get:
 *     tags:
 *     - Composers
 *     description: Returns details of a specific composer
 *     parameters:
 *       - in: path
 *         name: composerId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the composer to retrieve
 *     responses:
 *       200:
 *         description: Successfully fetched composer's detail
 *       404:
 *         description: Composer not found
 *
 */
composersRouter.get('/:composerId', async (req, res) => {
    try {
        const composerId = req.params.composerId;
        const composerQuery = await pool.query(
            `
            SELECT cd.id, cd.composer_id, cd.birthdate, cd.nationality, cd.biography,
                   c.last_name, c.first_name, c.avatar_file_name
            FROM COMPOSER_DETAIL cd
            JOIN COMPOSERS c ON cd.composer_id = c.id
            WHERE cd.id = $1`,
            [composerId]
        );

        if (composerQuery.rows.length === 0) {
            return res.status(404).json({ error: 'Composer not found' });
        }

        const composerDetail = composerQuery.rows[0];
        res.json(composerDetail);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
