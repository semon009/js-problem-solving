# Calculate Monthly Savings using reduce()

## Problem Description
Amal earns a monthly salary of `25,000`. An array of four elements represents his expenses in a single month. Calculate his total remaining savings using the `Array.prototype.reduce()` method and output the result using `console.log`.

### Sample Input & Output

| Input (`expenses`) | Output |
|---|---|
| `[200, 1000, 300, 550]` | `22950` |

---

## Solution Code

```javascript
const salary = 25000;

function getSalary(expenses) {
    let remainingSalary = expenses.reduce((total, expense) => total - expense, salary);
    console.log(remainingSalary);
}

```

---

## Code Explanation

1. **`expenses.reduce(callback, initialValue)`**: Operates across all elements in the array to accumulate a single resulting value.
2. **Initial Value (`salary = 25000`)**: The accumulator (`total`) starts with `25000`.
3. **Subtraction Process**:
* Step 1: $25000 - 200 = 24800$
* Step 2: $24800 - 1000 = 23800$
* Step 3: $23800 - 300 = 23500$
* Step 4: $23500 - 550 = 22950$


4. **`console.log()`**: Prints the final remaining balance (`22950`).

---
