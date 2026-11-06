/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 15
Task Number: 1
*/

// Task 1: Promise creation and fulfillment handling
function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

// Call checkMarks with 80 and print resolved value
checkMarks(80)
    .then((result) => {
        console.log("Resolved marks:", result);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
