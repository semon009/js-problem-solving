# Print Cubes of Numbers (1 to 5)

## Problem Description
Write a function named `myFunc()` that creates a counter variable `i` inside a `for` loop to print the cubes of numbers from `1` to `5` ($i^3$). Ensure the code defines the function without calling it.

### Sample Output

```text
1
8
27
64
125

```

---

## Solution Code

```javascript
function myFunc() {
    for (let i = 1; i <= 5; i++) {
        console.log(Math.pow(i, 3));
    }
}

```

*Alternative ES6 Exponentiation Operator (`**`):*

```javascript
function myFunc() {
    for (let i = 1; i <= 5; i++) {
        console.log(i ** 3);
    }
}

```

---

## Code Explanation

1. **Identifier Choice (`let`)**: `let` is used for the loop counter `i` because its value must be reassigned on each iteration (`i++`). Furthermore, `let` provides block scoping, preventing memory leaks outside the loop body.
2. **Loop Range (`i = 1; i <= 5`)**: The loop starts at `1` and runs until `5` (inclusive).
3. **Cube Calculation**: `Math.pow(i, 3)` raises $i$ to the $3\text{rd}$ power ($1^3=1, 2^3=8, 3^3=27, 4^3=64, 5^3=125$).

---
