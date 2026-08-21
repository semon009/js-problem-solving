# Dog Bark Repeat Function

## Problem Description
Write a function `speak(n)` that receives the number of times `n` a dog should bark and returns a string containing that number of barks separated by spaces (without a trailing space at the end).

### Sample Input & Output

| Input (`n`) | Returned String |
|---|---|
| `3` | `"bark bark bark"` |

---

## Solution Code

### Standard Function Declaration
```javascript
function speak(n) {
    return "bark ".repeat(n).trim();
}

```

### ES6 Arrow Function

```javascript
const speak = n => "bark ".repeat(n).trim();

```

---

## Code Explanation

1. **`String.prototype.repeat(n)`**: Constructs and returns a new string containing `"bark "` concatenated together `n` times (e.g., for $n=3$, it produces `"bark bark bark "` with a space at the end).
2. **`String.prototype.trim()`**: Removes the trailing space from the end of the constructed string to ensure clean output.

---
