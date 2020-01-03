const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");

// midleware

app.use((req, res, next) => {
	console.log("Date:", new Date().toDateString());
	console.log("Method:", req.method);
	next();
});

app.use(bodyParser.json());

const homeRoute = require("./routes/homeRoute");
const calculatorHomeRoute = require("./routes/queryHomeRoute");
const bodyHomeRoute = require("./routes/bodyQueryRoutes");

app.use("/calculator", homeRoute);
app.use("/calculator", calculatorHomeRoute);
app.use("/calculate", bodyHomeRoute);

app.listen(port, () => console.log(`server started at port ${port}`));
