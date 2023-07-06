const express = require("express");
const dotenv = require("dotenv");
const { connectToDB } = require("./database");
dotenv.config();
const app = express();
const cors = require("cors");

// connect to database
connectToDB();

// Controllers

const productsController = require("./controllers/products_controller");

// middleware
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/products", productsController);

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
