const express = require("express");
const route = express();
const port = "3000";

route.get("/numbers/add", (req, res) => {
	const first = Number(req.query.first);
	const second = Number(req.query.second);
	res.send(`${first + second}`); 
	// http://localhost:3000/numbers/add?first=3&second=7
});

route.get("/numbers/multiply/:first/:second", (req, res) => {
	const first = req.params.first;
	const second = req.params.second;
	res.send(`${first * second}`);
});

route.listen(port, () => {
	console.log("server listen on port 3000");
});
