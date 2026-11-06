/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 9
Task Number: 2
*/

// Task 2: Form validation function returning list of errors
function validateForm(name) {
    const errors = [];
    if (!name || name.trim() === "") {
        errors.push("Name is required");
    }
    return errors;
}

// Test and print results for "Asha" and empty name
console.log("Validation for 'Asha':", validateForm("Asha"));
console.log("Validation for empty name:", validateForm(""));

// Browser DOM handling if running inside a browser environment
if (typeof document !== "undefined") {
    const nameInput = document.getElementById("nameInput");
    const validateBtn = document.getElementById("validateBtn");
    const errorDisplay = document.getElementById("errorDisplay");

    if (validateBtn) {
        validateBtn.addEventListener("click", () => {
            const enteredName = nameInput.value;
            const errors = validateForm(enteredName);

            if (errors.length > 0) {
                errorDisplay.textContent = errors.join(", ");
                errorDisplay.style.color = "red";
            } else {
                errorDisplay.textContent = `Valid name: "${enteredName}" (No errors)`;
                errorDisplay.style.color = "green";
            }
        });
    }
}
