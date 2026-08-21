/**
 * Problem: Extract Speaker Name from Introduction
 * 
 * Description:
 * Write a function 'introduction(line)' that parses an introduction string 
 * starting with "Hello, I am " and extracts the speaker's name.
 * 
 * Sample Input 1: "Hello, I am Emma"        -> Output: "Emma"
 * Sample Input 2: "Hello, I am Constantine" -> Output: "Constantine"
 */

// Solution 1: Using String.prototype.substring()
function introduction(line) {
    return line.substring(12).trim();
}

// Solution 2: Alternative using String.prototype.replace()
// const introduction = line => line.replace("Hello, I am ", "").trim();

// Testing the solution
console.log(introduction("Hello, I am Emma"));        // Outputs: "Emma"
console.log(introduction("Hello, I am Constantine")); // Outputs: "Constantine"
