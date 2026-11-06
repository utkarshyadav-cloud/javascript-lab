STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 8

1. Experiment Title

Inheritance, Methods and Composition in JavaScript

2. Aim

To demonstrate inheritance using the extends keyword, create methods to check values, and implement object composition in JavaScript.

3. Software / Tools Required

Visual Studio Code, Node.js

4. Theory

Inheritance allows one class to acquire properties and methods from another class. The extends keyword is used to create a child class, and the super() method calls the constructor of the parent class.

Composition is a technique in which an object contains another object as a property. In this experiment, an Engine object is included inside a Car object. The checkPin() method compares the entered PIN with the stored PIN and returns true or false.

5. Algorithm / Procedure

Task 1: Inheritance

1. Create a Person class with a name property.
2. Define a greet() method.
3. Create a Teacher class that extends Person.
4. Use super() to call the parent constructor.
5. Create a Teacher object named Anita with subject Maths.
6. Display the greeting.

Task 2: Methods and PIN Checking

1. Create a Locker class.
2. Initialize the PIN to 1234.
3. Define a checkPin() method.
4. Compare the entered PIN with the stored PIN.
5. Display the results for 1111 and 1234.

Task 3: Composition

1. Create an Engine class with a power property.
2. Create a Car class.
3. Store an Engine object inside the Car object.
4. Define a start() method.
5. Display the car's starting message.

6. Program

Task 1: Inheritance (task1.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 8 T1

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, I am " + this.name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

let t = new Teacher("Anita", "Maths");

console.log(t.greet());


Task 2: PIN Checking (task2.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 8 T2

class Locker {
    constructor() {
        this.pin = 1234;
    }

    checkPin(n) {
        return n === this.pin;
    }
}

let l = new Locker();

console.log(l.checkPin(1111));
console.log(l.checkPin(1234));


Task 3: Composition (task3.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 8 T3

class Engine {
    constructor(power) {
        this.power = power;
    }
}

class Car {
    constructor(power) {
        this.engine = new Engine(power);
    }

    start() {
        return "Car starts with " + this.engine.power + " HP";
    }
}

console.log(new Car(150).start());

7. Input

Task 1: Anita, Maths

Task 2: 1111, 1234

Task 3: 150 HP

8. Output

Task 1:

Hi, I am Anita

Task 2:

false
true

Task 3:

Car starts with 150 HP

Screenshots saved in the images folder.

9. Result

The experiment was performed successfully to demonstrate inheritance, methods, PIN checking, and composition in JavaScript.