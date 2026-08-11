/**
 * Problem: Fix Object Syntax Errors
 * 
 * Description:
 * Find and fix all syntax errors in the given JavaScript object definition.
 * 
 * Errors fixed:
 * 1. Replaced parentheses '(' and ')' with curly braces '{' and '}' for object literal syntax.
 * 2. Added assignment operator '=' after variable name.
 * 3. Wrapped string value 'Jane Taylor' in double quotes.
 */

// Solution: Correct Object literal syntax
let song = {
  name: "Twinkle, Twinkle, Little Star",
  author: "Jane Taylor",
  date: 1806,
};

// Execute and log object
console.log(song);

console.log(song.name);
console.log(song.author);
console.log(song.date);
