/**
 * Problem: Fix Arrow Function Syntax Error
 * 
 * Description:
 * Find and fix the syntax error in the arrow function definition.
 * 
 * Error fixed:
 * Replaced '=' with '=>' after the parameter list to use valid ES6 arrow function syntax.
 */

// Solution: Correct arrow function syntax using '=>'
let someFunc = (k, l, m) => k + l + m;

// Testing the solution
console.log(someFunc(1, 2, 3)); // Outputs: 6
