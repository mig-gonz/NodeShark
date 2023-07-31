const express = require("express");
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

// middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/products", productsController);
app.use("/users", require("./controllers/user_controller"));
app.use("/authentication", require("./controllers/authentication_controller"));
app.use("/wishlist", wishlistController);

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
