/**
 * Problem: Calculate Array Sum and Check if Finite
 * 
 * Description:
 * Calculate the sum of all numerical values in the 'data' array 
 * and verify if the result is a finite number using isFinite().
 * 
 * Input: [5, -13, 3, 21, 0, 9]
 * Expected Output: true
 */

let data = [5, -13, 3, 21, 0, 9];

// Calculate sum using a loop
let sum = 0;
for (let i = 0; i < data.length; i++) {
    sum += data[i];
}

// Check if the sum is a finite number
console.log(isFinite(sum)); // Outputs: true
