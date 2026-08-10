/**
 * Problem: Difference Between Number and Sum
 * 
 * Description:
 * Write a function that returns the difference between the number 'a' 
 * and the sum of 'b' and 'c'. Use the 'return' operator.
 * 
 * Sample Input 1: 33, 2, 1   -> Expected Output 1: 30
 * Sample Input 2: 30, 20, 10 -> Expected Output 2: 0
 */

// Solution: Calculate and return a - (b + c)
function difference(a, b, c) {
  return a - (b + c);
}

// Testing the solution
console.log(difference(33, 2, 1));   // Outputs: 30
console.log(difference(30, 20, 10)); // Outputs: 0
