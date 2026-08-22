/**
 * Problem: Match Pattern 'tion' using Regular Expression
 * 
 * Description:
 * Write a function 'matchTheWord(word)' that uses a regular expression to test 
 * if the input word contains the substring pattern "tion".
 * Returns true if matched, otherwise false.
 * 
 * Sample Input: "prediction" -> Output: true
 */

// Solution 1: Standard Function Declaration using RegExp.test()
function matchTheWord(word) {
    return /tion/.test(word);
}

// Solution 2: Alternative ES6 Arrow Function
// const matchTheWord = word => /tion/.test(word);

// Testing the solution
console.log(matchTheWord("prediction")); // Outputs: true
console.log(matchTheWord("banana"));     // Outputs: false
