# Display Array Elements using forEach

## Problem Description
Complete the `showPlanets` function to display the name of each planet in the given array via `console.log`.

Given:
```javascript
const planets = ["Earth", "Jupiter", "Neptune"];

```

### Sample Output

```text
Earth
Jupiter
Neptune

```

---

## Solution Code

```javascript
const planets = ["Earth", "Jupiter", "Neptune"];   

function showPlanets(planets) {
  planets.forEach(planet => console.log(planet));
}

```

---

## Code Explanation

1. **`Array.prototype.forEach()`**: Executes a provided callback function once for each element in the array sequentially.
2. **Arrow Function (`planet => console.log(planet)`)**: A concise ES6 arrow function that takes each individual item (`planet`) and prints it to the console.
3. **Execution**: The loop visits `"Earth"`, `"Jupiter"`, and `"Neptune"` in order and outputs them on separate lines.

---
