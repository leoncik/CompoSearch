import express, { Express } from "express";
import cors from 'cors'

const app: Express = express();
const port: number = 3000;

// Middlewares
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`Listening for requests on port ${port}`);
})