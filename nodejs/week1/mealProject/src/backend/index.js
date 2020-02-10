const express = require("express");
const route = express();
const fs = require("fs");
const meals = JSON.parse(
	fs.readFileSync(__dirname + "/data/meals.json"));
const reviews = JSON.parse(
	fs.readFileSync(__dirname + "/data/reviews.json"));
const reservations = JSON.parse(
	fs.readFileSync(__dirname + "/data/reservations.json"));


//midleware

route.use((req, res, next) => {
	console.log("Date:", new Date().toDateString());
	console.log("request method:", req.method);
	next();
});

// Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. For meals that do not have any reviews, the "reviews" property will be an empty array. (watch the GIF below to understand how it should be structured)

route.get("/meals", (req, res, next) => {
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
	next();	
});

//Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)

route.get("/cheap-meal", (req, res, next) => {
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
	next();	
});

//Respond with the json for all the meals (including it's reviews) that can fit lots of people

route.get("/large-meal", (req, res, next) => {
	const largeMeal = meals.filter(meal => meal.maxNumberOfGuests >= 10);
	largeMeal.map(mealReview => {
		mealReview.reviews = [];
		for (i = 0; i < meals.length; i++) {
			if (reviews[i].mealID === meals.id) {
				mealReview.reviews.push(reviews[i]);
			}
		}
	});
	// console.log(maxMeal);
	res.json(largeMeal);
	next();
});

//Respond with the json for a random meal (including it's reviews)

route.get("/meal", (req, res, next) => {
	meals.map(meal => {
		meal.reviews = [];
		for (i = 0; i < meals.length; i++) {
			if (reviews[i].mealID === meals.id) {
				meal.reviews.push(reviews[i]);
			}
		}
	});
	const random = Math.floor(Math.random() * meals.length + 1);
	const randomMeal = meals.filter(mealReview => mealReview.id === random);
	// console.log(randomMeal);
	res.json(randomMeal);
	next();
});

//Respond with the json for all reservations
route.get("/reservations", (req, res) => {
	res.json(reservations);
	console.log(reservations);
	next();
});

//Respond with the json for a random reservation

route.get("/reservation", (req, res, next) => {
	const randomReservations =
		reservations[Math.floor(Math.random() * reservations.length)];
	res.json(randomReservations);
	console.log(randomReservations);
	next();	
});


// route.use("/meals", mealsRoute);
// route.use("/reservations", reservationsRoute);

route.listen(3002, () => {
	console.log("server started on port 3002");
});






















// const express = require("express");
// const route = express();

// const mealsRoute = require("./routes/mealsRoute");
// const cheapMealRoute = require("./routes/cheapMealRoute");
// const randomMealRoute = require("./routes/randomMealRoute");
// const largeMealRoute = require("./routes/largeMealRoute");
// const reservationsRoute = require("./routes/reservationsRoute");
// const randomReservationRoute = require("./routes/randomReservationRoute");

// //midleware

// route.use((req, res, next) => {
// 	console.log("Date:", new Date().toDateString());
// 	console.log("request method:", req.method);
// 	next();
// });

// route.use("/meals", mealsRoute);
// route.use("/large-meal", largeMealRoute);
// route.use("/meal", randomMealRoute);
// route.use("/cheap-meal", cheapMealRoute);
// route.use("/reservations", reservationsRoute);
// route.use("/reservation", randomReservationRoute);

// route.listen(3002, () => {
// 	console.log("server started on port 3002");
// });
