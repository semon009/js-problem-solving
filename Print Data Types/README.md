# Print Data Types

## Problem Description
Write code that prints the type of these three values to the console:
1. `"an apple"`
2. `63`
3. `19.3`

Make sure you print the data type using JavaScript, not the actual values themselves.

### Expected Output
```text
string
number
number

```

---

## Solution Code

```javascript
console.log(typeof("an apple"));
console.log(typeof(63));
console.log(typeof(19.3));
```

---

## Code Explanation

1. **`typeof` Operator**: A built-in JavaScript operator that evaluates a given value or variable and returns a string indicating its data type.
2. **`typeof("an apple")`**: Evaluates to `"string"` because text wrapped in quotes is a String primitive type.
3. **`typeof(63)`**: Evaluates to `"number"`.
4. **`typeof(19.3)`**: Evaluates to `"number"`. In JavaScript, both integers (`63`) and floating-point numbers (`19.3`) belong to the single **`number`** data type.

---
