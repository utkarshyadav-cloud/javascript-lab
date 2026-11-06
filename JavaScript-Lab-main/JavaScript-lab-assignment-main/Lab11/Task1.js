/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 11
Task Number: 1
*/

// Task 1: Block scope demonstration with let
let level = "outer";

{
    // Block-scoped variable shadowing outer variable
    let level = "inner";
    console.log(level); // Prints "inner"
}

// Accessing outer variable outside the block
console.log(level); // Prints "outer"
