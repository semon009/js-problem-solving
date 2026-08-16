/**
 * Problem: Rewrite If-Else to Switch Statement
 * 
 * Description:
 * Rewrite the 'languageInfo' function using a switch statement instead 
 * of multiple if-else if conditions.
 * 
 * Sample Input: "JavaScript"
 * Sample Output: "Begins on December 4, 1995"
 */

// Solution: Function refactored using switch operator
function languageInfo(language) {
  switch (language) {
    case "JavaScript":
      console.log("Begins on December 4, 1995");
      break;

    case "Java":
      console.log("Begins on May 23, 1995");
      break;

    case "PHP":
      console.log("Begins on June 8, 1995");
      break;
  }
}

// Testing the solution
languageInfo("JavaScript"); // Outputs: Begins on December 4, 1995
languageInfo("Java");       // Outputs: Begins on May 23, 1995
languageInfo("PHP");        // Outputs: Begins on June 8, 1995
