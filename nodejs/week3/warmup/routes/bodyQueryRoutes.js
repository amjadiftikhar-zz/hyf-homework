const express = require("express");
const router = express.Router();

//Calculator using req.body
router.get("/add", (req, res) => {
	const queryData = Object.values(req.body);
	// console.log(queryData);
	//console.log(typeof(queryData[1]))
	let sum = 0;
	for (let i = 0; i < queryData.length; i++) sum += parseInt(queryData[i]);
	// console.log(typeof(queryData))
	// console.log(queryData)
	console.log(`Params are: ${queryData} and sum = ${sum}`);
	res.send(`Params are: ${queryData} and sum = ${sum}`);
});

router.get("/multiply", (req, res) => {
	const queryData = Object.values(req.body);
	let result = 1;
	for (let i = 0; i < queryData.length; i++) {
		result *= parseInt(queryData[i]);
	}
	console.log(`Params are: ${queryData} Product = ${result}`);
	res.send(`Params are: ${queryData} Product = ${result}`);
});

router.get("/divide", (req, res) => {
	const queryData = Object.values(req.body);
	division = queryData.reduce((value1, value2) => {
		return value1 / value2;
	});
	console.log(`Params are: ${queryData} Division is equal to: ${division}`);
	res.send(`Params are: ${queryData} Division is equal to: ${division}`);
});

router.get("/subtract", (req, res) => {
	const queryData = Object.values(req.body);
	difference = queryData.reduce((value1, value2) => {
		return value1 - value2;
	});
	console.log(`Params are: ${queryData} Difference is equal to: ${difference}`);
	res.send(`Params are: ${queryData} Difference is equal to: ${difference}`);
});

module.exports = router;
