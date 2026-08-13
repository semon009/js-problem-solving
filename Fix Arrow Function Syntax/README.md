# Fix Arrow Function Syntax Error

## Problem Description
Find the error in the code below and fix it:

```javascript
// Incorrect Code:
let someFunc = (k, l, m) = k + l + m;
someFunc();

```

---

## Error Analysis

The original code contains a syntax error:

* **Missing Arrow Token (`=>`)**: The function definition used `=` instead of `=>` after the parameter list `(k, l, m)`. In JavaScript, arrow functions require the `=>` operator to separate parameters from the function body.

---

## Solution Code

```javascript
let someFunc = (k, l, m) => k + l + m;
someFunc();

```

---

## Code Explanation

1. **`(k, l, m) => ...`**: Declares a valid ES6 arrow function that accepts three parameters (`k`, `l`, and `m`).
2. **`k + l + m`**: Implicitly returns the sum of the three values because curly braces `{}` are omitted.

---
