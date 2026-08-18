/**
 * Problem: Print Cubes of Numbers (1 to 5)
 * 
 * Description:
 * Write a function 'myFunc' that defines a counter variable 'i' inside a for loop
 * to calculate and print the cubes of numbers from 1 to 5.
 * Using 'let' is appropriate here for block-scoped iteration.
 * 
 * Expected Output:
 * 1
 * 8
 * 27
 * 64
 * 125
 */

// Solution: Function declaration using let for block scope
function myFunc() {
    for (let i = 1; i <= 5; i++) {
        console.log(Math.pow(i, 3));
    }
}
