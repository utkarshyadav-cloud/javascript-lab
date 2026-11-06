/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 7
Task Number: 2
*/

// Task 2: ES6 Class Book with constructor and summary method
class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    summary() {
        return `${this.title} has ${this.pages} pages`;
    }
}

// Create book instance: Algorithms, 320 pages
const book1 = new Book("Algorithms", 320);

// Print summary
console.log(book1.summary());
