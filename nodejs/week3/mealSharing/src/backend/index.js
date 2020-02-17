const express = require("express");
const app = express();
const pool = require("./database");
const router = express.Router();

// adding security in the code
// const jwt = require("jsonwebtoken");
// const PRIVATE_KEY = "MY_RANDOM_PRIVATE_KEY";

// router.post("/auth", (request, response) => {
// 	const {body} = request;
// 	console.log("Meal", body);
// 	const {password, username} = body
// 	// pool.query("INSERT INTO meal SET ?", newMeal, function(
// 	// 	error,
// 	// 	results,
// 	// 	fields
// 	// ) {
// 	// 	if (error) {
// 	// 		console.log("error", error);
// 	// 	}else
// 	// 	response.json(results);
// 	// 	// console.log(results);
// 	// });

// 	jwt.sign(
// 		{
// 			username
// 		},
// 		PRIVATE_KEY,
// 		{ expiresIn: "1h" },
// 		(err, token) => {
// 			if (err) {
// 				console.log(err);
// 			}
// 			if (token) {
// 				console.log(token);
// 			}
// 		}
// 	);
// });

const mealsRouter = require("./api/meals");
const reservationsRouter = require("./api/reservations");
const reviewsRouter = require("./api/reviews");

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// app.use(bodyParser.json())

router.use("/meals", mealsRouter);
router.use("/reservations", reservationsRouter);
router.use("/reviews", reviewsRouter);

app.use("/api", router);

app.listen(port, () => {
	console.log(`Server listening on port ${port}!`);
	pool.connect(err => {
		if (err) {
			console.log(`${err}`);
		} else {
			console.log(`Connection successful`);
		}
	});
});
