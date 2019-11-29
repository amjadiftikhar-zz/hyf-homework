CREATE SCHEMA `student_db`;
USE student_db;
CREATE TABLE `student` (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`name` VARCHAR(255) NOT NULL, 
`email` VARCHAR(255) NOT NULL, 
`phone` INT NOT NULL, 
`class_id` INT NOT NULL,
PRIMARY KEY(`id`),
CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE RESTRICT
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `class` (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`name` VARCHAR(255) NOT NULL, 
`begins` DATETIME NOT NULL, 
`ends` DATETIME NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create an index on the name column of the student table.

ALTER TABLE student ADD INDEX (name);

-- Add a new column to the class table named status which can only have the following 
-- values: not-started, ongoing, finished (hint: enumerations).

ALTER TABLE class 
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';


INSERT INTO `class` (
`id`, `name`, `begins`, `ends`)
 VALUES (10, 'class10', '2019-10-10 12:00:00', '2020-12-10 12:00');
 
 -- UPDATE class SET status = 'finished' where id = 8;
 
 
INSERT INTO `student` (
`id`, `name`, `email`, `phone`, `class_id`)
 VALUES (12, 'Adam Smith', 'smith@bla.com', 769365297, 5);
 
