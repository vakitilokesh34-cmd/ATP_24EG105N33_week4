/**
 * This class represents an Employee.
 * It demonstrates how to use private fields in JavaScript classes.
 */
class Employee {
  // Private members are denoted with a '#' prefix.
  // They cannot be accessed from outside the class directly.
  #eno;
  #name;

  /**
   * The constructor initializes a new Employee instance.
   * @param {number} eno - The employee number.
   * @param {string} name - The name of the employee.
   */
  constructor(eno, name) {
    this.#eno = eno;
    this.#name = name;
  }

  /**
   * A simple method to log the employee's details to the console.
   */
  getData() {
    console.log(`Employee Number: ${this.#eno}, Name: ${this.#name}`);
  }
}

// Creating a new instance of the Employee class.
let e1 = new Employee(1, 'Lokesh');

// Calling the getData method to see the employee details.
e1.getData();