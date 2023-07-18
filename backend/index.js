const express = require("express");
const serverless = require("serverless-http");
const session = require("express-session");
const dotenv = require("dotenv");
const { connectToDB } = require("./database");
const cors = require("cors");

dotenv.config();
const app = express();

// connect to database
connectToDB();

// Controllers
const productsController = require("./controllers/products_controller");
const wishlistController = require("./controllers/wishlist_controller");
const authenticationController = require("./controllers/authentication_controller");

// middleware
app.use(
  cors({
    origin: "https://aws-deployment.d24dzy57n244p8.amplifyapp.com",
    credentials: true,
  }),
  express.json(),
  express.urlencoded({ extended: true }),
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
  express.static("public")
);

// Routes
app.use("/products", productsController);
app.use("/users", require("./controllers/user_controller"));
app.use("/wishlist", wishlistController);
app.use("/authentication", authenticationController);

app.get("/hello", (req, res) => {
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

module.exports.handler = serverless(app);
