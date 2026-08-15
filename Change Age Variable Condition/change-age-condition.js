/**
 * Problem: Change Age Variable Condition
 * 
 * Description:
 * Change the 'age' variable value so that the conditional logic prints:
 * "Anna is going to study at University"
 */

// Solution: Set age to 18 to trigger the 'age === 18' condition
let age = 18;

if (age < 6) {
    console.log("Anna is a little child");
} else if (age >= 6 && age < 18) {
    console.log("Anna goes to school");
} else if (age === 18) {
    console.log("Anna is going to study at University");
} else if (age > 18 && age < 22) {
    console.log("Anna studies at University");
} else {
    console.log("Anna works");
}
