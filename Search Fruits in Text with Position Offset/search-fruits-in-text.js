/**
 * Problem: Search Fruits in Text with Position Offset
 * 
 * Description:
 * Check if 'fruitOne' exists anywhere in the text string, and check if 'fruitTwo' 
 * exists in the text starting from position (index) 50 onwards using includes().
 * Log the boolean results inside the function and execute it at the end.
 * 
 * Expected Output:
 * true
 * false
 */

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
