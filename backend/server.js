const express = require('express');
const dotenv = require('dotenv');
const { connectToDB } = require('./database');
dotenv.config();
const app = express();

// connect to database
connectToDB();

// Controllers
const productsController = require('./controllers/products_controller');
const brandsController = require('./controllers/brands_controller');

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/products', productsController);
app.use('/brands', brandsController);

app.get('/', (req, res) => {
  try {
    res.status(200).send({
      message: 'Hello World!',
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.use('*', (req, res) => {
  res.status(404).send({
    message: 'Not found',
  });
});

app.listen(9000, () => {
  console.log({ message: `Listening on port: 9000` });
});
