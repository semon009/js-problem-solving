/**
 * Problem: Create Arrow Function Returning Hello World
 * 
 * Description:
 * Create an arrow function that returns the "Hello world!" string 
 * and assigns it to the 'greeting' const.
 * 
 * Expected Output:
 * Hello world!
 */

// Solution: Assign an arrow function to a constant variable
const greeting = () => {
  return "Hello world!";
};

// Alternative concise syntax with implicit return:
// const greeting = () => "Hello world!";

// Execute and log result
console.log(greeting());
