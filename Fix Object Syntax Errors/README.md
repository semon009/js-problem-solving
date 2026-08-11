# Fix Object Syntax Errors

## Problem Description
Find and fix all syntax errors hidden in the code below:

```javascript
// Incorrect Code:
let song(
  name: "Twinkle, Twinkle, Little Star",
  author: Jane Taylor,
  date: 1806,
);

```

---

## Error Analysis

The original code contains three syntax errors:

1. **Invalid Syntax `song(**`: Objects in JavaScript require the assignment operator `=` and curly braces `{}` rather than parentheses `()`.
2. **Unquoted String `Jane Taylor**`: String literal values must be wrapped in quotes (`"Jane Taylor"` or `'Jane Taylor'`). Without quotes, JavaScript interprets `Jane` as an undefined variable name, causing a `ReferenceError`.
3. **Closing Bracket `);**`: Object literal blocks end with a closing curly brace `}` instead of a closing parenthesis `)`.

---

## Solution Code

```javascript
let song = {
  name: "Twinkle, Twinkle, Little Star",
  author: "Jane Taylor",
  date: 1806,
};
```

---

## Code Explanation

1. **`let song = { ... };`**: Correctly declares an object literal stored in the `song` variable using key-value pairs inside curly braces.
2. **`name: "Twinkle, Twinkle, Little Star"`**: Property key `name` with string value.
3. **`author: "Jane Taylor"`**: Property key `author` with string value properly wrapped in quotes.
4. **`date: 1806`**: Property key `date` with numeric value.

---
