/**
 * Problem: Captain Adder Function
 * 
 * Description:
 * Define a function named 'captainAdder' that accepts one parameter 'name' 
 * and returns the string "captain " prepended to the name.
 * 
 * Sample Input: "Jack Sparrow"
 * Expected Output: "captain Jack Sparrow"
 */

// Solution: Arrow function using string concatenation
const captainAdder = (name) => "captain " + name;

// Alternative Solution (Using Template Literals):
// const captainAdder = (name) => `captain ${name}`;

// Execute and log result
console.log(captainAdder("Jack Sparrow"));
