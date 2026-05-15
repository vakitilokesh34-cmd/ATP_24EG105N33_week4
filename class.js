/**
 * This file demonstrates how to define and use classes in modern JavaScript.
 * While object literals are great for one-off objects, classes provide a blueprint 
 * for creating multiple objects with shared behavior.
 */
class Student {
  // --- Properties ---
  
  // Private property: Denoted by '#'. It cannot be accessed outside the class.
  #sno; 
  
  // Public properties: Accessible from anywhere.
  name;
  email;

  /**
   * The constructor is a special method used to initialize new objects.
   * @param {number} sno - The student's serial number (private).
   * @param {string} name - The student's name.
   * @param {string} email - The student's email address.
   */
  constructor(sno, name, email) {
    this.#sno = sno;
    this.name = name;
    this.email = email;
  }

  /**
   * Method to retrieve the student's name.
   * @returns {string} The name of the student.
   */
  getStudentName() {
    return this.name;
  }

  /**
   * Demonstration of accessing a private variable within the class.
   */
  getDetails() {
    return `Student #${this.#sno}: ${this.name} (${this.email})`;
  }
}

// --- Object Creation ---

// Create an instance (object) of the Student class.
let s1 = new Student(33, 'Lokesh', 'vakitilokesh33@gmail.com');

// Accessing public properties works fine:
console.log("Name:", s1.name);

// Accessing private properties directly will return 'undefined' or throw an error 
// depending on the environment/strictness.
console.log("Private sno (should be undefined):", s1.sno); 

// Using the class methods to get information:
console.log(s1.getDetails());
