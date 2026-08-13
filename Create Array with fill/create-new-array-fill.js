/**
 * Problem: Create New Array using fill() Method
 * 
 * Description:
 * Create a function named 'createNewArray' that accepts three arguments: 'value', 'start', and 'end'.
 * Use the fill() method on originalArr to populate and return the array.
 * 
 * Sample Input: value = 3, start = 0, end = 8
 * Expected Output: [3, 3, 3, 3, 3, 3, 3, 3]
 */

const originalArr = [3, 6, 0, 1, 4, 6, 8, 112];

// Solution: Fill originalArr with 'value' from 'start' to 'end' index
function createNewArray(value, start, end) {
  return originalArr.fill(value, start, end);
}

// Testing the solution
console.log(createNewArray(3, 0, 8));
