# Search Fruits in Text with Position Offset

## Problem Description
Write the code inside `searchFruit(fruitOne, fruitTwo)` to:
1. Search for `fruitOne` across the entire `text` string.
2. Search for `fruitTwo` in `text` starting **after position 50** (index 50).
3. Log both boolean outcomes to the console.
4. Call the function with `fruitOne = "apple"` and `fruitTwo = "grapes"`.

### Expected Output

```text
true
false

```

---

## Solution Code

```javascript
function searchFruit(fruitOne, fruitTwo) {
  let text = `My favorite fruit is grapes. Because with grapes, you always
    get another chance. 'Cause, you know, if you have a crappy apple or a peach,
    you're stuck with that crappy piece of fruit.
    But if you have a crappy grape, no problem - just move on to the next.
    'Grapes: The Fruit of Hope.'`;

  let FruitOne = text.includes(fruitOne);
  let FruitTwo = text.includes(fruitTwo, 50);

  console.log(FruitOne);
  console.log(FruitTwo);
}

let fruitOne = "apple";
let fruitTwo = "grapes";

searchFruit(fruitOne, fruitTwo);

```

---

## Code Explanation

1. **`String.prototype.includes(searchString, position)`**: Checks if a string contains the specified substring.
2. **First Search (`text.includes(fruitOne)`)**: Searches for `"apple"` in the entire text. It finds `"apple"` at index ~137 and returns `true`.
3. **Second Search with Offset (`text.includes(fruitTwo, 50)`)**: Passes `50` as the second argument (`position`), directing the method to ignore the first 50 characters. Because `"grapes"` only appears earlier in the text (around index 21 and index 43), `includes("grapes", 50)` evaluates to `false`.

---
