/**
 * Problem: Pass Anonymous Function as Argument
 * 
 * Description:
 * Declare an anonymous function that returns the number 5 
 * and pass it to the 'powFunc' function as an argument.
 */

// Mock powFunc for testing execution
function powFunc(fn) {
  return fn();
}

// Solution using Arrow Function Syntax:
powFunc(() => 5);

// Alternative Solution using Traditional Anonymous Function:
// powFunc(function() {
//   return 5;
// });
