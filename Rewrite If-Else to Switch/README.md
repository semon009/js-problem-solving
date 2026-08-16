# Rewrite If-Else to Switch Statement

## Problem Description
Rewrite the `languageInfo` function using a `switch` statement instead of `if...else if` conditional blocks.

### Sample Input & Output

| Input (`language`) | Output |
|---|---|
| `"JavaScript"` | `"Begins on December 4, 1995"` |
| `"Java"` | `"Begins on May 23, 1995"` |
| `"PHP"` | `"Begins on June 8, 1995"` |

---

## Solution Code

```javascript
function languageInfo(language) {
  switch (language) {
    case "JavaScript":
      console.log("Begins on December 4, 1995");
      break;

    case "Java":
      console.log("Begins on May 23, 1995");
      break;

    case "PHP":
      console.log("Begins on June 8, 1995");
      break;
  }
}

```

---

## Code Explanation

1. **`switch(language)`**: Evaluates the expression `language` against matching `case` values using strict equality (`===`).
2. **`case "Value":`**: Compares `language` to the target string. If it matches, the corresponding code block runs.
3. **`break;`**: Prevents execution from falling through into subsequent cases after a match is executed.

---
