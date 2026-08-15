# Change Age Variable Condition

## Problem Description
Modify the `age` variable so that the printed output matches `"Anna is going to study at University"`.

---

## Solution Code

```javascript
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

```

---

## Code Explanation

1. **Condition Matching**: The target output `"Anna is going to study at University"` is inside the `else if (age === 18)` block.
2. **Variable Assignment**: Setting `age = 18` causes the first two conditions (`age < 6` and `age < 18`) to evaluate to `false`, allowing execution to reach `age === 18` which evaluates to `true`.

---
