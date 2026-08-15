/**
 * Problem: Fix Logical Operator Syntax Error
 * 
 * Description:
 * Find and fix the mistake in the boolean expression without changing
 * bracket locations, operators, or operand positions.
 */

// Solution: Fixed space between ampersands ('& &' -> '&&')
console.log(!(!false && true) || !!false && true);
