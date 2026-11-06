/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 8
Task Number: 2
*/

// Task 2: Encapsulation with Locker class and checkPin method
class Locker {
    constructor() {
        this.pin = 1234;
    }

    checkPin(number) {
        return number === this.pin;
    }
}

// Create Locker instance
const myLocker = new Locker();

// Test and print checkPin results
console.log(myLocker.checkPin(1111));
console.log(myLocker.checkPin(1234));
