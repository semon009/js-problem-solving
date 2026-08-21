# Parse Fixed-Width User Data

## Problem Description
Extract user credentials and profile details from a fixed-width formatted string:
- **Indices 0–9** (First 10 characters): Username
- **Indices 10–19** (Second 10 characters): Password (to be ignored)
- **Indices 20+** (Remaining characters): Profession

Return a string in the following format: `"My name is [name] and I'm a [job]."`

### Sample Input & Output

| Input String (`line`) | Extracted `name` | Extracted `job` | Output String |
|---|---|---|---|
| `"John      john2000  frontend developer"` | `"John"` | `"frontend developer"` | `"My name is John and I'm a frontend developer."` |

---

## Solution Code

### ES6 Arrow Function with Template Literals
```javascript
const greeting = line => {
    const name = line.substring(0, 10).trim();
    const job = line.substring(20).trim();
    
    return `My name is ${name} and I'm a ${job}.`;
};

```

### Traditional Function Declaration

```javascript
function greeting(line) {
    let name = line.substring(0, 10).trim();
    let job = line.substring(20).trim();
    return "My name is " + name + " and I'm a " + job + ".";
}

```

---

## Code Explanation

1. **`line.substring(0, 10)`**: Slices the string from index `0` up to (but not including) index `10` to get the padded username.
2. **`line.substring(20)`**: Slices the string starting from index `20` through to the end to get the profession, effectively skipping the password stored between indices 10 and 19.
3. **`trim()`**: Removes trailing and leading spaces leftover from the fixed-width formatting.
4. **Template Literals (``...${var}...``)**: Constructs the final formatted greeting dynamically.

---
