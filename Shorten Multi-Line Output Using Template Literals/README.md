# Shorten Multi-Line Output Using Template Literals

## Problem Description
Refactor five sequential `console.log()` instructions into a single, compact statement that outputs three words separated by blank lines.

### Expected Output

```text
I

know

JavaScript

```

---

## Solution Code

```javascript
console.log(`I

know

JavaScript`);

```

---

## Code Explanation

1. **Multi-line Capability of Template Literals**: Standard single (`'`) or double (`"`) quote strings require explicit escape sequences (`\n`) to break lines. Backtick (```) strings naturally preserve line breaks, carriage returns, and blank lines written inside them.
2. **Conciseness**: Replaces multiple function invocations with a single `console.log()` statement while strictly preserving formatting requirements.

---
