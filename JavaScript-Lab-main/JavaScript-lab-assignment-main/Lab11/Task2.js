/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 11
Task Number: 2
*/

// Task 2: Closure demonstration with makeCounter
function makeCounter() {
    let count = 0; // Lexical scope variable preserved by closure

    return function() {
        count++;
        return count;
    };
}

// Create a counter instance
const counter = makeCounter();

// Call returned function twice and print both results
console.log(counter());
console.log(counter());
