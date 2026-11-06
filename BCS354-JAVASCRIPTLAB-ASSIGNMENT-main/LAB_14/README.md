STANDARD LAB PRACTICAL EXPERIMENT FORMAT

EXPERIMENT NO. 14

1. Experiment Title: Timers and Intervals

2. Aim: To execute code after a delay using setTimeout(), cancel a timer, and repeat code using setInterval().

3. Software: VS Code, Node.js and Chrome

4. Theory:

The setTimeout() method executes a function once after a specified delay. The clearTimeout() method cancels a scheduled timer using its ID. The setInterval() method repeatedly executes a function after a specified interval. The clearInterval() method stops the interval.

Even when setTimeout() uses a delay of 0 milliseconds, its callback executes after the current synchronous code because of the event loop.

5. Algorithm:

Task 1:
1. Print “Start”.
2. Schedule a callback using setTimeout() with a delay of 0 milliseconds.
3. Print “End”.
4. The callback prints “Timer done” after the synchronous code finishes.

Task 2:
1. Schedule a timer to print “Not shown” after 1000 milliseconds.
2. Cancel the timer using clearTimeout().
3. Print “Cancelled”.

Task 3:
1. Initialize count to 0.
2. Start an interval of 200 milliseconds.
3. Increment count and print the tick number.
4. When count reaches 3, stop the interval using clearInterval().

6. Program:

Task 1: task1.js

console.log("Start");

setTimeout(() => {
    console.log("Timer done");
}, 0);

console.log("End");


Task 2: task2.js

let id = setTimeout(() => {
    console.log("Not shown");
}, 1000);

clearTimeout(id);

console.log("Cancelled");


Task 3: task3.js

let count = 0;

let id2 = setInterval(() => {
    count++;
    console.log("Tick " + count);

    if (count == 3) {
        clearInterval(id2);
    }
}, 200);


7. Input:

Timer programs with specified delays and intervals.

8. Output:

Task 1:
Start
End
Timer done

Task 2:
Cancelled

Task 3:
Tick 1
Tick 2
Tick 3

9. Result:

Successfully implemented timers and intervals in JavaScript using setTimeout(), clearTimeout(), setInterval() and clearInterval().
