/**
 * Problem: Parse Fixed-Width User Data
 * 
 * Description:
 * Given a fixed-width formatted string where:
 * - Characters 0-9 (first 10) contain the username
 * - Characters 10-19 (second 10) contain the password
 * - Characters 20+ contain the profession
 * 
 * Extract the username and profession, trim whitespace, and return a formatted greeting string.
 * 
 * Sample Input: "John      john2000  frontend developer"
 * Expected Output: "My name is John and I'm a frontend developer."
 */

// Solution using Template Literals and String.prototype.substring()
const greeting = line => {
    const name = line.substring(0, 10).trim();
    const job = line.substring(20).trim();
    
    return `My name is ${name} and I'm a ${job}.`;
};

// Testing the solution
console.log(greeting("John      john2000  frontend developer"));
