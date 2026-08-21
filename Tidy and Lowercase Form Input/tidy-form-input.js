/**
 * Problem: Tidy and Lowercase Form Input
 * 
 * Description:
 * Tidy up form input data by stripping leading and trailing whitespace 
 * and converting all characters to lowercase.
 * 
 * Sample Input 1: "Test   " -> Output: "test"
 * Sample Input 2: " test "  -> Output: "test"
 * Sample Input 3: "  TEST"  -> Output: "test"
 */

// Solution: Combining String.prototype.trim() and String.prototype.toLowerCase()
function prepareData(line) {
    return line.trim().toLowerCase();
}

// Alternative ES6 Arrow Function Syntax
// const prepareData = line => line.trim().toLowerCase();

// Testing the solution
console.log(prepareData("Test   ")); // Outputs: "test"
console.log(prepareData(" test "));  // Outputs: "test"
console.log(prepareData("  TEST"));  // Outputs: "test"
