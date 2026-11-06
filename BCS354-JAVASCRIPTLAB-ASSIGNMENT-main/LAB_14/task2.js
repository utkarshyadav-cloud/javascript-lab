/*
 Name : Utkarsh Yadav
 Roll No : BCS2025381
 Assignment No : 14
 Task No : 2
*/

let timerId = setTimeout(() => {
  console.log("Not shown");
}, 1000);

clearTimeout(timerId);
console.log("Cancelled");