/**
 * Problem: Match Any Ending Character using Regex Dot Wildcard
 * 
 * Description:
 * Create a regular expression pattern inside 'isItUseful(string)' to match strings 
 * like "RegExp is very useful!" or "RegExp is very useful." regardless of the ending 
 * punctuation mark using the dot (.) wildcard character.
 * 
 * Sample Input: "RegExp is very useful!" -> Output: true
 */

// Solution: Using the dot wildcard (.) to match any single ending character
function isItUseful(string) {
    return /RegExp is very useful./.test(string);
}

// Alternative ES6 Arrow Function Syntax
// const isItUseful = string => /RegExp is very useful./.test(string);

// Testing the solution
console.log(isItUseful("RegExp is very useful!")); // Outputs: true
console.log(isItUseful("RegExp is very useful.")); // Outputs: true
console.log(isItUseful("RegExp is very useful?")); // Outputs: true
