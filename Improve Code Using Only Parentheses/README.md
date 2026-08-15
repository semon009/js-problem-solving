# Improve Expression Using Only Parentheses

## Problem Description
Improve the following code using **only parentheses** so that the result evaluates to `true`:

```javascript
let statement = false;
console.log(!statement && false || false); // Evaluates to: false

```

---

## Solution Code

```javascript
let statement = false;
console.log(!(statement && false) || false);

```

---

## Code Explanation

Without parentheses, operator precedence evaluates `!statement` first:

1. `!statement` -> `!false` -> `true`
2. `true && false` -> `false`
3. `false || false` -> `false`

By adding parentheses around `(statement && false)`, we change the order of operations:

1. `(statement && false)` -> `(false && false)` -> `false`
2. `!(false)` -> `true`
3. `true || false` -> `true`

**Final Output:** `true`

---
