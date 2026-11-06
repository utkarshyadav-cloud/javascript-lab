STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 11

1. Experiment Title

Scope and Closures in JavaScript

2. Aim

To demonstrate block scope, global scope, and closures in JavaScript using functions.

3. Software / Tools Required

Visual Studio Code, Node.js

4. Theory

Block scope means a variable declared using let or const inside a block is accessible only within that block. A global variable is declared outside any function and can be accessed throughout the program.

A closure is created when an inner function remembers and accesses variables from its outer function, even after the outer function has finished executing.

5. Algorithm / Procedure

Task 1: Block Scope

1. Declare a variable level with value "outer".
2. Create a block using curly braces.
3. Declare another variable level with value "inner" inside the block.
4. Print the inner variable.
5. After the block, print the outer variable.

Task 2: Closure

1. Create a function makeCounter().
2. Initialize count to 0.
3. Return an inner function that increments count.
4. Create a counter object.
5. Call the counter twice and display the results.

Task 3: Global Scope

1. Declare a global variable school.
2. Create a function showSchool().
3. Display a welcome message using the global variable.
4. Call the function.

6. Program

Task 1: Block Scope (task1.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 11 T1

let level = "outer";

{
    let level = "inner";
    console.log(level);
}

console.log(level);


Task 2: Closure (task2.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 11 T2

function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let c = makeCounter();

console.log(c());
console.log(c());


Task 3: Global Scope (task3.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 11 T3

let school = "Sample College";

function showSchool() {
    console.log("Welcome to " + school);
}

showSchool();

7. Input

Task 1: outer, inner

Task 2: Counter initialized to 0

Task 3: Sample College

8. Output

Task 1:

inner
outer

Task 2:

1
2

Task 3:

Welcome to Sample College

Screenshots saved in the images folder.

9. Result

The experiment was performed successfully to demonstrate block scope, global scope, and closures in JavaScript.
