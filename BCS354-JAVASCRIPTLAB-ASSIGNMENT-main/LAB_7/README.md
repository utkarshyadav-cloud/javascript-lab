STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 7

1. Experiment Title

Constructor Functions and Classes in JavaScript

2. Aim

To create objects using constructor functions and ES6 classes, and add methods using the prototype property.

3. Software / Tools Required

Visual Studio Code, Node.js

4. Theory

A constructor function is used to create objects using the this keyword and the new operator. ES6 classes provide a modern syntax for creating objects and contain a constructor method for initializing properties. The prototype property allows methods to be added to objects created by a constructor function. In this experiment, the result() method returns Pass if marks are greater than or equal to 40; otherwise, it returns Fail.

5. Algorithm / Procedure

Task 1: Constructor Function

1. Define a Student constructor with name and marks parameters.
2. Initialize the properties using this.
3. Create a Student object using the new keyword.
4. Display the student's name and marks.

Task 2: ES6 Class

1. Create a class named Book.
2. Define a constructor with title and pages parameters.
3. Create a summary() method.
4. Create a Book object.
5. Display the summary.

Task 3: Prototype Method

1. Define a Student constructor.
2. Add a result() method using Student.prototype.
3. Check whether marks are greater than or equal to 40.
4. Return Pass or Fail.
5. Create a Student object and display the result.

6. Program

Task 1: Constructor Function (task1.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 7 T1

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

let s = new Student("Asha", 88);

console.log(s.name);
console.log(s.marks);


Task 2: ES6 Class (task2.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 7 T2

class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    summary() {
        return this.title + " has " + this.pages + " pages";
    }
}

let b = new Book("Algorithms", 320);

console.log(b.summary());


Task 3: Prototype Method (task3.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381