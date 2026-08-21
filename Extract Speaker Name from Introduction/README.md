# Extract Speaker Name from Introduction

## Problem Description
Write a function `introduction(line)` that takes a string introduction in the format `"Hello, I am [Name]"` and returns only the speaker's name.

### Sample Inputs & Outputs

| Input (`line`) | Extraction Logic | Output |
|---|---|---|
| `"Hello, I am Emma"` | Character index 12 onwards | `"Emma"` |
| `"Hello, I am Constantine"` | Character index 12 onwards | `"Constantine"` |

---

## Solution Code

### Standard Function Declaration
```javascript
function introduction(line) {
    return line.substring(12).trim();
}

```

### ES6 Arrow Function

```javascript
const introduction = line => line.substring(12).trim();

```

---

## Code Explanation

1. **`String.prototype.substring(startIndex)`**: Returns the part of the string from the specified start index up to the end of the string. Since `"Hello, I am "` contains exactly 12 characters (indices 0 to 11), index `12` marks the beginning of the name.
2. **`String.prototype.trim()`**: Ensures any trailing spaces at the end of the string are removed cleanly.

---
