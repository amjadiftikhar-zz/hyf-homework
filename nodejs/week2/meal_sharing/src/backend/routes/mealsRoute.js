const express = require("express");
const route = express.Router();
const fs = require("fs");
const data = fs.readFileSync(__dirname + "/../data/meals.json");
const meals = JSON.parse(data);

//Respond with the json for all the meals

route.get("/", (req, res) => {
	res.json(meals);
});

//Respond with the json for the meal with the corresponding id

route.get("/:id", (req, res) => {
	const { id } = req.params;
	const mealsById = meals.filter(meal => {
		return meal.id === parseInt(id);
	});
	res.send(mealsById);
});

// Get meals that has a price smaller than maxPrice
// Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde 
// Get meals that has been created after the date   
// Only specific number of meals


route.get("/api/meals", (req, res) => {
    const {maxPrice} = req.query
    console.log(req.query.maxPrice); 
    const {title} = req.query
    console.log(req.query.title);
    const {createdAfter} = req.query   
    console.log(req.query.createdAfter)
    const {limit} = req.query   
    console.log(req.query.limit)
if(maxPrice){    
	const mealPrice = meals.filter(meal => {
        return meal.price <= parseInt(maxPrice);        
    });    
    res.send(mealPrice);
}	
if(title){    
	const mealTitle = meals.filter(meal => {
        return meal.title.toLowerCase().includes(title.toLowerCase());        
    });    
    res.send(mealTitle);
}	
if(createdAfter){    
	const createdAfterDate = meals.filter(meal => {
        return meal.createdAt >= createdAfter;        
    });    
    res.send(createdAfterDate);
}
if(limit){    
	const limitedMeal = meals.slice(0, limit);    
    res.send(limitedMeal);
}
});


module.exports = route;
