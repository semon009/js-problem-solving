# Difference Between Number and Sum

## Problem Description
Change the function so that it returns the difference between the number `a` and the sum of `b` and `c`. Use the `return` operator; do not output the values directly to the console inside the function.

### Sample Input & Output

| Input (`a`, `b`, `c`) | Formula | Output |
|---|---|---|
| `33, 2, 1` | `33 - (2 + 1)` | `30` |
| `30, 20, 10` | `30 - (20 + 10)` | `0` |

---

## Solution Code

```javascript
function difference(a, b, c) {
  return a - (b + c);
}
```

---

## Code Explanation

1. **`function difference(a, b, c)`**: Defines a function that takes three parameters (`a`, `b`, and `c`).
2. **`b + c`**: Adds the values of `b` and `c` together first. Parentheses are required to ensure addition happens before subtraction.
3. **`a - (b + c)`**: Subtracts the sum of `(b + c)` from `a`.
4. **`return` Keyword**: Sends the computed result back to the caller instead of printing it to the console with `console.log()`.

---
