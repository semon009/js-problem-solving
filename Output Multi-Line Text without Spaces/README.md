# Output Multi-Line Text without Spaces

## Problem Description
Write a program using template literals to output three words on separate lines without using any space characters in the script.

### Expected Output

```text
All
or
nothing

```

---

## Solution Code

```javascript
console.log(`All
or
nothing`);

```

---

## Code Explanation

1. **Multiline Literal Feature**: Template literals (enclosed by backticks ```) preserve newlines directly within the literal block without requiring spaces or explicit `\n` escape codes.
2. **Space-Free Requirement**: The statement contains zero space characters; each line breaks immediately after the last character of the word.

---
