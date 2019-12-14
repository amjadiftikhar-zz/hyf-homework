const express = require('express');
const route = express.Router();
const fs = require('fs');
const data = fs.readFileSync(__dirname + '/../data/reservations.json')
const reservations = JSON.parse(data)

//Respond with the json for all the reservations

route.get('/', (req, res) => {    
    res.json(reservations)    
});

route.get("/:id", (req, res) => {
	const { id } = req.params;
	const reservationsById = reservations.filter(reservation => {
		return reservation.id === parseInt(id);
	});
	res.send(reservationsById);
});

module.exports = route;