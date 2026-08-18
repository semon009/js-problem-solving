# Output Updated Global Variable Value

## Problem Description
Modify the code execution flow so that invoking `myFunc()` prints the updated global variable value (`"new global"`).

### Expected Output

```text
new global

```

---

## Solution Code

```javascript
let myVar = "global";

function myFunc() {
    console.log(myVar);
}

myVar = "new global";

myFunc();

```

---

## Code Explanation

1. **Global Variable Reassignment**: The variable `myVar` is initialized with `"global"` and then reassigned to `"new global"`.
2. **Lexical Scope**: Functions in JavaScript reference variables by reference, not by value at creation time.
3. **Execution Timing**: When `myFunc()` is invoked *after* the reassignment statement (`myVar = "new global"`), the function looks up the current value of `myVar` in its outer lexical scope and outputs `"new global"`.

---
