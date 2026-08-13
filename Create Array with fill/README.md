# Create New Array using fill() Method

## Problem Description
Create a function named `createNewArray` that accepts three arguments: `value`, `start`, and `end`. Use the `.fill()` method to modify and return `originalArr`.

Given:
```javascript
const originalArr = [3, 6, 0, 1, 4, 6, 8, 112];

```

### Sample Input & Output

| Parameters (`value, start, end`) | Output |
| --- | --- |
| `3, 0, 8` | `[ 3, 3, 3, 3, 3, 3, 3, 3 ]` |

---

## Solution Code

```javascript
const originalArr = [3, 6, 0, 1, 4, 6, 8, 112];

function createNewArray(value, start, end) {
  return originalArr.fill(value, start, end);
}

```

---

## Code Explanation

1. **`Array.prototype.fill(value, start, end)`**: Replaces elements in an array with a static `value` starting from index `start` up to (but not including) index `end`.
2. **In-place Mutation**: The `.fill()` method modifies the original array directly in memory and returns the modified array reference.
3. **Parameters**:
* `value`: The static value to populate the array with (`3`).
* `start`: The starting zero-based index (`0`).
* `end`: The stopping index non-inclusive (`8`).



> **Pro Tip (Non-mutating version):** If you need to keep `originalArr` unchanged, create a shallow copy first before filling: `return [...originalArr].fill(value, start, end);`.

---
