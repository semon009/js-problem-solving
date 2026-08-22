# Template Literal String Interpolation

## Problem Description
Construct and output a full sentence dynamically by embedding string variables `userName` and `place` inside a template literal.

### Given Variables & Expected Output

| Variable | Value |
|---|---|
| `userName` | `"Brad"` |
| `place` | `"first"` |

**Output:**
```text
Brad took first place in the game.

```

---

## Solution Code

```javascript
let userName = "Brad";
let place = "first";

console.log(`${userName} took ${place} place in the game.`);

```

---

## Code Explanation

1. **Variable Placeholders (`${expression}`)**: Template literals allow embedding variables directly using the `${}` syntax.
2. **String Interpolation**: Inside `${userName}`, JavaScript evaluates and inserts `"Brad"`, and inside `${place}`, it inserts `"first"`.
3. **Clean Syntax**: Replaces tedious string concatenation (`userName + " took " + place + " place in the game."`) with readable, maintainable template syntax.

---
