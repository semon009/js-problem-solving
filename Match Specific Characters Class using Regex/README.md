# Match Specific Character Class using Regex

## Problem Description
Create a regular expression pattern inside the function `doesItMatch(string)` that tests and matches specific word patterns:
- `"bat"` $\rightarrow$ **Match (`true`)**
- `"cat"` $\rightarrow$ **Match (`true`)**
- `"at"` $\rightarrow$ **No Match (`false`)**
- `"att"` $\rightarrow$ **No Match (`false`)**

### Test Cases Matrix

| Input (`string`) | Character Class `[bc]` Match | Suffix `"at"` Match | Output |
|---|---|---|---|
| `"bat"` | `'b'` $\checkmark$ | `"at"` $\checkmark$ | `true` |
| `"cat"` | `'c'` $\checkmark$ | `"at"` $\checkmark$ | `true` |
| `"at"` | Missing leading `'b'` or `'c'` | `"at"` $\checkmark$ | `false` |
| `"att"` | Missing leading `'b'` or `'c'` | `"tt"` $\mathbf{\times}$ | `false` |

---

## Solution Code

### Standard Function Declaration
```javascript
function doesItMatch(string) {
    return /[bc]at/.test(string);
}

```

### ES6 Arrow Function

```javascript
const doesItMatch = string => /[bc]at/.test(string);

```

---

## Code Explanation

1. **Character Class (`[bc]`)**: Matches either the character `'b'` **or** the character `'c'` at the current position.
2. **Literal Sequence (`at`)**: Ensures that the matched character `'b'` or `'c'` is immediately followed by the literal characters `'a'` and `'t'`.
3. **`RegExp.prototype.test(string)`**: Evaluates whether the target string contains the combined sequence (`"bat"` or `"cat"`).

---
