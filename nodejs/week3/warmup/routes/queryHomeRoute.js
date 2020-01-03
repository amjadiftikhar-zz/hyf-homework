const express = require("express");
const router = express.Router();

// culator using :params
router.get("/add", (req, res, next) => {
	const queryData = [].concat.apply([], Object.values(req.query));
	const data = queryData.map(Number);
	const addition = data.reduce((sum, value) => (sum = sum + value), 0);
	res.send(
		`Query Params are: ${queryData} and addition is equal to: ${addition}`
	);
	next();
});

router.get("/multiply", (req, res, next) => {
	const queryData = [].concat.apply([], Object.values(req.query));
	const data = queryData.map(Number);
	const multiplication = data.reduce((sum, value) => (sum = sum * value), 1);
	res.send(
		`Query Params are: ${queryData}  multiplication is equal to: ${multiplication}`
	);
	next();
});

router.get("/subtract", (req, res, next) => {
	const queryData = [].concat.apply([], Object.values(req.query));
	const data = queryData.map(Number);
	const subtraction = data.reduce((sum, value) => (sum = sum - value));
	res.send(
		`Query Params are: ${queryData} subtraction is equal to: ${subtraction}`
	);
	next();
});

router.get("/divide", (req, res, next) => {
	const queryData = [].concat.apply([], Object.values(req.query));
	const data = queryData.map(Number);
	const division = data.reduce((sum, value) => (sum = sum / value));
	res.send(`Query Params are: ${queryData} Division is equal to: ${division}`);
	next();
});

module.exports = router;
