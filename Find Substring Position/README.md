# Find Substring Position

## Problem Description
Find and print the starting index position of the word `"sheet"` within the string variable `txt`.

### Input Text
```text
"I slit the sheet, the sheet I slit, and on the slitted sheet I sit"

```

### Expected Output

```text
11

```

---

## Solution Code

### Solution 1: Using `search()`

```javascript
let txt = "I slit the sheet, the sheet I slit, and on the slitted sheet I sit";
let searchStr = txt.search("sheet");

console.log(searchStr);

```

### Solution 2: Using `indexOf()`

```javascript
let txt = "I slit the sheet, the sheet I slit, and on the slitted sheet I sit";
let searchStr = txt.indexOf("sheet");

console.log(searchStr);

```

---

## Code Explanation

1. **`String.prototype.search()`**: Executes a search for a match between a regular expression or substring and the calling string. It returns the zero-based index of the **first match** found.
2. **Index Calculation**:
* `"I"` (0)
* `" "` (1)
* `"s"` (2) ... `"t"` (9)
* `" "` (10)
* `"s"` in `"sheet"` starts at index **`11`**.



---
