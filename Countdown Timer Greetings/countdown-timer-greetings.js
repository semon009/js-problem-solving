/**
 * Problem: Countdown Timer Greetings using setInterval()
 * 
 * Description:
 * Complete the 'greetings' function to display a countdown from 5 to 1 on the 
 * console with a 1-second delay between each number, followed by "Happy New Year!".
 * 
 * Sample Output:
 * 5
 * 4
 * 3
 * 2
 * 1
 * Happy New Year!
 */

let days = 5;

// Solution: Countdown function using setInterval and clearInterval
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
