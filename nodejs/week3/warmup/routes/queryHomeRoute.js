const express = require("express");
const router = express.Router();

// culator using :params
router.get("/add", (req, res, next) => {
	const queryParam = [].concat.apply([], Object.values(req.query));
	const data = queryParam.map(Number);
	const addition = data.reduce((sum, value) => (sum = sum + value), 0);
	res.send(
		`Query Params are: ${queryParam} and addition is equal to: ${addition}`
	);
	next();
});

router.get("/multiply", (req, res, next) => {
	const queryParam = [].concat.apply([], Object.values(req.query));
	const data = queryParam.map(Number);
	const multiplication = data.reduce((sum, value) => (sum = sum * value), 1);
	res.send(
		`Query Params are: ${queryParam}  multiplication is equal to: ${multiplication}`
	);
	next();
});

router.get("/subtract", (req, res, next) => {
	const queryParam = [].concat.apply([], Object.values(req.query));
	const data = queryParam.map(Number);
	const subtraction = data.reduce((sum, value) => (sum = sum - value));
	res.send(
		`Query Params are: ${queryParam} subtraction is equal to: ${subtraction}`
	);
	next();
});

router.get("/divide", (req, res, next) => {
	const queryParam = [].concat.apply([], Object.values(req.query));
	const data = queryParam.map(Number);
	const division = data.reduce((sum, value) => (sum = sum / value));
	res.send(`Query Params are: ${queryParam} Division is equal to: ${division}`);
	next();
});

module.exports = router;
