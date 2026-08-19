/**
 * Problem: Calculate Array Sum Until Zero
 * 
 * Description:
 * Calculate the sum of elements in an array of numbers and return it.
 * If the next number in the array is 0, the program must stop processing 
 * further numbers and return the current total sum.
 * 
 * Sample Input 1: [11, 12, 15, 10, 0, 100] -> (11 + 12 + 15 + 10) -> Output: 48
 * Sample Input 2: [100, 0, 100]            -> (100)              -> Output: 100
 */

// Solution: Loop through array and break when element is 0
function sum(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            break;
        }
        total += numbers[i];
    }
    return total;
}

// Testing the solution
console.log(sum([11, 12, 15, 10, 0, 100])); // Outputs: 48
console.log(sum([100, 0, 100]));             // Outputs: 100
