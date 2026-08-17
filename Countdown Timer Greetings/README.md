# Countdown Timer Greetings using setInterval()

## Problem Description
Complete the `greetings()` function to implement a countdown from `5` to `1` in the console, with a 1-second delay between each output. After reaching `1`, stop the interval timer and log `"Happy New Year!"`.

### Sample Output

```text
5
4
3
2
1
Happy New Year!

```

---

## Solution Code

```javascript
let days = 5;

function greetings() {
  let count = days;
  const intervalId = setInterval(() => {
    if (count > 0) {
      console.log(count);
      count--;
    }

    if (count === 0) {
      clearInterval(intervalId);
      console.log("Happy New Year!");
    }
  }, 1000);
}

```

---

## Code Explanation

1. **`setInterval(callback, 1000)`**: Schedules the arrow function to run repeatedly every `1000` milliseconds (1 second).
2. **State Tracking (`count`)**: Decrements `count` on each iteration after printing its current value ($5 \rightarrow 4 \rightarrow 3 \rightarrow 2 \rightarrow 1$).
3. **`clearInterval(intervalId)`**: Stops the repeating timer when `count` reaches `0` to prevent infinite execution and clear memory leaks.
4. **Final Log**: Logs `"Happy New Year!"` immediately after clearing the interval.

---
