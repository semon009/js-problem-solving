# Fix Do-While Loop Syntax Errors

## Problem Description
Find and correct the syntax errors in the following broken JavaScript code:

```javascript
// Broken Code:
let n = 5;
do (n < 10) {
    n = n + 1;
    console.log(n);
} while;

```

### Expected Output

```text
6
7
8
9
10

```

---

## Errors Found

| Location | Error | Fix |
| --- | --- | --- |
| `do (n < 10)` | Placed the condition `(n < 10)` directly after `do`. | Remove condition from `do` and place `{}` block immediately after. |
| `while;` | Left the `while` statement empty without a conditional expression. | Move `(n < 10)` to follow `while`, ending with a semicolon `;`. |

---

## Solution Code

```javascript
let n = 5;

do {
    n = n + 1;
    console.log(n);
} while (n < 10);

```

---

## Code Explanation

1. **`do...while` Syntax Structure**: The correct syntax for a `do...while` loop requires the code block immediately following `do`:
```javascript
do {
    // code block to execute
} while (condition);

```


2. **Execution Flow**:
* The code block inside `{}` runs **at least once** before evaluating the condition.
* `n` starts at `5`, increments to `6`, and prints `6`.
* Condition `n < 10` is checked ($6 < 10$). Since it's `true`, it continues looping until `n` reaches `10` ($10 < 10$ evaluates to `false`).



---
