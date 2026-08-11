# Output Undefined to Console

## Problem Description
Change the given code so that it outputs `undefined` to the console when executed.

```javascript
// Original Code:
let data = 1000;

function getData(data) {
  console.log(data);
}

getData("id: 74060");

```

### Expected Output

```text
undefined

```

---

## Solution Code

```javascript
let data;

function getData(data) {
  console.log(data);
}

getData();

```

---

## Code Explanation

1. **Unassigned Function Parameters**: In JavaScript, if a function expects a parameter (like `data` in `getData(data)`), but you invoke the function without providing an argument (`getData()`), that parameter defaults to `undefined`.
2. **`let data;`**: Declaring a variable without assigning a value gives it an initial value of `undefined`.
3. **Variable Shadowing**: The parameter `data` inside `getData(data)` shadows the outer variable `let data;`. When `getData()` is called with no arguments, the local parameter `data` evaluates to `undefined` and prints `undefined` to the console.

---
