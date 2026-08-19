# Find First Occurrence of Number 5

## Problem Description
Write a function `find5(numbers)` that finds the zero-based index of the first occurrence of the number `5` in an array of numbers. If `5` is not present in the array, return `-1`.

### Sample Inputs & Outputs

| Input (`numbers`) | First Occurrence Index | Output |
|---|---|---|
| `[10, 3, 8, 5, 3, 4, 5]` | Index `3` | `3` |
| `[5, 10, 111, 12]` | Index `0` | `0` |
| `[1, 2, 3, 4]` | Not Found | `-1` |

---

## Solution Code

### Solution 1: Manual `for` Loop
```javascript
function find5(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 5) {
            return i;
        }
    }
    return -1;
}

```

### Solution 2: Built-in `indexOf()` Method

```javascript
function find5(numbers) {
    return numbers.indexOf(5);
}

```

---

## Code Explanation

1. **Linear Search Iteration**: The `for` loop evaluates elements sequentially from index `0` up to `numbers.length - 1`.
2. **Early Exit (`return i`)**: As soon as `numbers[i] === 5` evaluates to `true`, the function immediately returns the current index `i` and halts further iterations.
3. **Fallback Result (`return -1`)**: If the loop completes without finding any element equal to `5`, the function returns `-1` to signal that the target value is not present in the array.

---
