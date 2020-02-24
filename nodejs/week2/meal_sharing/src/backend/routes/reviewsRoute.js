const express = require("express");
const route = express.Router();
const fs = require("fs");
const data = fs.readFileSync(__dirname + "/../data/reviews.json");
const reviews = JSON.parse(data);

//Respond with the json for all the reviews

route.get("/", (req, res) => {
	res.json(reviews);
});

route.get("/:id", (req, res) => {
	const { id } = req.params;
	const reviewsById = reviews.filter(review => {
		return review.id === parseInt(id);
	});
	res.send(reviewsById);
});

module.exports = route;
