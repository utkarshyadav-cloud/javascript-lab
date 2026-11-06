/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 15
Task Number: 3
*/

// Task 3: Handling Promises with async/await and try-catch
function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

async function run() {
    try {
        const firstMark = await checkMarks(65);
        console.log(firstMark);

        const secondMark = await checkMarks(-5);
        console.log(secondMark);
    } catch (error) {
        console.log("Caught: " + error.message);
    }
}

// Call run()
run();
