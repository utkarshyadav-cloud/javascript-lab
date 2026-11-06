/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 6
Task Number: 2
*/

// Task 2: Parse valid JSON text into a JavaScript object and access property
const jsonText = '{"city":"Pune","pin":411001}';

const parsedData = JSON.parse(jsonText);
console.log(parsedData.city);
