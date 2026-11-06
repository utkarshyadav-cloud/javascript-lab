STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 3

1. Experiment Title

Conditions and Loops in JavaScript

2. Aim

To demonstrate the use of if-else-if-else statements, for loops, and while loops in JavaScript.

3. Software / Tools Required

Visual Studio Code, Node.js

4. Theory

Conditional statements such as if, else if, and else are used to make decisions based on conditions. The for loop is used to repeat a block of code a fixed number of times. The while loop repeatedly executes a block of code as long as the specified condition is true.

5. Algorithm / Procedure

Task 1: Conditional Statements

1. Declare a variable marks = 72.
2. Check whether marks are greater than or equal to 75.
3. If true, print Grade A.
4. Otherwise, check whether marks are greater than or equal to 60.
5. If true, print Grade B; otherwise, print Grade C.

Task 2: For Loop

1. Initialize a variable i = 1.
2. Execute the loop while i is less than or equal to 5.
3. Print the value of i.
4. Increment i by 1.

Task 3: While Loop

1. Initialize total = 0 and n = 1.
2. Execute the loop while total is less than or equal to 20.
3. Add n to total.
4. Increment n by 1.
5. Print the final value of total.

6. Program

Task 1: Conditional Statements (task1.js)

<!-- Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 3 T1 -->

let marks = 72;

if (marks >= 75) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}


Task 2: For Loop (task2.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 3 T2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


Task 3: While Loop (task3.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 3 T3

let total = 0;
let n = 1;

while (total <= 20) {
    total += n;
    n++;
}

console.log(total);

7. Input

Task 1: 72

Task 2: Loop starts from 1 and ends at 5.

Task 3: Initial values are total = 0 and n = 1.

8. Output

Task 1:

Grade B

Task 2:

1
2
3
4
5

Task 3:

21

Screenshots saved in the images folder.

9. Result

The experiment was performed successfully to demonstrate conditional statements, for loops, and while loops in JavaScript.