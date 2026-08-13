# Create Array from String using Array.from()

## Problem Description
Complete the `getArrayWithLength` function to create and return a new array from a given string using the `Array.from()` method.

### Sample Input & Output

| Input (`string`) | Output |
|---|---|
| `"Hello JS Arrays"` | `['H', 'e', 'l', 'l', 'o', ' ', 'J', 'S', ' ', 'A', 'r', 'r', 'a', 'y', 's']` |

---

## Solution Code

```javascript
function getArrayWithLength(string) {
  return Array.from(string);
}

```

---

## Code Explanation

1. **`Array.from(string)`**: A static method in JavaScript that creates a new, shallow-copied `Array` instance from any iterable or array-like object.
2. **String Iteration**: Strings in JavaScript are iterable objects. When passed to `Array.from()`, each character (including spaces) becomes an individual element in the resulting array.
3. **`return`**: Returns the newly constructed array to the caller.

---
