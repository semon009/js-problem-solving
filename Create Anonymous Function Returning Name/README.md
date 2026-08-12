# Create Anonymous Function (Name)

## Problem Description
Create an anonymous function that returns the string `"John"` and assigns it to the `createName` constant variable.

### Sample Usage
```javascript
console.log(createName()); // Outputs: John

```

---

## Solution Code

### Traditional Anonymous Function:

```javascript
const createName = function () {
  return "John";
};

```

### Arrow Function (Concise Syntax):

```javascript
const createName = () => "John";

```

---

## Code Explanation

1. **Anonymous Function**: A function declared without an identifier name.
2. **`const createName`**: Stores a reference to the anonymous function in the constant variable `createName`.
3. **Return Value**: Executing `createName()` evaluates and returns the string `"John"`. Both traditional function expressions and arrow functions are anonymous when assigned to variables in this manner.

---
