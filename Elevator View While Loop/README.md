# Elevator View Scenario using While Loop

## Problem Description
Simulate taking a glass elevator to the 10th floor:
1. Initialize floor counter `n = 1`.
2. Run a `while` loop while `n <= 10`.
3. If the current floor is lower than floor 6 (`n < 6`), output `"Tree!"`.
4. Otherwise (floors 6 through 10), output `"City!"`.
5. Increment `n` by `1` after each check.

### Expected Output

```text
Tree!
Tree!
Tree!
Tree!
Tree!
City!
City!
City!
City!
City!

```

---

## Solution Code

```javascript
let n = 1;

while (n <= 10) {
    if (n < 6) {
        console.log("Tree!");
    } else {
        console.log("City!");
    }
    n++;
}

```

---

## Code Explanation

1. **Initialization (`let n = 1`)**: Starts elevator tracking at floor 1.
2. **Loop Condition (`n <= 10`)**: Keeps the elevator moving up to floor 10.
3. **Branching Logic (`if (n < 6)`)**:
* **Floors 1–5**: `n < 6` evaluates to `true`, logging `"Tree!"`.
* **Floors 6–10**: `n < 6` evaluates to `false`, entering `else` to log `"City!"`.


4. **Counter Increment (`n++`)**: Increases the floor number by 1 on every pass to avoid infinite loops and move to the next floor.

---
