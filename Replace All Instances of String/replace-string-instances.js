/**
 * Problem: Replace All Instances of Substring
 * 
 * Description:
 * Replace all occurrences of the word "stun" with "stump" in a given string
 * using RegExp global flag (/g) or String.prototype.replaceAll().
 * Returns the modified string directly without printing inside the function.
 * 
 * Sample Input: "A skunk sat on a stun and thunk the stun stumpk..."
 * Expected Output: "A skunk sat on a stump and thunk the stump stumpk..."
 */

// Solution: Replacing all matches using RegExp with global flag /g
function replaceString(data) {
    let replacedStr = data.replace(/stun/g, "stump");
    return replacedStr;
}

// Testing the solution
console.log(replaceString("A skunk sat on a stun and thunk the stun stumpk, but the stun thunk the skunk stumpk"));
