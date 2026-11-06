STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 6

1. Experiment Title

JSON Text in JavaScript

2. Aim

To convert JavaScript objects into JSON text, convert JSON text into JavaScript objects, and handle invalid JSON using try-catch.

3. Software / Tools Required

Visual Studio Code, Node.js

4. Theory

JSON (JavaScript Object Notation) is a text format used to store and exchange data. The JSON.stringify() method converts a JavaScript object into a JSON string. The JSON.parse() method converts valid JSON text into a JavaScript object. Invalid JSON throws an error, which can be handled using a try-catch statement.

5. Algorithm / Procedure

Task 1: Object to JSON Text

1. Create an object containing name and marks.
2. Convert the object into JSON text using JSON.stringify().
3. Display the JSON text.

Task 2: JSON Text to Object

1. Create a valid JSON string containing city and pin.
2. Convert it into a JavaScript object using JSON.parse().
3. Display the city.

Task 3: Handling Invalid JSON

1. Create an invalid JSON string.
2. Attempt to parse it using JSON.parse().
3. Handle the error using try-catch.
4. Display “Invalid JSON” when an error occurs.

6. Program

Task 1: Object to JSON Text (task1.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 6 T1

let obj = {
    name: "Rohan",
    marks: [70, 80]
};

console.log(JSON.stringify(obj));


Task 2: JSON Text to Object (task2.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 6 T2

let txt = '{"city":"Pune","pin":411001}';

let obj = JSON.parse(txt);

console.log(obj.city);


Task 3: Handling Invalid JSON (task3.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 6 T3

let bad = '{name: Rohan}';

try {
    JSON.parse(bad);
} catch (e) {
    console.log("Invalid JSON");
}

7. Input

JavaScript objects and JSON text as specified in the programs.

8. Output

Task 1:

{"name":"Rohan","marks":[70,80]}

Task 2:

Pune

Task 3:

Invalid JSON

Screenshots saved in the images folder.

9. Result

The experiment was performed successfully to convert JavaScript objects to JSON text, parse JSON text into objects, and handle invalid JSON using try-catch.