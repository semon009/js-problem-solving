/**
 * Problem: Split Email String by Dot (.)
 * 
 * Description:
 * Use an appropriate JavaScript string method to split a given string 
 * into an array of substrings wherever a dot ('.') occurs.
 * 
 * Sample Input: "hello@yoursite.edu.co.mak"
 * Expected Output: ['hello@yoursite', 'edu', 'co', 'mak']
 */

const string = "hello@yoursite.edu.co.mak";

// Solution: Using String.prototype.split() with dot delimiter
let strSplit = string.split(".");
console.log(strSplit);
