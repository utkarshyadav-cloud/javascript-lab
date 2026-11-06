STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 4

1. Experiment Title

Writing Functions in JavaScript

2. Aim

To demonstrate functions with return values, arrow functions, and default parameters in JavaScript.

3. Software / Tools Required

Visual Studio Code, Node.js

4. Theory

A function is a reusable block of code used to perform a specific task. The return keyword is used to return a value from a function. Arrow functions provide a shorter syntax for writing functions using the => operator. Default parameters assign a default value to a parameter when no argument is provided, such as taxRate = 0.18.

5. Algorithm / Procedure

Task 1: Function with Return

1. Define a function greet(name).
2. Return the message "Hello, " followed by the name.
3. Call the function with "Asha".
4. Display the returned result.

Task 2: Arrow Function

1. Create an arrow function named square.
2. Accept a number n as an argument.
3. Return the square of n.
4. Call the function with 6 and display the result.

Task 3: Default Parameter

1. Define a function billWithTax(amount, taxRate = 0.18).
2. Calculate the tax using amount × taxRate.
3. Add the tax to the amount.
4. Return the final bill.
5. Call the function with 100 and display the result.

6. Program / Queries / Commands

Task 1: Function with Return (task1.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 4 Task1

function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Asha"));


Task 2: Arrow Function (task2.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 4 Task2

const square = (n) => n * n;

console.log(square(6));


Task 3: Default Parameter (task3.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 4 Task3

function billWithTax(amount, taxRate = 0.18) {
    return amount + amount * taxRate;
}

console.log(billWithTax(100));

7. Input

Task 1: Asha

Task 2: 6

Task 3: 100

8. Output

Task 1:

Hello, Asha

Task 2:

36

Task 3:

118

Screenshots saved in the images folder.

9. Result

The experiment was performed successfully to demonstrate functions with return values, arrow functions, and default parameters in JavaScript.