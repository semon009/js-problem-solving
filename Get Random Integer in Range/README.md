# Get Random Integer in Range (1 to 3)

## Problem Description
Change the `getRandom` function so that it returns a random integer from `1` to `3` (both inclusive).

### Sample Output

```text
[ 1, 2, 3 ]

```

---

## Solution Code

```javascript
function getRandom() {
    return Math.floor(Math.random() * 3) + 1;
}

```

---

## Code Explanation

1. **`Math.random()`**: Generates a floating-point pseudo-random number in the range $[0, 1)$ (inclusive of 0, but exclusive of 1).
2. **`Math.random() * 3`**: Scales the generated number to the range $[0, 3)$.
3. **`Math.floor(...)`**: Rounds down to the nearest integer, resulting in possible integer values of `0`, `1`, or `2`.
4. **`+ 1`**: Shifts the generated integer range from $[0, 2]$ to $[1, 3]$ (1, 2, or 3 inclusive).

### General Formula for Random Integers $[min, max]$:

```javascript
Math.floor(Math.random() * (max - min + 1)) + min;

```

---
