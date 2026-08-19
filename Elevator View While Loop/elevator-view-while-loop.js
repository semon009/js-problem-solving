/**
 * Problem: Elevator View Scenario using While Loop
 * 
 * Description:
 * Simulate a glass elevator ascending from floor 1 to floor 10 using a while loop.
 * - Below floor 6 (floors 1 to 5): Output "Tree!"
 * - Floor 6 and above (floors 6 to 10): Output "City!"
 * Increment floor counter 'n' on each iteration.
 * 
 * Expected Output:
 * Tree! (5 times)
 * City! (5 times)
 */

// Solution: Elevator simulation using while loop and conditional logic
let n = 1;

while (n <= 10) {
    if (n < 6) {
        console.log("Tree!");
    } else {
        console.log("City!");
    }
    n++;
}
