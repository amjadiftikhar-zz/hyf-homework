const express = require("express");
const route = express.Router();
const fs = require("fs");
const reservations = JSON.parse(
	fs.readFileSync(__dirname + "/../data/reservations.json")
);

//Respond with the json for all reservations

route.get("/", (req, res, next) => {
	res.json(reservations);
	// console.log(reservations);
	next();
});

//Respond with the json for a random reservation

route.get("/reservation", (req, res) => {
	const randomReservations =
		reservations[Math.floor(Math.random() * reservations.length)];
	res.json(randomReservations);
	// console.log(randomReservations);
});

module.exports = route;
