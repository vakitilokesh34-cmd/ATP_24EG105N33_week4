/**
 * Array Copying and Expansion
 * Demonstrates the use of the spread operator with arrays to create 
 * a new array based on an existing one.
 */

let fruits = ["apple", "banana"];

// Create a new array that contains all elements of 'fruits' plus "orange".
let moreFruits = [...fruits, "orange"];

console.log("Original Fruits:", fruits);
console.log("Expanded Fruits List:", moreFruits);
