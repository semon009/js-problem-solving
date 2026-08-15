/**
 * Problem: Box Object Volume
 * 
 * Description:
 * Create a 'box' object with numeric properties: length (20), width (30), and height (15).
 * Add a 'getVolume' method as a property to calculate and return the volume of the box.
 */

// Solution: Define box object with properties and method
let box = {
    length: 20,
    width: 30,
    height: 15,

    getVolume() {
        return this.length * this.width * this.height;
    }
};

// Testing the solution
console.log(box.getVolume()); // Outputs: 9000
