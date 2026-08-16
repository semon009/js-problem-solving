/**
 * Problem: Extract Number from String using parseFloat()
 * 
 * Description:
 * Perform string manipulations on 'data' to extract the leading number sequence 
 * so that parseFloat() correctly outputs 123.
 * 
 * Input: 'word_123something_other_word'
 * Expected Output: 123
 */

let data = 'word_123something_other_word';

// Solution 1: Slice or Replace to strip leading characters
let extracted = data.replace('word_', '');

console.log(parseFloat(extracted)); // Outputs: 123
