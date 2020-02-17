const express = require("express");
const route = express.Router();
const fs = require("fs");
const data = fs.readFileSync(__dirname + "/../data/meals.json");
const meals = JSON.parse(data);

//Respond with the json for the meal with the corresponding id *

route.get("/:id", (req, res) => {
	const { id } = req.params;
	const mealsById = meals.find(meal => {
		return meal.id === parseInt(id);
	});
	res.send(mealsById);
});

// Get meals that has a price smaller than maxPrice
// Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
// Get meals that has been created after the date
// Only specific number of meals
//Respond with the json for all the meals

route.get("/", (req, res) => {
	const { maxPrice, title, createdAfter, limit } = req.query;
	if (maxPrice) {
		const mealPrice = meals.filter(meal => {
			return meal.price <= parseInt(maxPrice);
		});
		res.send(mealPrice);
	} else if (title) {
		const mealTitle = meals.filter(meal => {
			return meal.title.toLowerCase().includes(title.toLowerCase());
		});
		res.send(mealTitle);
	} else if (createdAfter) {
		const createdAfterDate = meals.filter(meal => {
			return meal.createdAt >= createdAfter;
		});
		res.send(createdAfterDate);
	} else if (limit) {
		const limitedMeal = meals.slice(0, limit);
		res.send(limitedMeal);
	} else res.json(meals);
});

module.exports = route;
