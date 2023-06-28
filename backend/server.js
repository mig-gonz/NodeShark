const express = require('express');
const dotenv = require('dotenv');
const { connectToDB } = require('./database');
const productRoutes = require('./routes/products');
const userRoute = require('./routes/users');
dotenv.config();
const app = express();

// Connect to the database
connectToDB();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/products', productRoutes);
app.use('/user', userRoute);

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
