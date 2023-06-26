const express = require('express');
const dotenv = require('dotenv').config();

const { connect, sequelize } = require('./database');
const productRoutes = require('./routes/products');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/products', productRoutes);

// Connects to the database
connect();

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

app.listen(9000, () => {
  console.log({ 'Listening on port': 9000 });
});
