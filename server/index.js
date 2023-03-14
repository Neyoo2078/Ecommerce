import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { data } from './data.js';

const app = express();
const PORT = process.env.PORT || 5000;

const CONNECTION_URL =
  'mongodb+srv://adeniyi2078:adeniyi2078@ecommerce.4t11bci.mongodb.net/?retryWrites=true&w=majority';

app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extented: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extented: true }));
app.use(cors());

app.use('/products', (req, res) => {
  res.json(data);
});

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log('app connected op port 5000');
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
