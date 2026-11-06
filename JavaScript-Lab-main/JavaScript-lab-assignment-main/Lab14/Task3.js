/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 14
Task Number: 3
*/

// Task 3: Repeated execution using setInterval and termination via clearInterval
let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log("Tick " + count);

    // Stop when count reaches 3
    if (count === 3) {
        clearInterval(intervalId);
    }
}, 200);
