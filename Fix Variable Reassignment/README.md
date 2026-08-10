# Fix Variable Reassignment Error

## Problem Description
Find the error in the following code and fix it so that the variable `status` can be changed to `"offline"`:

```javascript
// Change the code below
const status = "online";
status = "offline";
```
## Error Analysis
When attempting to execute the original code, JavaScript throws a `TypeError: Assignment to constant variable.`:

Reason: Variables declared with `const` (constant) are immutable in assignment—their references cannot be reassigned once declared.
