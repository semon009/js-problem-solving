# Split Email String by Dot (.)

## Problem Description
Use an appropriate JavaScript string method on the given string so that it splits into an array of substrings separated by dots (`.`).

### Sample Input & Output

| Input String (`string`) | Output Array |
|---|---|
| `"hello@yoursite.edu.co.mak"` | `['hello@yoursite', 'edu', 'co', 'mak']` |

---

## Solution Code

```javascript
const string = "hello@yoursite.edu.co.mak";

let strSplit = string.split(".");
console.log(strSplit);

```

```javascript
console.log(input.split("."));

```

---

## Code Explanation

1. **`String.prototype.split(separator)`**: Divides a `String` into an ordered list of substrings by searching for the specified `separator` pattern and returns them inside an array.
2. **Delimiter (`"."`)**: Tells JavaScript to split the string everywhere a period (`.`) is encountered.
3. **Execution Result**: Converts `"hello@yoursite.edu.co.mak"` into `['hello@yoursite', 'edu', 'co', 'mak']`.

---
