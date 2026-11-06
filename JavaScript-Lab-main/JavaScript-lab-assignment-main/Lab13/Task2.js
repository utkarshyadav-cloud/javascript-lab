/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 13
Task Number: 2
*/

// Task 2: Testing array elements with some() and every()
const marks = [72, 85, 30, 90];

// Check if any mark is below 40
const hasMarkBelow40 = marks.some((mark) => mark < 40);

// Check if all marks are 35 or more
const allMarksAbove35 = marks.every((mark) => mark >= 35);

// Print both results
console.log("Any mark below 40:", hasMarkBelow40);
console.log("All marks 35 or more:", allMarksAbove35);
