# Traffic Light Scenario with While Loop

## Problem Description
Model a real-world scenario using a `while` loop:
1. Create a boolean variable `isRed` with an initial value of `true`.
2. Inside the `while` loop, output the message `"Hey Harry!"`.
3. Change `isRed` to `false` inside the loop so that the loop stops after greeting Harry when the light turns green.

### Expected Output

```text
Hey Harry!

```

---

## Solution Code

```javascript
let isRed = true;

while (isRed) {
    console.log("Hey Harry!");
    isRed = false;
}

```

---

## Code Explanation

1. **Condition Evaluation (`while (isRed)`)**: Checks if `isRed` evaluates to `true`. Since it is initially `true`, execution enters the loop body.
2. **Loop Body Execution**: Prints `"Hey Harry!"` to the console.
3. **State Mutation (`isRed = false`)**: Changes `isRed` to `false`. When the `while` statement re-evaluates its condition, `isRed` is now `false`, exiting the loop and allowing the program to continue.

---
