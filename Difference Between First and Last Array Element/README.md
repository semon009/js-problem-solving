# Array Marks Difference

## Problem Description
Alex wants to compare his Computer Science mark with his best friend's mark stored in an array:
* **Alex's Mark**: First element of the array (`marks[0]`).
* **Best Friend's Mark**: Last element of the array (`marks[marks.length - 1]`).

Calculate and log the difference (`Alex's Mark - Best Friend's Mark`) to the console using `console.log()`.

### Sample Inputs & Outputs

| Input (`marks`) | Calculation | Output |
|---|---|---|
| `[34, 56, 23, 54, 43]` | `34 - 43` | `-9` |
| `[12, 34, 6, 7, 0]` | `12 - 0` | `12` |
| `[30, 40, 50, 60, 70]` | `30 - 70` | `-40` |
| `[0, 0, 0, 0, 0]` | `0 - 0` | `0` |

---

## Solution Code

```javascript
function getDifference(marks) {
  console.log(marks[0] - marks[marks.length - 1]);
}

```

---

## Code Explanation

1. **`marks[0]`**: Accesses the first element of the array (Alex's mark).
2. **`marks[marks.length - 1]`**: Accesses the last element of the array regardless of array size (Best friend's mark).
3. **`marks[0] - marks[marks.length - 1]`**: Subtracts the last mark from the first mark.
4. **`console.log(...)`**: Prints the computed numeric difference directly to the console.

---
