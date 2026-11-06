/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 12
Task Number: 3
*/

// Task 3: Higher-order function executing a callback repeatedly
function repeatAction(times, action) {
    for (let i = 1; i <= times; i++) {
        action(i);
    }
}

// Call repeatAction with 3 and a callback logging the round number
repeatAction(3, (round) => {
    console.log("Round " + round);
});
