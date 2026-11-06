/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 2
Task Number: 3
*/

// Task 3: Simple calculator using if-else if conditions
const a = 8;
const b = 4;
let operator = "+";

console.log("--- Check 1 (operator is '+') ---");
if (operator === "+") {
    console.log("Sum:", a + b);
} else if (operator === "-") {
    console.log("Difference:", a - b);
}

// Changing the operator to "-" and repeating the check
operator = "-";

console.log("--- Check 2 (operator changed to '-') ---");
if (operator === "+") {
    console.log("Sum:", a + b);
} else if (operator === "-") {
    console.log("Difference:", a - b);
}
