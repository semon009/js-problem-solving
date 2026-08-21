/**
 * Problem: Find Substring Position
 * 
 * Description:
 * Find the starting position (zero-based index) of the variable searchStr ("sheet") 
 * within the given string 'txt'.
 * 
 * Sample Input Text: "I slit the sheet, the sheet I slit, and on the slitted sheet I sit"
 * Target Search: "sheet"
 * Expected Output: 11
 */

let txt = "I slit the sheet, the sheet I slit, and on the slitted sheet I sit";

// Solution: Using String.prototype.search() or String.prototype.indexOf()
let searchStr = txt.search("sheet");

console.log(searchStr); // Outputs: 11
