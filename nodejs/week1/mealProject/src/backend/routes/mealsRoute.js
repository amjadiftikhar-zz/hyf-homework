const express = require('express');
const route = express.Router();
const fs = require("fs");
const data = fs.readFileSync(__dirname + "/../data/meals.json");
const meals = JSON.parse(data);
const reviews = JSON.parse(fs.readFileSync(__dirname + "/../data/reviews.json"));

// Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. For meals that do not have any reviews, the "reviews" property will be an empty array. (watch the GIF below to understand how it should be structured)

route.get("/", (req, res) => {
	meals.map(meal => {
		meal.reviews = [];
		for (i = 0; i < meals.length; i++) {
			if (reviews[i].mealID === meals.id) {
				meal.reviews.push(reviews[i]);
			}
		}
	});
	res.json(meals);
	console.log(meals)	
});

//Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)

route.get("/cheap-meals", (req, res) => {
	meals.map(meal => {
		meal.reviews = [];
		for (i = 0; i < meals.length; i++) {
			if (reviews[i].mealID === meals.id) {
				meal.reviews.push(reviews[i]);
			}
		}
	});
	const cheapMeal = meals.filter(mealPrice => mealPrice.price < 100);
	// console.log(cheapMeal);
	res.json(cheapMeal);	
});

//Respond with the json for all the meals (including it's reviews) that can fit lots of people

route.get("/large-meals", (req, res, next) => {
	const maxMeal = meals.filter(meal => meal.maxNumberOfGuests >= 10);
	maxMeal.map(mealReview => {
		mealReview.reviews = [];
		for (i = 0; i < meals.length; i++) {
			if (reviews[i].mealID === meals.id) {
				mealReview.reviews.push(reviews[i]);
			}
		}
	});
	// console.log(maxMeal);
	res.json(maxMeal);
	next();
});

//Respond with the json for a random meal (including it's reviews)

route.get("/meal", (req, res) => {
	meals.map(meal => {
		meal.reviews = [];
		for (i = 0; i <= meals.length; i++) {
			if (reviews[i].mealID === meals.id) {
				meal.reviews.push(reviews[i]);
			}
		}
	});
	const random = Math.floor(Math.random() * meals.length + 1);
	const randomMeal = meals.filter(mealReview => mealReview.id === random);
	// console.log(randomMeal);
	res.json(randomMeal);
});


module.exports = route;