const express = require("express");
const dotenv = require("dotenv");
const { connectToDB } = require("./database");
const cors = require("cors");
dotenv.config();
const app = express();
const defineCurrentUser = require("./middleware/defineCurrentUser");

// connect to database
connectToDB();

// Controllers

const productsController = require("./controllers/products_controller");
const userController = require("./controllers/user_controller");
const authenticationController = require("./controllers/authentication_controller");

// middleware
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(defineCurrentUser);

// Routes
app.use("/products", productsController);
app.use("/user", userController);
app.use("/authentication", authenticationController);

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

app.listen(process.env.PORT, () => {
  console.log({ message: `Listening on port: ${process.env.PORT}` });
});
