# Captain Adder Function

## Problem Description
Define a function named `captainAdder` that accepts one parameter `name` as an argument and returns the string with `"captain "` prepended to the name.

* The function should return a string, not print it directly to the console.

### Sample Input & Output

| Input (`name`) | Output |
|---|---|
| `"Jack Sparrow"` | `"captain Jack Sparrow"` |

---

## Solution Code

### Solution 1: Arrow Function (Concise Syntax)
```javascript
const captainAdder = (name) => "captain " + name;

```

### Solution 2: Template Literals Syntax

```javascript
const captainAdder = (name) => `captain ${name}`;

```

---

## Code Explanation

1. **`const captainAdder = (name) => ...`**: Declares an arrow function named `captainAdder` that accepts a single parameter `name`.
2. **`"captain " + name`**: Concatenates the prefix `"captain "` (including the trailing space) with the value stored in `name`.
3. **Implicit Return**: Since the arrow function does not use curly braces `{}` around the body, it automatically returns the concatenated string result back to the caller.

---
