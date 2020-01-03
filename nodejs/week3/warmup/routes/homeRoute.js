const express = require("express");
const router = express.Router();

//All the numbers that should be inputtet should be gotten from the query parameters: calculator?
router.get("/", (req, res, next) => {
	// console.log(req.query);
	const queryData = [].concat.apply([], Object.values(req.query));
	console.log(queryData);
	const data = queryData.map(Number);
	// console.log(data);
	// console.log(typeof(data))
	res.send(`Query Params are: ${data}`);
	next();
});

module.exports = router;
