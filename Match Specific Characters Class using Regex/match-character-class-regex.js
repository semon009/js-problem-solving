/**
 * Problem: Match Specific Character Class using Regex
 * 
 * Description:
 * Create a regular expression pattern that matches strings 'bat' and 'cat', 
 * but does not match 'at' or 'att'.
 * 
 * Expected Matches:
 * - "bat" -> true
 * - "cat" -> true
 * - "at"  -> false
 * - "att" -> false
 */

// Solution: Using character class [bc] followed by "at"
function doesItMatch(string) {
    return /[bc]at/.test(string);
}

// Alternative ES6 Arrow Function Syntax
// const doesItMatch = string => /[bc]at/.test(string);

// Testing the solution
console.log(doesItMatch("bat")); // Outputs: true
console.log(doesItMatch("cat")); // Outputs: true
console.log(doesItMatch("at"));  // Outputs: false
console.log(doesItMatch("att")); // Outputs: false
