/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 12
Task Number: 1
*/

// Task 1: Higher-order function applying a function twice
function applyTwice(fn, value) {
    return fn(fn(value));
}

// Function that adds 10 to a number
function addTen(num) {
    return num + 10;
}

// Apply addTen twice to 5 and print result (5 + 10 = 15; 15 + 10 = 25)
console.log(applyTwice(addTen, 5));
