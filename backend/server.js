const express = require("express");
const dotenv = require("dotenv");
const { connectToDB } = require("./database");
const productRoutes = require("./routes/products");
dotenv.config();
const app = express();

// Connect to the database
connectToDB();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  try {
    res.status(200).send({
      message: "Hello World!",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.use("*", (req, res) => {
  res.status(404).send({
    message: "Not found",
  });
});

app.listen(process.env.Port, () => {
  console.log({ message: `Listening on port: ${process.env.PORT}` });
});
