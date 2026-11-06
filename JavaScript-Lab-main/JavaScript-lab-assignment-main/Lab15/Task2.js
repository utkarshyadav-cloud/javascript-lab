/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 15
Task Number: 2
*/

// Task 2: Handling promise rejection with .catch()
function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

// Call checkMarks with 120 and print the rejection error message
checkMarks(120)
    .then((result) => {
        console.log("Resolved marks:", result);
    })
    .catch((error) => {
        console.log(error.message);
    });
