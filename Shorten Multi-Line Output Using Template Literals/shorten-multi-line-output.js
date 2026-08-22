/**
 * Problem: Shorten Multi-Line Output Using Template Literals
 * 
 * Description:
 * Rewrite multiple sequential console.log calls into a single concise 
 * template literal string while maintaining empty lines between words.
 * 
 * Original Code:
 * console.log("I");console.log();console.log("know");console.log();console.log("JavaScript");
 * 
 * Expected Output:
 * I
 * 
 * know
 * 
 * JavaScript
 */

// Solution: Single console.log using multi-line Template Literal
console.log(`I

know

JavaScript`);
