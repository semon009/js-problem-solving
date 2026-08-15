# Pub Age Checker

## Problem Description
Implement an age-checking procedure for pub entry:
* Set variable `age` to `18`.
* Store the boolean condition (`age < 18`) in a variable named `condition`.
* If `condition` is `true` (`age < 18`), log `"Sorry, but you are a minor."`.
* If `condition` is `false` (`age >= 18`), log `"That's ok. You can enter the pub."`.

---

## Solution Code

### Solution 1: Standard `if-else` Statement
```javascript
let age = 18;
let condition = age < 18;

if (condition) {
    console.log("Sorry, but you are a minor.");
} else {
    console.log("That's ok. You can enter the pub.");
}

```

### Solution 2: Ternary Operator

```javascript
let age = 18;
let condition = (age < 18) ? "Sorry, but you are a minor." : "That's ok. You can enter the pub.";
console.log(condition);

```

---

## Code Explanation

1. **`let age = 18;`**: Initializes the age variable to `18`.
2. **`let condition = age < 18;`**: Stores a boolean value (`false`, since `18 < 18` is false).
3. **Control Flow**: The `if-else` block checks the value of `condition`. Since it evaluates to `false`, execution moves to the `else` block, printing `"That's ok. You can enter the pub."`.

---
<FollowUp label="Want to learn how the ternary operator works as a shorthand for if-else in JavaScript?" query="Explain the ternary operator syntax in JavaScript with examples comparing it to standard if-else statements."/>
