# Box Object Volume

## Problem Description
Create a `box` object with three numeric properties to store its measurements:
* `length`: `20`
* `width`: `30`
* `height`: `15`

Add a `getVolume` method as a property of the object that calculates and returns the volume of the box ($length \times width \times height$).

---

## Solution Code

```javascript
let box = {
    length: 20,
    width: 30,
    height: 15,

    getVolume() {
        return this.length * this.width * this.height;
    }
};

```

---

## Code Explanation

1. **Object Literals**: The `box` object is declared using literal notation `{}` containing key-value pairs for `length`, `width`, and `height`.
2. **Object Methods**: The `getVolume()` function is defined directly inside the object.
3. **`this` Keyword**: Inside `getVolume()`, `this.length`, `this.width`, and `this.height` refer to the respective properties of the calling `box` object.
4. **Volume Formula**: The method multiplies the three dimensions ($20 \times 30 \times 15 = 9000$) and returns the result.

---
