/**
 * Problem: Sum of Decremented Variables
 * 
 * Description:
 * Write a 'sum' function that returns the sum of three numbers (a, b, c),
 * where each number is decreased by 1 before performing addition.
 * 
 * Prefix decrement (--x) is used to decrement the value BEFORE returning it.
 * 
 * Sample Input 1: (10, 11, -2) -> (9 + 10 + -3) -> Output: 16
 * Sample Input 2: (1, 1, 0)     -> (0 + 0 + -1)  -> Output: -1
 */

// Solution: Using prefix decrement operator (--a + --b + --c)
function sum(a, b, c) {
    return --a + --b + --c;
}

// Testing the solution
console.log(sum(10, 11, -2)); // Outputs: 16
console.log(sum(1, 1, 0));    // Outputs: -1
