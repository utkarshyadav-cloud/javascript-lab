STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 12

1. Experiment Title: Callbacks and Higher-Order Functions

2. Aim: To pass a function as an argument and understand callbacks and higher-order functions.

3. Software: VS Code, Node.js

4. Theory:

A higher-order function is a function that takes another function as an argument or returns a function. A callback is a function passed as an argument to another function. The applyTwice() function calls the given function two times.

5. Algorithm:

Task 1:
1. Define applyTwice(func, value).
2. Call func(value) and store the result.
3. Call func() again with the result.
4. Define addTen(n) to return n + 10.
5. Call applyTwice(addTen, 5) and print the result.

Task 2:
1. Define formatMarks(marks, callback).
2. Return callback(marks).
3. Pass a callback that formats marks as “Marks: 76/100”.
4. Print the result.

Task 3:
1. Define repeatAction(times, action).
2. Use a loop from 1 to times.
3. Call action(i) during each iteration.
4. Call repeatAction() three times and print each round.

6. Program:

Task 1: task1.js

function applyTwice(func, value) {
    return func(func(value));
}

function addTen(n) {
    return n + 10;
}

console.log(applyTwice(addTen, 5));


Task 2: task2.js

function formatMarks(m, callback) {
    return callback(m);
}

console.log(formatMarks(76, (m) => "Marks: " + m + "/100"));


Task 3: task3.js

function repeatAction(times, action) {
    for (let i = 1; i <= times; i++) {
        action(i);
    }
}

repeatAction(3, (n) => {
    console.log("Round " + n);
});


7. Input:

Task 1: 5

Task 2: 76

Task 3: 3

8. Output:

Task 1:
25

Task 2:
Marks: 76/100

Task 3:
Round 1
Round 2
Round 3

9. Result:

Successfully implemented callbacks and higher-order functions in JavaScript.
