import express, { Express } from "express";
import cors from 'cors'

const app: Express = express();
const port: number = 3000;

// Middlewares
app.use(cors())

app.get('/', (req, res) => {
    res.json([{
      "id": 1,
      "first_name": "Con",
      "last_name": "Gabotti"
    }, {
      "id": 2,
      "first_name": "Edsel",
      "last_name": "Woodberry"
    }, {
      "id": 3,
      "first_name": "Olivero",
      "last_name": "Steer"
    }, {
      "id": 4,
      "first_name": "Florry",
      "last_name": "Karpets"
    }, {
      "id": 5,
      "first_name": "Moina",
      "last_name": "De Winton"
    }, {
      "id": 6,
      "first_name": "Maddie",
      "last_name": "Chesley"
    }, {
      "id": 7,
      "first_name": "Natividad",
      "last_name": "Giorgetti"
    }, {
      "id": 8,
      "first_name": "Travers",
      "last_name": "Acklands"
    }, {
      "id": 9,
      "first_name": "Larisa",
      "last_name": "Colbrun"
    }, {
      "id": 10,
      "first_name": "Orly",
      "last_name": "Powdrill"
    }, {
      "id": 11,
      "first_name": "Alyson",
      "last_name": "Addicote"
    }, {
      "id": 12,
      "first_name": "Melisse",
      "last_name": "Polack"
    }, {
      "id": 13,
      "first_name": "Georgena",
      "last_name": "Bolmann"
    }, {
      "id": 14,
      "first_name": "Lou",
      "last_name": "Howle"
    }, {
      "id": 15,
      "first_name": "Fawn",
      "last_name": "Lates"
    }])
  })

app.listen(port, () => {
    console.log(`Listening for requests on port ${port}`);
})