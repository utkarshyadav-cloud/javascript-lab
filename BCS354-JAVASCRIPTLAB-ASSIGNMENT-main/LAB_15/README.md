STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 15

1. Experiment Title: Promises and async/await with Local Data

2. Aim: To implement Promise resolve and reject, use async/await with try/catch, and handle local data using Promises.

3. Software: VS Code, Node.js

4. Theory:

A Promise represents an asynchronous operation and can be pending, fulfilled (resolved), or rejected. The then() method handles successful results, while catch() handles errors. The async keyword defines an asynchronous function, and await waits for a Promise to settle. The try/catch statement handles errors. A Promise can return local data after a specified delay.

5. Algorithm:

Task 1:
1. Define checkMarks(m).
2. Create a Promise.
3. If marks are between 0 and 100, resolve the Promise.
4. Otherwise, reject it with an error.
5. Call checkMarks(80) and print the resolved value.

Task 2:
1. Call checkMarks(120).
2. Handle the rejected Promise using catch().
3. Print the error message.

Task 3:
1. Define an async function run().
2. Use try/catch inside the function.
3. Await checkMarks(65) and print the result.
4. Await checkMarks(-5).
5. Catch the error and print the message.
6. Call run().

Task 4:
1. Define getUsers() that returns a Promise.
2. Resolve the Promise after 100 milliseconds with a local array of users.
3. Define an async function show().
4. Await getUsers().
5. Print each user's name.

6. Program:

Task 1: task1.js

function checkMarks(m) {
    return new Promise((res, rej) => {
        if (m >= 0 && m <= 100) {
            res(m);
        } else {
            rej(new Error("Marks out of range"));
        }
    });
}

checkMarks(80).then(v => console.log(v));


Task 2: task2.js

function checkMarks(m) {
    return new Promise((res, rej) => {
        if (m >= 0 && m <= 100) {
            res(m);
        } else {
            rej(new Error("Marks out of range"));
        }
    });
}

checkMarks(120).catch(e => console.log(e.message));


Task 3: task3.js

function checkMarks(m) {
    return new Promise((res, rej) => {
        if (m >= 0 && m <= 100) {
            res(m);
        } else {
            rej(new Error("Marks out of range"));
        }
    });
}

async function run() {
    try {
        console.log(await checkMarks(65));
        console.log(await checkMarks(-5));
    } catch (e) {
        console.log("Caught: " + e.message);
    }
}

run();


Task 4: task4.js

function getUsers() {
    return new Promise(res => {
        setTimeout(() => {
            res([
                { id: 1, name: "Asha" },
                { id: 2, name: "Rohan" },
                { id: 3, name: "Meera" }
            ]);
        }, 100);
    });
}

async function show() {
    let users = await getUsers();

    users.forEach(u => console.log(u.name));
}

show();


7. Input:

Task 1: 80

Task 2: 120

Task 3: 65, -5

Task 4: getUsers()

8. Output:

Task 1:
80

Task 2:
Marks out of range

Task 3:
65
Caught: Marks out of range

Task 4:
Asha
Rohan
Meera

9. Result:

Successfully implemented Promises, async/await, error handling, and asynchronous local data retrieval in JavaScript.

