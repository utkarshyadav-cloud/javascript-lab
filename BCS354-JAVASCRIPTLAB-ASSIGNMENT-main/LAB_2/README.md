STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 2

1. Experiment Title

Data Types in JavaScript

2. Aim

To identify and check different data types in JavaScript using the typeof operator.

3. Software / Tools Required

Visual Studio Code, Google Chrome Browser

4. Theory

JavaScript has eight data types: Number, String, Boolean, Undefined, Null, Object, Symbol, and BigInt. The typeof operator is used to determine the data type of a value and returns the result as a string.

5. Algorithm / Procedure

1. Create a folder named Assignment 2.
2. Create an HTML file named datatype.html.
3. Declare variables of different data types.
4. Use the typeof operator to check their data types.
5. Display the results using console.log().
6. Open the file in a browser.
7. Open the browser console and observe the output.
8. Take a screenshot and save it in the images folder.

6. Program

datatype.html

<!-- Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 2 -->

<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Data Types</title>
</head>
<body>

<script>
let n = 10;
let s = "hello";
let b = true;
let u;
let obj = { name: "Utkarsh Yadav" };

console.log(
    typeof n,
    typeof s,
    typeof b,
    typeof u,
    typeof obj
);
</script>

</body>
</html>

7. Input

File Name: datatype.html

8. Output

number string boolean undefined object

Screenshot saved in the images folder.

9. Result

The experiment was performed successfully to identify JavaScript data types using the typeof operator.