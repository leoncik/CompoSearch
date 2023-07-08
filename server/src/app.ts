import express, { Express } from "express";

const app: Express = express();
const port: number = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`Listening for requests on port ${port}`);
})