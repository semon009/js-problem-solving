# Square of a Number

## Problem Description
Create an arrow function named `square` that takes a single number `num` as input and returns the square of that number.

### Sample Input & Output

| Input (`num`) | Formula | Output |
|---|---|---|
| `5` | `5 * 5` | `25` |
| `0` | `0 * 0` | `0` |

---

## Solution Code

```javascript
const square = (num) => num * num;

```

---

## Code Explanation

1. **`const square = (num) => ...`**: Declares an arrow function named `square` that accepts a single parameter `num`.
2. **`num * num`**: Multiplies `num` by itself to calculate its square. (You can also use the exponentiation operator: `num ** 2`).
3. **Implicit Return**: Because the function body consists of a single expression without curly braces `{}`, the result is automatically returned.

---
