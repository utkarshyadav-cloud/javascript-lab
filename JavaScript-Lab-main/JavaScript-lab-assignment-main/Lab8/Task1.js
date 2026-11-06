/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 8
Task Number: 1
*/

// Task 1: Class inheritance using extends and super
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }

    greet() {
        return `Hello, my name is ${this.name} and I teach ${this.subject}`;
    }
}

// Create Anita who teaches Maths
const teacher = new Teacher("Anita", "Maths");

// Print her greeting
console.log(teacher.greet());
