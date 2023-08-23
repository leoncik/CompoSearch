import { Router } from 'express';
import pool from '../config/db';
import { QueryResult } from 'pg';

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
