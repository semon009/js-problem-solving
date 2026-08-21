# Replace All Instances of Substring

## Problem Description
Write a method inside the `replaceString(data)` function that replaces every instance of `"stun"` with `"stump"` in the provided string and returns the newly modified string.

### Sample Input & Output

| Input (`data`) | Output |
|---|---|
| `"A skunk sat on a stun and thunk the stun stumpk, but the stun thunk the skunk stumpk"` | `"A skunk sat on a stump and thunk the stump stumpk, but the stump thunk the skunk stumpk"` |

---

## Solution Code

### Solution 1: Using `replace()` with Global Regular Expression (`/g`)
```javascript
function replaceString(data) {
    let replacedStr = data.replace(/stun/g, "stump");
    return replacedStr;
}

```

### Solution 2: Using ES2021 `replaceAll()` Method

```javascript
function replaceString(data) {
    return data.replaceAll("stun", "stump");
}

```

---

## Code Explanation

1. **Regular Expression Flag (`/g`)**: Without the global flag `/g`, `replace()` would only substitute the **first** match found in the string. The `/g` modifier forces the engine to scan and replace all matching occurrences across the entire input string.
2. **Substitutions**: Converts every occurrence of `"stun"` to `"stump"` while leaving existing words like `"stumpk"` untouched (or updating their prefix to `"stumpk"`).
3. **Return Value**: Returns the updated string value directly.

---
