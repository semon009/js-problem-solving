# Fix Template Literal Interpolation Syntax

## Problem Description
Find and correct the syntax errors in the provided JavaScript template literal code:

```javascript
// Broken Code:
let month = "December";
let day = "12";
let year = "2121";

console.log(`Today is $month $day, $year.`);

```

### Expected Output

```text
Today is December 12, 2121.

```

---

## Errors Found and Fixed

| Location | Broken Code | Fix | Reason |
| --- | --- | --- | --- |
| Interpolation | `$month $day, $year` | `${month} ${day}, ${year}` | JavaScript template literals require curly braces `${}` around variables to evaluate expression values dynamically. |

---

## Solution Code

```javascript
let month = "December";
let day = "12";
let year = "2121";

console.log(`Today is ${month} ${day}, ${year}.`);

```

---

## Code Explanation

1. **Template Literals (Backticks ```)**: Allows embedded expressions and multi-line strings in JavaScript.
2. **Expression Interpolation (`${expression}`)**: Evaluates the variable or expression inside the curly braces `${}` and converts the result into a string directly inside the output template.

---
