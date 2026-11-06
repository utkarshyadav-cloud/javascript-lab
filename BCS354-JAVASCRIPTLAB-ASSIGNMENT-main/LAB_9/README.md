STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 9

1. Experiment Title

DOM, Validation, Storage and Quiz

2. Aim

To manipulate webpages using DOM, validate form inputs, store data using localStorage, and build a simple quiz application.

3. Software Required

VS Code, Google Chrome Browser

4. Theory

The Document Object Model (DOM) allows JavaScript to access and modify HTML elements. The getElementById() method selects an element using its ID, while innerText changes its displayed text.

Form validation checks whether user input is valid or empty. The localStorage object stores data in the browser, allowing it to remain available after refreshing the page. Radio buttons are used to select quiz answers, and the checked property identifies the selected option.

5. Algorithm

Task 1: DOM Manipulation

1. Create a heading with ID head.
2. Create a button with ID btn.
3. Add a click event to the button.
4. Change the heading text to “Button clicked”.

Task 2: Form Validation

1. Create a function validateForm(name).
2. Initialize an empty error array.
3. Check whether the name is empty.
4. If empty, add “Name is required”.
5. Return the errors.
6. Test the function with valid and empty names.

Task 3: localStorage

1. Create an input field and Save button.
2. Store the input using localStorage.setItem().
3. Retrieve the stored value using localStorage.getItem().
4. Display the saved value when the page loads.

Task 4: Quiz

1. Display a question with three radio options.
2. Allow the user to select an answer.
3. Check the selected answer on button click.
4. Display “Correct” or “Try again”.

6. Program

Task 1: DOM Manipulation (task1.html)

<!-- Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 9 T1 -->

<!DOCTYPE html>
<html>
<head>
    <title>DOM Manipulation</title>
</head>
<body>

<h1 id="head">Welcome</h1>
<button id="btn">Change Text</button>

<script>
document.getElementById("btn").onclick = () => {
    document.getElementById("head").innerText = "Button clicked";
};
</script>

</body>
</html>


Task 2: Form Validation (task2.js)

// Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 9 T2

function validateForm(name) {
    let errors = [];

    if (name.trim() === "") {
        errors.push("Name is required");
    }

    return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));


Task 3: localStorage (task3.html)

<!-- Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 9 T3 -->

<!DOCTYPE html>
<html>
<head>
    <title>Local Storage</title>
</head>
<body>

<input type="text" id="note" placeholder="Enter your note">
<button id="save">Save</button>

<script>
const note = document.getElementById("note");

note.value = localStorage.getItem("note") || "";

document.getElementById("save").onclick = () => {
    localStorage.setItem("note", note.value);
    alert("Note saved successfully");
};
</script>

</body>
</html>


Task 4: Quiz Application (task4.html)

<!-- Name: Utkarsh Yadav | Roll No: BCS2025381 | Ass: 9 T4 -->

<!DOCTYPE html>
<html>
<head>
    <title>Quiz Application</title>
</head>
<body>

<p>What is 2 + 3?</p>

<input type="radio" name="q" value="4"> 4
<input type="radio" name="q" value="5"> 5
<input type="radio" name="q" value="6"> 6

<button id="check">Check</button>

<p id="res"></p>

<script>
document.getElementById("check").onclick = () => {
    let answer = document.querySelector('input[name="q"]:checked');

    document.getElementById("res").innerText =
        (answer && answer.value === "5")
        ? "Correct"
        : "Try again";
};
</script>

</body>
</html>


7. Input

Click the Change Text button, enter names for validation, save a note, and select an answer in the quiz.

8. Output

Heading changes to “Button clicked”.

Validation returns [] for Asha and ["Name is required"] for an empty name.

The note is saved and restored after refreshing the page.

The quiz displays “Correct” for 5 and “Try again” for incorrect answers.

9. Result

The experiment was successfully performed using DOM manipulation, form validation, localStorage, and a quiz application.