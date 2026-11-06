STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 13

1. Experiment Title: Reduce, Some, Every and Map

2. Aim: To use reduce(), some(), every() and map() in JavaScript while keeping the original array unchanged.

3. Software: VS Code, Node.js

4. Theory:

The reduce() method combines array elements into a single value. The some() method returns true if at least one element satisfies the condition. The every() method returns true if all elements satisfy the condition. The map() method creates a new array by applying a function to each element, leaving the original array unchanged.

5. Algorithm:

Task 1:
1. Create an array prices = [120, 45, 300].
2. Use reduce() with an initial value of 0.
3. Calculate and print the total.

Task 2:
1. Create an array marks = [72, 85, 30, 90].
2. Use some() to check if any mark is less than 40.
3. Use every() to check if all marks are greater than or equal to 35.
4. Print both results.

Task 3:
1. Create an array m = [72, 85, 64, 90].
2. Use map() to add 5 to each mark.
3. Print the new array.
4. Print the original array to confirm it remains unchanged.

6. Program:

Task 1: task1.js

let prices = [120, 45, 300];

let total = prices.reduce((a, b) => a + b, 0);

console.log(total);


Task 2: task2.js

let marks = [72, 85, 30, 90];

console.log(marks.some(m => m < 40));

console.log(marks.every(m => m >= 35));


Task 3: task3.js

let m = [72, 85, 64, 90];

let newM = m.map(x => x + 5);

console.log(newM);

console.log(m);


7. Input:

Task 1: [120, 45, 300]

Task 2: [72, 85, 30, 90]

Task 3: [72, 85, 64, 90]

8. Output:

Task 1:
465

Task 2:
true
false

Task 3:
[77, 90, 69, 95]
[72, 85, 64, 90]

9. Result:

Successfully implemented reduce(), some(), every() and map() in JavaScript and verified that map() does not modify the original array.

