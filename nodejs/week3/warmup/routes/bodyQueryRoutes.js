const express = require("express");
const router = express.Router();

//Calculator using req.body
router.post("/add", (req, res) => {
	const queryParam = Object.values(req.body);
	// console.log(queryParam);
	//console.log(typeof(queryParam[1]))
	let sum = 0;
	for (let i = 0; i < queryParam.length; i++) sum += parseInt(queryParam[i]);
	console.log(`Params are: ${queryParam} and sum = ${sum}`);
	res.send(`Params are: ${queryParam} and sum = ${sum}`);
});

router.post("/multiply", (req, res) => {
	const queryParam = Object.values(req.body);
	let result = 1;
	for (let i = 0; i < queryParam.length; i++) {
		result *= parseInt(queryData[i]);
	}
	console.log(`Params are: ${queryParam} Product = ${result}`);
	res.send(`Params are: ${queryParam} Product = ${result}`);
});

router.post("/divide", (req, res) => {
	const queryParam = Object.values(req.body);
	division = queryParam.reduce((value1, value2) => {
		return value1 / value2;
	});
	console.log(`Params are: ${queryParam} Division is equal to: ${division}`);
	res.send(`Params are: ${queryParam} Division is equal to: ${division}`);
});

router.post("/subtract", (req, res) => {
	const queryParam = Object.values(req.body);
	difference = queryParam.reduce((value1, value2) => {
		return value1 - value2;
	});
	console.log(`Params are: ${queryParam} Difference is equal to: ${difference}`);
	res.send(`Params are: ${queryParam} Difference is equal to: ${difference}`);
});

module.exports = router;
