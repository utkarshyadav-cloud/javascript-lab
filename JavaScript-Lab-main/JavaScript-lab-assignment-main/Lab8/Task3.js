/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 8
Task Number: 3
*/

// Task 3: Object composition: Car composed with an Engine
class Engine {
    constructor(power) {
        this.power = power;
    }
}

class Car {
    constructor(power) {
        // Car contains an Engine object
        this.engine = new Engine(power);
    }

    start() {
        return `Car starts with ${this.engine.power} HP`;
    }
}

// Create Car with power 150
const myCar = new Car(150);

// Print the result of start()
console.log(myCar.start());
