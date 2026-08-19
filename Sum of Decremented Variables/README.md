# Sum of Decremented Variables

## Problem Description
Write the `sum(a, b, c)` function that returns the sum of three numbers after decreasing each variable by `1`. Use the prefix decrement operator (`--`) to ensure decrements occur prior to addition.

### Sample Inputs & Outputs

| Input (`a, b, c`) | Evaluation Step | Output |
|---|---|---|
| `10, 11, -2` | $(10-1) + (11-1) + (-2-1) = 9 + 10 + (-3)$ | `16` |
| `1, 1, 0` | $(1-1) + (1-1) + (0-1) = 0 + 0 + (-1)$ | `-1` |

---

## Solution Code

```javascript
function sum(a, b, c) {
    return --a + --b + --c;
}

```

---

## Code Explanation

1. **Prefix Decrement (`--x`) vs. Postfix Decrement (`x--`)**:
* **Prefix (`--x`)**: Decrements the variable value **first**, then evaluates and returns the updated value in the expression.
* **Postfix (`x--`)**: Evaluates the current value in the expression **first**, then decrements the variable afterward.


2. **Execution Steps for `sum(10, 11, -2)**`:
* `--a` changes `10` to `9` and evaluates to `9`.
* `--b` changes `11` to `10` and evaluates to `10`.
* `--c` changes `-2` to `-3` and evaluates to `-3`.
* Expression evaluates to: $9 + 10 + (-3) = 16$.



---
