/**
 * Problem: Check String Argument Fix
 * 
 * Description:
 * Correct the syntax error in the first function call (mismatched quotes) 
 * and replace the argument in the second call with "test code" (or a valid string) 
 * so that both console.log outputs return true.
 * Do not modify the original 'isString' function.
 * 
 * Expected Output:
 * true
 * true
 */

function isString(data) {
    if (typeof data === 'string') {
        return true;
    }
    else {
        return false;
    }
}

// Fixed arguments to ensure both calls output true
console.log(isString("this is a string"));
console.log(isString("test code"));
