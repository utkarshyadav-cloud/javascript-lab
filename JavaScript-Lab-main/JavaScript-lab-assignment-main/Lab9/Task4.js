/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 9
Task Number: 4
*/

// Quiz evaluation logic
const checkBtn = document.getElementById("checkBtn");
const resultMsg = document.getElementById("resultMsg");

checkBtn.addEventListener("click", () => {
    // Get the selected radio button for name="quizOption"
    const selectedOption = document.querySelector('input[name="quizOption"]:checked');

    if (selectedOption && selectedOption.value === "5") {
        resultMsg.textContent = "Correct";
        resultMsg.className = "correct";
    } else {
        resultMsg.textContent = "Try again";
        resultMsg.className = "incorrect";
    }
});
