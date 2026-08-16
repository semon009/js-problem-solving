# Extract Number from String using parseFloat()

## Problem Description
You are given a string variable `data`. Perform necessary string manipulations so that `parseFloat()` extracts the number embedded inside it.

Given input:
```javascript
let data = 'word_123something_other_word';

```

Expected numerical output:

```javascript
123

```

---

## Solution Code

```javascript
let data = 'word_123something_other_word';

// Remove leading non-digit characters so parseFloat starts reading from digits
let dataPrepared = data.slice(5); // Removes 'word_'

console.log(parseFloat(dataPrepared)); // Outputs: 123

```

---

## Code Explanation

1. **How `parseFloat()` Works**: `parseFloat()` parses string characters starting from index `0`. It stops parsing as soon as it hits a non-numeric character (e.g., `'s'` in `'123something'`).
2. **String Manipulation (`.slice(5)` or `.replace('word_', '')`)**: Because `parseFloat('word_123...')` evaluates to `NaN` (due to starting with non-numeric letters), removing `'word_'` transforms the string into `'123something_other_word'`.
3. **Parsing Outcome**: `parseFloat('123something_other_word')` successfully parses `123` and stops at `'s'`.

---
