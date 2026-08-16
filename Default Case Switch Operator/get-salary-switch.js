/**
 * Problem: Get Salary Switch Operator
 * 
 * Description:
 * Create a switch operator inside the function 'getSalary' to log hourly pay rate 
 * based on the tech stack name. Includes a default case for unmatched values.
 * 
 * Sample Input: "Bootstrap"
 * Expected Output: "$15 per hour"
 */

// Solution: Function with switch operator and default case
function getSalary(value) {
    switch (value) {
        case "Bootstrap":
            console.log("$15 per hour");
            break;

        case "Chrome Extension":
            console.log("$20 per hour");
            break;

        case "React":
            console.log("$30 per hour");
            break;

        default:
            console.log("$25 per hour");
    }
}

// Testing the solution
getSalary("Bootstrap");        // Outputs: $15 per hour
getSalary("Chrome Extension"); // Outputs: $20 per hour
getSalary("React");            // Outputs: $30 per hour
getSalary("Vue");              // Outputs: $25 per hour (default)
