/**
 * Problem: Fix Template Literal Interpolation Syntax
 * 
 * Description:
 * Correct the syntax error in the template literal string interpolation.
 * Replaces broken '$variable' syntax with the valid '${variable}' syntax.
 * 
 * Broken Code: console.log(`Today is $month $day, $year.`);
 * Expected Output: Today is December 12, 2121.
 */

let month = "December";
let day = "12";
let year = "2121";

// Solution: Standard template literal interpolation using ${}
console.log(`Today is ${month} ${day}, ${year}.`);
