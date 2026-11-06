/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 14
Task Number: 2
*/

// Task 2: Scheduling and cancelling a timer using clearTimeout
const timerId = setTimeout(() => {
    console.log("Not shown");
}, 1000);

// Cancel the scheduled timer
clearTimeout(timerId);

// Print Cancelled
console.log("Cancelled");
