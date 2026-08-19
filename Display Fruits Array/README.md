# Display Fruits Array Line by Line

## Problem Description
Create an array containing the fruits: `apple`, `orange`, and `banana`. Write a program that outputs each fruit on a new line in the console.

### Expected Output
```text
apple
orange
banana

```

---

## Solution Code

### Solution using `for...in` loop:

```javascript
const fruits = ["apple", "orange", "banana"];

for (let i in fruits) {
    console.log(fruits[i]);
}

```

### Alternative Solution using `for...of` loop (Recommended for arrays):

```javascript
const fruits = ["apple", "orange", "banana"];

for (const fruit of fruits) {
    console.log(fruit);
}

```

---

## Code Explanation

1. **Array Literals (`[...]`)**: Declares a collection of strings stored in sequential indexed memory slots (`0: "apple"`, `1: "orange"`, `2: "banana"`).
2. **`for...in` Loop**: Iterates over all enumerable string properties (indices) of an array object (`i` takes values `"0"`, `"1"`, `"2"`).
3. **Property Access (`fruits[i]`)**: Retrieves the value stored at index `i` and outputs it via `console.log()`.

---
