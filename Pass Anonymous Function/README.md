# Pass Anonymous Function as Argument

## Problem Description
Declare an anonymous function that returns the number `5` and pass it to the function `powFunc` as an argument.

---

## Solution Code

### Arrow Function Syntax (Concise):
```javascript
powFunc(() => 5);

```

### Traditional Anonymous Function Syntax:

```javascript
powFunc(function() {
  return 5;
});

```

---

## Code Explanation

1. **Callback Functions**: Functions passed into another function as arguments are called callbacks.
2. **Anonymous Function**: A function created on the fly without a assigned name.
3. **`() => 5`**: An anonymous arrow function that takes no parameters and uses implicit return to yield `5`.
4. **`powFunc(...)`**: Invokes `powFunc` while passing the anonymous function directly as its parameter.

---
