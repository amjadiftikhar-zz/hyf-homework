const express = require("express");
const app = express();
const fs = require("fs");

//Setting up the routes

const meals = JSON.parse(fs.readFileSync(__dirname + "/data/meals.json"));
const reservations = JSON.parse(
	fs.readFileSync(__dirname + "/data/reservations.json")
);
const reviews = JSON.parse(fs.readFileSync(__dirname + "/data/reviews.json"));

// Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. For meals that do not have any reviews, the "reviews" property will be an empty array. (watch the GIF below to understand how it should be structured)

app.get("/meals", (req, res, next) => {
	meals.map(meal => {
		meal.reviews = [];
		for (i = 0; i < meals.length; i++) {
			if (reviews[i].mealID === meals.id) {
				meal.reviews.push(reviews[i]);
			}
		}
	});
	res.json(meals);
	// console.log(meals)
	next();
});

// Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)

// app.get("/meals", (req, res, next) => {
// 	const cheapMeal = meals.filter(mealPrice => mealPrice.price < 100);
// 	// console.log(cheapMeal);
// 	res.json(cheapMeal);
// 	next();
// });

// //Respond with the json for all the meals (including it's reviews) that can fit lots of people

// app.get("/meals", (req, res, next) => {
// 	const maxMeal = meals.filter(meal => meal.maxNumberOfGuests >= 10);
// 	maxMeal.map(mealReview => {
// 		mealReview.reviews = [];
// 		for (i = 0; i < meals.length; i++) {
// 			if (reviews[i].mealID === meals.id) {
// 				mealReview.reviews.push(reviews[i]);
// 			}
// 		}
// 	});
// 	// console.log(maxMeal);
// 	res.json(maxMeal);
// 	next();
// });

// //Respond with the json for a random meal (including it's reviews)

// app.get("/meals", (req, res, next) => {
// 	meals.map(meal => {
// 		meal.reviews = [];
// 		for (i = 0; i < meals.length; i++) {
// 			if (reviews[i].mealID === meals.id) {
// 				meal.reviews.push(reviews[i]);
// 			}
// 		}
// 	});
// 	const random = Math.floor(Math.random() * meals.length);
// 	const randomMeal = meals.filter(mealReview => mealReview.id === random);
// 	// console.log(randomMeal);
// 	res.json(randomMeal);
// 	next();
// });

// //Respond with the json for all reservations

// app.get("/reservations", (req, res, next) => {
// 	res.json(reservations);
// 	// console.log(reservations);
// 	next();
// });

// //Respond with the json for a random reservation

// app.get("/reservations", (req, res, next) => {
// 	const randomReservations =
// 		reservations[Math.floor(Math.random() * reservations.length)];
// 	res.json(randomReservations);
// 	// console.log(randomReservations);
// 	next();
// });

app.listen(3000, () => {
	console.log("server started on port 3000");
});
