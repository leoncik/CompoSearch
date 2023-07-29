import { Router } from 'express';
import pool from '../config/db';

const composersRouter = Router();

export default composersRouter.get('/', async (req, res) => {
    try {
        const { name } = req.query;
        const composers = await pool.query(
            `
      SELECT * FROM composers
      WHERE first_name || ' ' || last_name
      ILIKE $1`,
            [`%${name}%`]
        );

        res.json(composers.rows);
    } catch (error) {
        console.log(error);
    }
});
