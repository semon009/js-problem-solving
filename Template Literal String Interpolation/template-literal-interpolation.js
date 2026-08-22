/**
 * Problem: Template Literal String Interpolation
 * 
 * Description:
 * Use JavaScript template literals to inject variables 'userName' and 'place' 
 * into a sentence string and log the result to the console.
 * 
 * Target Output:
 * Brad took first place in the game.
 */

let userName = "Brad";
let place = "first";

// Solution: Using Template Literal expression interpolation ${}
console.log(`${userName} took ${place} place in the game.`);
