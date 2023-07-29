import express, { Express } from 'express';
import cors from 'cors';
import pool from './config/db';

// Routes
import composersRoutes from './routes/composers.routes';

const app: Express = express();
const port: number = 3000;

// Middlewares
app.use(cors());
app.use('/composers', composersRoutes);

app.listen(port, () => {
    console.log(`Listening for requests on port ${port}`);
});
