import express, { Express } from 'express';
import cors from 'cors';
import pool from './config/db';

const app: Express = express();
const port: number = 3000;

// Middlewares
app.use(cors());

// Routes
app.get('/composers', async (req, res) => {
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

app.listen(port, () => {
    console.log(`Listening for requests on port ${port}`);
});
