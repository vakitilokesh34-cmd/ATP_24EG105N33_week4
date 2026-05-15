/**
 * This file serves as a comprehensive guide to various JavaScript concepts,
 * ranging from Object-Oriented Programming (OOP) to Asynchronous JavaScript.
 */


// --- Part 1: OOP Concepts ---

// Inheritance (Is-a relationship)
// Example: A Student "is a" Person.
class Person { }
class Student extends Person { }

// Composition (Has-a relationship)
// Example: A Car "has an" Engine.
class Engine { }
class Car {
  constructor() {
    this.engine = new Engine();
  }
}

// --- Part 2: Object Literals & Nested Structures ---

// Creating objects using literals.
let emp1 = {
  eno: 100,
  name: "Ravi",
  address: {
    city: "Hyd",
    pincode: 99999
  }
};

let emp2 = {
  eno: 200,
  name: "Bhanu",
  address: {
    city: "Hyd",
    pincode: 99999
  }
};

// --- Part 3: Modern JS Features ---

// Optional Chaining (?.) 
// Safely access nested properties even if the parent is null or undefined.
let user = {
  name: "Lokesh",
  eno: 44
};
console.log(user.name);
console.log(user.eno);
console.log(user.marks); // undefined (property doesn't exist)
console.log(user.marks?.length); // undefined (doesn't crash)
console.log(user.marks?.length ?? "Mark not available"); // "Mark not available" (Nullish Coalescing)

// Spread Operator (...) 
// Used to create shallow copies of objects and arrays.
let originalUser = {
  name: "Alice",
  age: 45,
  email: "anuj@gmail.com"
};

let newUser = { ...originalUser };
originalUser.name = "Lokesh"; // Changing the original won't affect the shallow copy for top-level props.
console.log("Original:", originalUser);
console.log("Copy:", newUser);

// Deep Copy using structuredClone()
// Unlike spread, this copies nested objects completely.
let person = {
  name: "Lokesh",
  address: {
    city: 'Hyd',
    pincode: 99999
  }
};
let deepCopyPerson = structuredClone(person);
person.address.city = 'chennai'; // This will NOT affect deepCopyPerson.
console.log("Original Person:", person);
console.log("Deep Copied Person:", deepCopyPerson);

// Adding elements while copying arrays
let a = [1, 2, 3, 4];
let cpa = [...a, 10, 20];
console.log("Original Array:", a);
console.log("Expanded Array:", cpa);

// Merging arrays
let ar = [1, 2, 3];
let b = [4, 5, 6];
let merged = [...ar, ...b];
console.log("Merged Array:", merged);

// Rest Parameters (...)
// Allows a function to accept an indefinite number of arguments as an array.
function calculateSum(...args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}
console.log("Sum result:", calculateSum(10, 20, 4, 5, 6, 6, 77));

// Destructuring
// Unpacking values from arrays or properties from objects into distinct variables.
let arr = [1, 2, 3, 4];
let [first, second, third, fourth] = arr;
console.log("Destructured values:", first, second, third, fourth);

// --- Part 4: Asynchronous JavaScript ---

// setTimeout: Run code after a delay (one-time).
setTimeout(() => {
  console.log("This message appears after 5 seconds.");
}, 5000);

// setInterval: Run code repeatedly at a fixed interval.
let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log("Repeated message count:", count);
  if (count === 3) clearInterval(intervalId); // Stop after 3 times for demo purposes.
}, 2000);

// Promises: Handling eventual completion or failure of an async operation.
console.log("Promise: Simulating a financial transaction...");
let prom = new Promise((resolve, reject) => {
  let success = true; // Simulate condition
  setTimeout(() => {
    if (success) {
      resolve("Transaction Complete: Money sent!");
    } else {
      reject("Transaction Failed: Connection lost.");
    }
  }, 3000);
});

prom
  .then((msg) => console.log("Success:", msg))
  .catch((error) => console.log("Error:", error));

// --- Part 5: Real-world Async Examples (API Fetching) ---

// Using .then() syntax
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(userData => console.log("Users fetched via .then():", userData.length, "users found."))
  .catch(err => console.log("Fetch error:", err));

// Using async/await syntax (Modern and cleaner)
async function fetchUserData() {
  try {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();
    console.log("Users fetched via async/await:", data.length, "users found.");
  } catch (err) {
    console.log("Async fetch error:", err);
  }
}
fetchUserData();


