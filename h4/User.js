/**
 * User Object Extension
 * Demonstrates how to create a new object by copying an existing one 
 * and adding new properties using the spread operator.
 */

let user = {
  name: "Ravi",
  city: "Hyderabad"
};

// Create updatedUser by copying 'user' and adding the 'age' property.
let updatedUser = { ...user, age: 25 };

console.log("Original User:", user);
console.log("Updated User (with age):", updatedUser);