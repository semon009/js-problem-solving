# Print Product Property (Price)

## Problem Description
Suppose you need to know the price of a product stored in an object. Print the `price` property of the `product` object to the console.

```javascript
let product = {
  name: "Smart Clock",
  price: 48.7
};

```

### Expected Output

```text
48.7

```

---

## Solution Code

```javascript
console.log(product.price);

```

---

## Code Explanation

1. **Dot Notation (`product.price`)**: The primary and most common way to access an object's property value in JavaScript when the property key name is known.
2. **`console.log()`**: Takes the evaluated property value (`48.7`) and outputs it directly to the console.

> **Alternative (Bracket Notation):** You can also access object properties using bracket notation with a string key: `console.log(product["price"]);`.

---
