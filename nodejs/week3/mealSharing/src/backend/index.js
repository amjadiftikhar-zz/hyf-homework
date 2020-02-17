const express = require("express");
const app = express();
const pool = require("./database");
const router = express.Router();

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
