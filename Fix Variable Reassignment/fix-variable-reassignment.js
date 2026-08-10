/**
 * Problem: Fix Variable Reassignment Error
 * 
 * Description:
 * Fix the error where changing the variable value from "online" to "offline" fails.
 * 
 * Explanation:
 * The original code used 'const', which creates a read-only variable that cannot 
 * be reassigned. Replacing 'const' with 'let' permits reassignment.
 */

// Solution: Use 'let' instead of 'const' to allow value reassignment
let status = "online";
status = "offline";

console.log(status);
