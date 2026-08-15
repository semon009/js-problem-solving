/**
 * Problem: Improve Expression Using Only Parentheses
 * 
 * Description:
 * Modify the evaluation order of the boolean expression using ONLY parentheses
 * so that the output evaluates to true instead of false.
 */

let statement = false;

// Solution: Grouping (statement && false) inside the negation
console.log(!(statement && false) || false);
