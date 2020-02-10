/*Data model
Lets first start with creating the data model.
Create all the sql for creating this data model: https://dbdiagram.io/d/5d5bff66ced98361d6ddc18c*/

CREATE database meal_sharing_db;
USE meal_sharing_db;
CREATE TABLE meal (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
location VARCHAR(50) NOT NULL,
`when` DATETIME NOT NULL,
max_reservations INT NOT NULL,
price DECIMAL(10,2) NOT NULL,
created_date DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE reservation (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
number_of_guests INT UNSIGNED NOT NULL,
meal_id INT UNSIGNED NOT NULL,
created_date DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE review (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
meal_id INT UNSIGNED NOT NULL,
stars INT UNSIGNED NOT NULL,
created_date DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- CREATING queries
-- MEAL

-- Get all meals

SELECT * FROM meal;

-- Add a new meal

INSERT INTO meal (
title,
description,
location,
`when`, 
max_reservations,
price
)
VALUES
(
'Hamburger', 
'sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun', 
'Rådhuspladsen',
'2019-11-28',
4,
400
);

-- Get a meal with any id, fx 1

SELECT * FROM meal
WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE meal SET title = 'Pizza'
WHERE meal.id = 1;

 -- OR
 
 UPDATE meal SET id = '2'
WHERE meal.id = 4;
 
 -- Delete a meal with any id, fx 1
 
DELETE FROM meal
WHERE meal.id = 6;

-- RESERVATION:

-- Get all reservations

SELECT * FROM reservation;

-- Add a new reservation

INSERT INTO reservation (
number_of_guests,
meal_id,
created_date
)
VALUES
(
10, 
1,
'2019-11-28'
);

-- Get a reservation with any id, fx 1

SELECT * FROM reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE reservation SET number_of_guests = 20
WHERE reservation.id = 1;

-- Delete a reservation with any id, fx 1

DELETE from reservation
WHERE id = 2;

-- Review

-- Get all reviews

SELECT * FROM review;

-- Add a new review

INSERT INTO review (
title,
description,
meal_id,
stars,
created_date
)
VALUES
(
'excellent',
'great food, excellent service and nice staff', 
1,
4,
'2019-11-28'
);

-- Get a review with any id, fx 1

SELECT * FROM review
WHERE id = 3;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE review SET stars = 5
WHERE review.id = 1;

-- OR

UPDATE review SET title = 'good', description = 'good food, ok service', stars = 3
WHERE review.id = 3;

-- Delete a review with any id, fx 1

DELETE FROM review
WHERE id = 4;

-- Get meals that has a price smaller than a specific price fx 90

SELECT meal.title AS meal_title, meal.description AS meal_description, 
meal.price AS meal_price 
FROM meal
WHERE price < 20; 

-- Get meals that still has available reservations

SELECT meal.id AS meal_id, meal.title AS meal_title,  
SUM(reservation.number_of_guests), 
meal.max_reservations
FROM meal 
JOIN reservation ON reservation.meal_id = meal.id
WHERE reservation.number_of_guests < meal.max_reservations
GROUP BY reservation.meal_id
ORDER BY max_reservations DESC;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT * FROM meal
WHERE title LIKE '%Rød grød med%';

-- Get meals that has been created between two dates

SELECT * FROM meal
WHERE created_date BETWEEN '2019-11-20' AND '2019-11-29';

-- Get only specific number of meals fx return only 5 meals

SELECT  count(id) AS number_of_meals FROM meal
WHERE price > 100;

-- Get the meals that have good reviews

SELECT  meal.id, meal.title, meal.description, meal.price, review.stars FROM meal
INNER JOIN review ON review.meal_id = meal.id
WHERE review.stars >= 4;

-- Get reservations for a specific meal sorted by created_date

SELECT * FROM reservation
WHERE number_of_guests BETWEEN 13 AND 20
ORDER BY created_date DESC;

-- Sort all meals by average number of stars in the reviews

SELECT meal.id AS meal_id, meal.title AS meal_title, 
meal.description AS meal_description, review.stars FROM meal
INNER JOIN review ON review.meal_id = meal.id
ORDER BY review.stars DESC;


