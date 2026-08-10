# Rewrite Outdated Variable Declaration

## Problem Description
Take a look at the code line below — the variable declaration looks outdated! Rewrite the code using a more appropriate keyword.

```javascript
var name = "Catherine";
## Analysis & Best Practices

* **`var` (Outdated)**: Uses function-scope or global-scope, allows variable hoisting and re-declaration, which can lead to bugs in modern applications.
* **`const` (Recommended)**: Creates a block-scoped constant. Ideal when the variable value will not be reassigned.
* **`let` (Also Valid)**: Creates a block-scoped variable. Used when the variable value is expected to change later.

---

## Solution Code
### Preferred Solution (Using `const`):

```javascript
const name = "Catherine";
```

---

### Alternative Solution (Using `let`):

```javascript
let name = "Catherine";
```

---

## Code Explanation

1. Both `const` and `let` were introduced in **ES6 (ES2015)** to fix the scope issues caused by `var`.
2. **`const`** is the best choice here because `"Catherine"` is a fixed string value that isn't reassigned anywhere else in the code.
3. Using **`let`** is also syntactically correct and fully valid if you plan to change the value of `name` later in your program.
