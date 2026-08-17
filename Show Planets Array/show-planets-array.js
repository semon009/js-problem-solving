/**
 * Problem: Display Array Elements using forEach
 * 
 * Description:
 * Complete the 'showPlanets' function to iterate over an array of planet names 
 * and display each planet using console.log.
 * 
 * Sample Input: ["Earth", "Jupiter", "Neptune"]
 * Sample Output:
 * Earth
 * Jupiter
 * Neptune
 */

const planets = ["Earth", "Jupiter", "Neptune"];   

// Solution: Iterating through array elements using forEach()
function showPlanets(planets) {
  planets.forEach(planet => console.log(planet));
}

// Testing the solution
showPlanets(planets);
