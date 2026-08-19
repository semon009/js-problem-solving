# Display Numbers 10 to 1 in Reverse Order

## Problem Description
Create a loop that displays all numbers from `10` down to `1` in reverse order in the console.

### Expected Output

```text
10
9
8
7
6
5
4
3
2
1

```

---

## Solution Code

```javascript
for (let i = 10; i > 0; i--) {
    console.log(i);
}

```

---

## Code Explanation

1. **Initialization (`let i = 10`)**: The counter variable `i` starts at `10`.
2. **Condition (`i > 0` or `i >= 1`)**: The loop continues running as long as `i` is greater than `0`.
3. **Decrement (`i--`)**: Reduces the value of `i` by `1` after each iteration ($10 \rightarrow 9 \rightarrow \dots \rightarrow 1$).
4. **Execution**: Prints the current value of `i` on each turn until `i` drops to `0`, at which point the condition fails and the loop terminates.

---
