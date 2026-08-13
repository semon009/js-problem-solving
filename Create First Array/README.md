# Create First Array

## Problem Description
Create an array called `myFirstArray` and assign its first position (index `0`) a numeric value of `10`.

### Expected Output
```text
10

```

---

## Solution Code

### Solution 1: Array Literal Syntax

```javascript
let myFirstArray = [10];

```

### Solution 2: Explicit Index Assignment

```javascript
let myFirstArray = [];
myFirstArray[0] = 10;

```

---

## Code Explanation

1. **Zero-Based Indexing**: Array positions in JavaScript start at index `0`. The first position is always `myFirstArray[0]`.
2. **Data Types**: Note that `10` is a number, while `"10"` would be a string. Creating `[10]` sets the number value `10` as the first element.
3. **Array Literal (`[...]`)**: Creates a new array with pre-populated values.

---
