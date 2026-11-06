/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 13
Task Number: 1
*/

// Task 1: Accumulate total using Array.prototype.reduce starting at 0
const prices = [120, 45, 300];

const total = prices.reduce((accumulator, currentPrice) => {
    return accumulator + currentPrice;
}, 0);

// Print the total
console.log("Total:", total);
