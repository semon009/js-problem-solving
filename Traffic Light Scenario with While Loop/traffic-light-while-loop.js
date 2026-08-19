/**
 * Problem: Traffic Light Scenario with While Loop
 * 
 * Description:
 * Simulate greeting a friend at a red light using a while loop.
 * Variable 'isRed' is initially set to true. Inside the loop, log "Hey Harry!"
 * and update 'isRed' to false so the loop terminates as the light turns green.
 * 
 * Expected Output:
 * Hey Harry!
 */

// Solution: Standard while loop execution based on boolean condition
let isRed = true;

while (isRed) {
    console.log("Hey Harry!");
    isRed = false;
}
