/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 7
Task Number: 3
*/

// Task 3: Constructor function with prototype method
function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

// Add result() method through prototype
Student.prototype.result = function() {
    if (this.marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
};

// Create Asha with marks 88
const asha = new Student("Asha", 88);

// Print the result
console.log(asha.result());
