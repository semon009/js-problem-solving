# Get Salary Switch Operator

## Problem Description
Create a `switch` operator inside the `getSalary` function to output specific hourly pay rates based on input technology names:

| Tech Value | Output |
|---|---|
| `"Bootstrap"` | `"$15 per hour"` |
| `"Chrome Extension"` | `"$20 per hour"` |
| `"React"` | `"$30 per hour"` |
| *Other Cases (Default)* | `"$25 per hour"` |

---

## Solution Code

```javascript
function getSalary(value) {
    switch (value) {
        case "Bootstrap":
            console.log("$15 per hour");
            break;

        case "Chrome Extension":
            console.log("$20 per hour");
            break;

        case "React":
            console.log("$30 per hour");
            break;

        default:
            console.log("$25 per hour");
    }
}

```

---

## Code Explanation

1. **`switch(value)`**: Matches the incoming `value` string against defined cases using strict comparison (`===`).
2. **`break` Statement**: Stops execution after printing the matched case value to prevent fallthrough.
3. **`default` Clause**: Handles any input value that does not match `"Bootstrap"`, `"Chrome Extension"`, or `"React"`, outputting `"$25 per hour"`.

---
