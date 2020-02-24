const express = require("express");
const route = express();
const port = 3000;

const mealsRoute = require("./routes/mealsRoute");
const reservationsRoute = require("./routes/reservationsRoute");
const reviewsRoute = require("./routes/reviewsRoute");

// middleware function that logs out the time, a request was received and the path

route.use((req, res, next) => {
	let date = new Date();
	let time = `${date.getDate()}-${date.getMonth() + 1}-
    ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} 
    request received for path: ${req.url}`;
	console.log(time);
	next();
});

route.use("/meals", mealsRoute);
route.use("/reservations", reservationsRoute);
route.use("/reviews", reviewsRoute);

route.listen(port, () => {
	console.log("listen on port 3000");
});
