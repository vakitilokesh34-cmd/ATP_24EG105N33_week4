/**
 * Shallow Copy Demonstration
 * This script shows how the spread operator (...) creates a shallow copy.
 * Important: Top-level properties are copied by value, but nested objects 
 * are copied by reference!
 */

const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};

// Creating a shallow copy using the spread operator.
let copyUser = { ...user };

// Modifying the original's top-level property.
user.name = "Lokesh"; 
// This will NOT affect copyUser.name because it's a primitive value at the top level.

// Modifying the original's nested object property.
user.preferences.theme = "Light";
// This WILL affect copyUser.preferences.theme because the 'preferences' object 
// reference was shared between the two!

console.log("Original User:", user);
console.log("Shallow Copy User:", copyUser);

// SUMMARY: In a shallow copy, nested objects are still linked to the original.