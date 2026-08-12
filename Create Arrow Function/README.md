# Create Arrow Function (Greeting)

## Problem Description
Create an arrow function that returns the `"Hello world!"` string and assigns it to the `greeting` constant variable.

### Sample Usage
```javascript
console.log(greeting()); // Outputs: Hello world!

```

---

## Solution Code

### Standard Syntax (Explicit Return):

```javascript
const greeting = () => {
  return "Hello world!";
};

```

### Concise Syntax (Implicit Return):

```javascript
const greeting = () => "Hello world!";

```

---

## Code Explanation

1. **Arrow Function Syntax (`() => ...`)**: Introduced in ES6, arrow functions offer a cleaner and more compact syntax for writing function expressions.
2. **`const greeting`**: Assigns the arrow function reference to the `greeting` constant variable.
3. **Explicit vs Implicit Return**:
* **Explicit Return**: Using curly braces `{}` requires the `return` keyword to pass back a value.
* **Implicit Return**: If the function body contains a single expression, omitting `{}` automatically returns the value without needing the `return` keyword.



---
