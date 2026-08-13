/**
 * Problem: Create Array from String using Array.from()
 * 
 * Description:
 * Complete the 'getArrayWithLength' function to create and return a new array
 * from the given string using the Array.from() method.
 * 
 * Sample Input: "Hello JS Arrays"
 * Expected Output: ['H', 'e', 'l', 'l', 'o', ' ', 'J', 'S', ' ', 'A', 'r', 'r', 'a', 'y', 's']
 */

// Solution: Use Array.from() to split a string into an array of characters
function getArrayWithLength(string) {
  return Array.from(string);
}

// Testing the solution
console.log(getArrayWithLength("Hello JS Arrays"));
