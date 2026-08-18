/**
 * Problem: Get Random Integer in Range (1 to 3)
 * 
 * Description:
 * Modify the 'getRandom' function so that it returns a random integer 
 * between 1 and 3 (both inclusive).
 * 
 * Expected Output (when called multiple times): Array containing 1, 2, or 3
 */

// Solution: Using Math.random() and Math.floor() to generate range [1, 3]
function getRandom() {
    return Math.floor(Math.random() * 3) + 1;
}

// Testing the solution
console.log(getRandom()); // Outputs: 1, 2, or 3
