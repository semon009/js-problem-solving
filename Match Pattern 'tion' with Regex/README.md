# Match Pattern 'tion' using Regular Expression

## Problem Description
Write a function `matchTheWord(word)` that tests whether a given string contains the sequence of characters `"tion"` using a Regular Expression (`Regex`).

### Sample Input & Output

| Input (`word`) | Regex Match Result | Output |
|---|---|---|
| `"prediction"` | Contains `"tion"` | `true` |
| `"action"` | Contains `"tion"` | `true` |
| `"banana"` | Does not contain `"tion"` | `false` |

---

## Solution Code

### Standard Function Declaration
```javascript
function matchTheWord(word) {
    return /tion/.test(word);
}

```

### ES6 Arrow Function

```javascript
const matchTheWord = word => /tion/.test(word);

```

---

## Code Explanation

1. **Regular Expression Literal (`/tion/`)**: Defines a regex pattern that searches for the exact sequence of characters `t-i-o-n`.
2. **`RegExp.prototype.test(str)`**: Executes a search for a match between the regular expression and a specified string. Returns `true` if a match is found, and `false` if not.

---
