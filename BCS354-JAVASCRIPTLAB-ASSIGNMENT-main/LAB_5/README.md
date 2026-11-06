STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 5

1. Experiment Title

Arrays, Array Methods and Nested Arrays in JavaScript

2. Aim

To create arrays, access array elements, use forEach() and filter() methods, and access elements of nested arrays.

3. Software / Tools Required

Visual Studio Code, Node.js

4. Theory

An array is used to store multiple values in a single variable. Array indexing starts from 0. The length property returns the number of elements in an array. The forEach() method executes a function for each array element. The filter() method creates a new array containing elements that satisfy a specified condition. A nested array is an array inside another array, and its elements can be accessed using multiple indices.

5. Algorithm / Procedure

Task 1: Array Creation and Access

1. Create an array marks containing 72, 85, 64, and 90.
2. Print the length of the array.
3. Print the first element using marks[0].

Task 2: Using forEach()

1. Create an array subjects containing Maths, Science, and English.
2. Use forEach() to access each subject.
3. Print each subject.

Task 3: Using filter()

1. Create an array containing 72, 85, 45, and 90.
2. Use filter() to select marks greater than or equal to 60.
3. Print the filtered array.

Task 4: Nested Array

1. Create a nested array grid.
2. Access the element at index [1][2].
3. Print the result.

6. Program

Task 1: Array Creation and Access (task1.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 5 T1

let marks = [72, 85, 64, 90];

console.log(marks.length);
console.log(marks[0]);


Task 2: Using forEach() (task2.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 5 T2

let subjects = ["Maths", "Science", "English"];

subjects.forEach(s => console.log(s));


Task 3: Using filter() (task3.js