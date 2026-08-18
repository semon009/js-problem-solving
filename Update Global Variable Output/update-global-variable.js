/**
 * Problem: Output Updated Global Variable Value
 * 
 * Description:
 * Modify or structure the code execution so that 'myFunc' outputs the updated 
 * global variable value ("new global").
 * 
 * Expected Output:
 * new global
 */

// Solution: Standard reassignment of a global variable
let myVar = "global";

function myFunc() {
    console.log(myVar);
}

myVar = "new global";

myFunc(); // Outputs: new global
