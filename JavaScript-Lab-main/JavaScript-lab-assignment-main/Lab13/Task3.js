/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 13
Task Number: 3
*/

// Task 3: Transforming arrays immutably with Array.prototype.map
const originalMarks = [72, 85, 64, 90];

// Use map() to create a new array with each mark increased by 5
const updatedMarks = originalMarks.map((mark) => mark + 5);

// Print new array and original array
console.log("New array:", updatedMarks);
console.log("Original array:", originalMarks);
