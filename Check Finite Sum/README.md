# Calculate Array Sum and Check if Finite

## Problem Description
Calculate the sum of all elements in the `data` array and verify whether the resulting total is a finite number.

Given:
```javascript
let data = [5, -13, 3, 21, 0, 9];

```

Expected Output:

```javascript
true

```

---

## Solution Code

### Solution 1: Standard `for` Loop

```javascript
let data = [5, -13, 3, 21, 0, 9];

let sum = 0;
for (let i = 0; i < data.length; i++) {
    sum += data[i];
}

console.log(isFinite(sum));

```

### Solution 2: Functional `.reduce()` Approach

```javascript
let data = [5, -13, 3, 21, 0, 9];

let sum = data.reduce((acc, curr) => acc + curr, 0);

console.log(Number.isFinite(sum));

```

---

## Code Explanation

1. **Summation**: Iterates through each numeric element in `data` and accumulates the total into `sum` ($5 + (-13) + 3 + 21 + 0 + 9 = 25$).
2. **`isFinite(sum)`**: Determines whether the accumulated sum is a regular finite number. It returns `false` for `Infinity`, `-Infinity`, or `NaN`.
3. **Evaluation**: Since $25$ is a standard real number, `isFinite(25)` evaluates to `true`.

---
