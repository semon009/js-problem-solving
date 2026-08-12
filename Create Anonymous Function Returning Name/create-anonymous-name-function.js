/**
 * Problem: Create Anonymous Function Returning Name
 * 
 * Description:
 * Create an anonymous function that returns the string "John" and 
 * assigns it to the 'createName' const.
 * 
 * Expected Output:
 * John
 */

// Solution 1: Standard Anonymous Function Expression
const createName = function () {
  return "John";
};

// Solution 2: Anonymous Arrow Function (Concise Syntax)
// const createName = () => "John";

// Execute and log result
console.log(createName());
