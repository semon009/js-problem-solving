/**
 * Problem: Fix Do-While Loop Syntax Errors
 * 
 * Description:
 * Correct the syntax errors in the provided do...while loop snippet.
 * 
 * Original Broken Code:
 * let n = 5;
 * do (n < 10) { ... } while;
 * 
 * Expected Output:
 * 6
 * 7
 * 8
 * 9
 * 10
 */

// Solution: Correct placement of code block {} and condition inside while()
let n = 5;

do {
    n = n + 1;
    console.log(n);
} while (n < 10);
