/**
 * Problem: Calculate Monthly Savings using reduce()
 * 
 * Description:
 * Calculate the remaining salary (savings) after deducting an array of four monthly 
 * expenses from a total monthly salary of 25,000 using Array.prototype.reduce().
 * 
 * Sample Input: [200, 1000, 300, 550]
 * Expected Output: 22950
 */

const salary = 25000;

// Solution: Calculate remaining salary using reduce with initial value equal to salary
function getSalary(expenses) {
    let remainingSalary = expenses.reduce((total, expense) => total - expense, salary);
    console.log(remainingSalary);
}

// Testing the solution
getSalary([200, 1000, 300, 550]); // Outputs: 22950
