# Create Anonymous Function

## Problem Description
Create an anonymous function that returns the number `10` and assigns it to the `createNumber` constant variable.

### Sample Usage
```javascript
console.log(createNumber()); // Outputs: 10

```

---

## Solution Code

```javascript
const createNumber = function () {
  return 10;
};

```

---

## Code Explanation

1. **Anonymous Function (`function () { ... }`)**: A function defined without a identifier (name) after the `function` keyword.
2. **Function Expression**: The anonymous function is assigned directly to the constant `createNumber`.
3. **`const createNumber`**: Holds a reference to the anonymous function and prevents `createNumber` from being reassigned to another value later.
4. **`return 10;`**: When `createNumber()` is invoked, it evaluates and returns the numeric value `10`.

---
