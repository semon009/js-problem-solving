/**
 * Problem: Calculate Exponentiation Right to Left using reduceRight()
 * 
 * Description:
 * Given an array of three numbers [x, y, z], compute the right-to-left 
 * exponentiation (x ^ (y ^ z)) using Array.prototype.reduceRight().
 * 
 * Sample Input 1: [1, 2, 3]  -> 1 ^ (2 ^ 3) = 1 ^ 8  -> Output: 1
 * Sample Input 2: [2, 1, 2]  -> 2 ^ (1 ^ 2) = 2 ^ 1  -> Output: 2
 * Sample Input 3: [2, 2, 1]  -> 2 ^ (2 ^ 1) = 2 ^ 2  -> Output: 4
 */

// Solution: Compute right-to-left power evaluation using reduceRight()
function calculateExp(numbers) {
    console.log(numbers.reduceRight((acc, curr) => Math.pow(curr, acc)));
}

// Testing the solution
calculateExp([1, 2, 3]); // Outputs: 1
calculateExp([2, 1, 2]); // Outputs: 2
calculateExp([2, 2, 1]); // Outputs: 4
