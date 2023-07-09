const express = require("express");
const authentication = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
// const jwt = require("json-web-token");
const jwt = require("jsonwebtoken");

const { User } = db;

authentication.post("/", async (req, res) => {
	console.log("Received login request:", req.body);

	let user = await User.findOne({
		where: {
			email: req.body.email,
		},
	});

	console.log("Found user:", user);

	if (
		!user ||
		!(await bcrypt.compare(req.body.password, user.passwordDigest))
	) {
		console.log("Invalid username or password");
		res.status(404).json({
			message: `Could not find a user with the provided username and password`,
		});
	} else {
		const result = await jwt.sign({ id: user.userId }, process.env.JWT_SECRET);

		console.log("Generated token:", result);
		res.json({ user: user, token: result }); // Add this line to include the token in the response
	}
});

authentication.get("/profile", async (req, res) => {
	try {
		// Split the authorization header into [ "Bearer", "TOKEN" ]:
		const [authenticationMethod, token] = req.headers.authorization.split(" ");

		// Only handle "Bearer" authorization for now
		//  (we could add other authorization strategies later):
		if (authenticationMethod == "Bearer") {
			// Decode the JWT
			const result = await jwt.verify(token, process.env.JWT_SECRET);

			// Get the logged in user's id from the payload
			const { id } = result.value;

			// Find the user object using their id:
			let user = await User.findOne({
				where: {
					userId: id,
				},
			});
			res.json(user);
		}
	} catch {
		res.json(null);
	}
});

module.exports = authentication;
