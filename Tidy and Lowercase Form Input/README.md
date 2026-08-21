# Tidy and Lowercase Form Input

## Problem Description
Write a function `prepareData(line)` that tidies input data from a test form by removing extraneous leading and trailing whitespace and normalizing all text to lowercase.

### Sample Inputs & Outputs

| Input (`line`) | Operations Applied | Output |
|---|---|---|
| `"Test   "` | `trim()` $\rightarrow$ `"Test"`, `toLowerCase()` $\rightarrow$ `"test"` | `"test"` |
| `" test "` | `trim()` $\rightarrow$ `"test"`, `toLowerCase()` $\rightarrow$ `"test"` | `"test"` |
| `"  TEST"` | `trim()` $\rightarrow$ `"TEST"`, `toLowerCase()` $\rightarrow$ `"test"` | `"test"` |

---

## Solution Code

### Standard Function Declaration
```javascript
function prepareData(line) {
    return line.trim().toLowerCase();
}

```

### ES6 Arrow Function

```javascript
const prepareData = line => line.trim().toLowerCase();

```

---

## Code Explanation

1. **`String.prototype.trim()`**: Removes whitespace from both ends of a string (spaces, tabs, newlines).
2. **`String.prototype.toLowerCase()`**: Converts all uppercase characters in the string to their lowercase equivalents.
3. **Method Chaining**: Executing `line.trim().toLowerCase()` sequentially formats the string in a single line.

---
