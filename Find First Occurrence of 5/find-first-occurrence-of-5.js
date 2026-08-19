/**
 * Problem: Find First Occurrence of Number 5
 * 
 * Description:
 * Find the first occurrence of the number 5 in the given array and return its index.
 * If the number is not found, return -1.
 * 
 * Sample Input 1: [10, 3, 8, 5, 3, 4, 5] -> Output: 3
 * Sample Input 2: [5, 10, 111, 12]        -> Output: 0
 */

// Solution: Linear search loop to return index of 5
function find5(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 5) {
            return i;
        }
    }
    return -1;
}

// Testing the solution
console.log(find5([10, 3, 8, 5, 3, 4, 5])); // Outputs: 3
console.log(find5([5, 10, 111, 12]));       // Outputs: 0
