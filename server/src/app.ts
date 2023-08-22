import express, { Express } from 'express';
import cors from 'cors';

// SWAGGER
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swaggerSpec';

// Routes
import composersRoutes from './routes/composers.routes';

const app: Express = express();
const port: number = 3000;

// Middlewares
app.use(cors());
app.use(express.static(__dirname + '/images')); // Allows to serve static files
app.use('/composers', composersRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Listening for requests on port ${port}`);
});
