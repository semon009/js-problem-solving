# Check String Argument Fix

## Problem Description
Fix the errors in the function calls without altering the `isString()` function body so that both calls log `true` to the console.

Original Broken Code:
```javascript
console.log(isString("this is a string'));
console.log(isString([10, 20, 30]));

```

### Expected Output

```text
true
true

```

---

## Errors Found and Fixed

1. **Syntax Error in Line 1 (`"this is a string'`)**: Mismatched quote delimiters (`"` at start, `'` at end). Fixed by matching double quotes: `"this is a string"`.
2. **Type Mismatch in Line 2 (`[10, 20, 30]`)**: Passed an array object (`typeof [10, 20, 30]` evaluates to `"object"`), causing `isString()` to return `false`. Replaced with string `"test code"` (or stringified `"[10, 20, 30]"`).

---

## Solution Code

```javascript
function isString(data) {
    if (typeof data === 'string') {
        return true;
    }
    else {
        return false;
    }
}

console.log(isString("this is a string"));
console.log(isString("test code"));

```

---

## Code Explanation

1. **`typeof` Operator**: Evaluates the data type of its operand as a string literal (e.g., `'string'`, `'number'`, `'object'`).
2. **Conditional Evaluation**: Since both `"this is a string"` and `"test code"` are string primitives, `typeof data === 'string'` evaluates to `true` for both function calls.

---
