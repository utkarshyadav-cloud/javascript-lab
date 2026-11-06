/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 12
Task Number: 2
*/

// Task 2: Higher-order function receiving a callback for formatting
function formatMarks(marks, callback) {
    return callback(marks);
}

// Invoke formatMarks with 76 and an arrow callback
const result = formatMarks(76, (marks) => `Marks: ${marks}/100`);

// Print the formatted result
console.log(result);
