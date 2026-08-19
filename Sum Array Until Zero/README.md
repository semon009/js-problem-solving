# Calculate Array Sum Until Zero

## Problem Description
Write a function `sum(numbers)` that calculates and returns the sum of elements in an array. If a number in the array equals `0`, the program must immediately stop processing further elements and return the accumulated sum up to that point.

### Sample Inputs & Outputs

| Input (`numbers`) | Sum Calculation | Output |
|---|---|---|
| `[11, 12, 15, 10, 0, 100]` | $11 + 12 + 15 + 10 = 48$ (stops at `0`) | `48` |
| `[100, 0, 100]` | $100$ (stops at `0`) | `100` |

---

## Solution Code

```javascript
function sum(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            break;
        }
        total += numbers[i];
    }
    return total;
}

```

---

## Code Explanation

1. **Accumulator (`let total = 0`)**: Stores the running sum of array elements.
2. **Loop Iteration**: The `for` loop inspects elements sequentially from left to right.
3. **Termination Condition (`if (numbers[i] === 0) break;`)**: As soon as `0` is encountered, the `break` statement immediately exits the loop, ignoring all subsequent numbers (e.g., `100` is skipped in both sample inputs).
4. **Return Statement**: Returns the accumulated `total`.

---
