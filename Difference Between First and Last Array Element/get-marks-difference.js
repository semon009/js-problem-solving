/**
 * Problem: Difference Between First and Last Array Element
 * 
 * Description:
 * Compare Alex's CS mark (first element) with his best friend's mark (last element)
 * by calculating the difference: marks[0] - marks[marks.length - 1].
 * 
 * Sample Inputs & Outputs:
 * - [34, 56, 23, 54, 43] -> -9  (34 - 43)
 * - [12, 34, 6, 7, 0]    -> 12  (12 - 0)
 * - [30, 40, 50, 60, 70] -> -40 (30 - 70)
 * - [0, 0, 0, 0, 0]      -> 0   (0 - 0)
 */

// Solution: Subtract the last element from the first element
function getDifference(marks) {
  console.log(marks[0] - marks[marks.length - 1]);
}

// Testing the solution
getDifference([34, 56, 23, 54, 43]); // Outputs: -9
getDifference([12, 34, 6, 7, 0]);    // Outputs: 12
getDifference([30, 40, 50, 60, 70]); // Outputs: -40
getDifference([0, 0, 0, 0, 0]);      // Outputs: 0
