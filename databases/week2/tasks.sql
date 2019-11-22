 -- 1. Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
/* INSERT INTO task (
title, 
description, 
created, 
updated, 
due_date, 
status_id, 
user_id
) 
VALUES
 (
'write your program', 
'use your skills', 
'2019-11-18 23:30:00', 
'2019-11-18 23:30:00', 
'2019-12-18 23:30:00',
2,
12
);
 */
 
 -- 2. Change the title of a task with these attributes: taskID, newTitle
 -- UPDATE task SET title = 'change clothes' WHERE task.id = 1; 
 
 -- 3. Change the task due date with these attributes: taskID, newDueDate
 -- UPDATE task SET due_date = '2025-10-25 00:00:00' WHERE task.id = 1; 
 
 -- 4. Change the task status with these attributes: taskID, newStatus
 -- UPDATE task SET status_id = 1 WHERE task.id = 1;
 
 -- 5. Mark a task as complete with this attribute: taskID
 -- UPDATE task SET status_id = 3 WHERE task.id = 4;
 
 -- 6. Delete task with this attribute: taskID
 -- DELETE from task WHERE task.id = 10;
 
 
 
 