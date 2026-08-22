# Match Any Ending Character using Regex Dot Wildcard

## Problem Description
Create a regular expression inside the function `isItUseful(string)` that matches the target phrase `"RegExp is very useful"` regardless of which single punctuation mark (`!`, `.`, `?`, etc.) appears at the very end of the string.

### Sample Input & Output

| Input (`string`) | Regex Wildcard Match | Output |
|---|---|---|
| `"RegExp is very useful!"` | Dot `.` matches `'!'` | `true` |
| `"RegExp is very useful."` | Dot `.` matches `'.'` | `true` |
| `"RegExp is very useful?"` | Dot `.` matches `'?'` | `true` |

---

## Solution Code

### Standard Function Declaration
```javascript
function isItUseful(string) {
    return /RegExp is very useful./.test(string);
}

```

### ES6 Arrow Function

```javascript
const isItUseful = string => /RegExp is very useful./.test(string);

```

---

## Code Explanation

1. **The Dot Wildcard (`.`)**: In regular expressions, an unescaped dot (`.`) matches any single character except line terminators.
2. **Flexible Ending**: Placing `.` at the end of `/RegExp is very useful./` allows the pattern to match exclamation marks, periods, question marks, or any other trailing character seamlessly.
3. **`RegExp.prototype.test(string)`**: Returns `true` if the input string matches the regex pattern.

---
