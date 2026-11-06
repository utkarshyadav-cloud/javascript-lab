/*
Student Name: Utkarsh Yadav
Roll Number: 2510303537
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 9
Task Number: 3
*/

// DOM elements
const noteBox = document.getElementById("noteBox");
const saveBtn = document.getElementById("saveBtn");
const statusMsg = document.getElementById("statusMsg");

// When the page opens/loads, retrieve saved note from localStorage
window.addEventListener("DOMContentLoaded", () => {
    const savedNote = localStorage.getItem("note");
    if (savedNote !== null) {
        noteBox.value = savedNote;
        if (statusMsg) {
            statusMsg.textContent = "Loaded previously saved note from localStorage.";
        }
    }
});

// When Save button is clicked, store note into localStorage under key "note"
saveBtn.addEventListener("click", () => {
    const textToSave = noteBox.value;
    localStorage.setItem("note", textToSave);
    if (statusMsg) {
        statusMsg.textContent = "Note saved to localStorage successfully!";
    }
});
