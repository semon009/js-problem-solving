# Right to Left Exponentiation using reduceRight()

## Problem Description
Given an array of three elements `[x, y, z]`, calculate the exponentiation evaluation from right to left, representing $x^{(y^z)}$. Output the reduced single value to the console using `reduceRight()`.

### Sample Inputs & Outputs

| Input (`numbers`) | Expression Evaluation | Output |
|---|---|---|
| `[1, 2, 3]` | $1^{(2^3)} = 1^8$ | `1` |
| `[2, 1, 2]` | $2^{(1^2)} = 2^1$ | `2` |
| `[2, 2, 1]` | $2^{(2^1)} = 2^2$ | `4` |

---

## Solution Code

```javascript
function calculateExp(numbers) {
    console.log(numbers.reduceRight((acc, curr) => Math.pow(curr, acc)));
}

```

*Alternative ES6 Exponentiation Operator (`**`):*

```javascript
function calculateExp(numbers) {
    console.log(numbers.reduceRight((acc, curr) => curr ** acc));
}

```

---

## Code Explanation

1. **`Array.prototype.reduceRight()`**: Works like `reduce()`, but iterates through array elements from right to left (index `length - 1` down to `0`).
2. **Iteration Breakdown for `[1, 2, 3]**`:
* **Step 1**: Initial accumulator `acc = 3`, current element `curr = 2`.
* Calculates `Math.pow(2, 3)` = `8`.


* **Step 2**: Next accumulator `acc = 8`, current element `curr = 1`.
* Calculates `Math.pow(1, 8)` = `1`.




3. **Execution**: Prints `1` directly to the console.

---
