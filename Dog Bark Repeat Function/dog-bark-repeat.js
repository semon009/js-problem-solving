/**
 * Problem: Dog Bark Repeat Function
 * 
 * Description:
 * Write a function 'speak(n)' that takes a number 'n' representing how many times 
 * a dog should bark, and returns a string with "bark" repeated 'n' times separated by spaces.
 * 
 * Sample Input 1: 3 -> Output: "bark bark bark"
 */

// Solution: Using String.prototype.repeat() and String.prototype.trim()
function speak(n) {
    return "bark ".repeat(n).trim();
}

// Alternative ES6 Arrow Function Syntax
// const speak = n => "bark ".repeat(n).trim();

// Testing the solution
console.log(speak(3)); // Outputs: "bark bark bark"
