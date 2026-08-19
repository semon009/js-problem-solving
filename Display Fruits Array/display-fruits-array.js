/**
 * Problem: Display Fruits Array Line by Line
 * 
 * Description:
 * Create an array containing three fruits (apple, orange, banana) 
 * and display each fruit line by line in the console using a loop.
 * 
 * Expected Output:
 * apple
 * orange
 * banana
 */

const fruits = ["apple", "orange", "banana"];

// Solution: Iterating through array elements using for...in loop
for (let i in fruits) {
    console.log(fruits[i]);
}
