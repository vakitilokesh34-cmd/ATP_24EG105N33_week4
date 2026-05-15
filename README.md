This directory contains a collection of JavaScript files designed to demonstrate core concepts of the language, from Object-Oriented Programming (OOP) to asynchronous operations and modern syntax.

## Project Structure

Here is a human-friendly breakdown of what each file does:

### Root Directory

| File | Purpose | Key Concept |
| :--- | :--- | :--- |
| **Employee.js** | Defines a basic `Employee` class with private data. | Private Fields (`#`) |
| **Student.js** | A comprehensive "cheat sheet" of modern JS concepts. | Inheritance, Spread, Rest, Promises, Fetch |
| **class.js** | Demonstrates the syntax for creating and using classes. | Classes & Constructors |

---

###  `h4` Subdirectory (Practical Examples)

This folder contains focused examples and simulations.

| File | Purpose | Key Concept |
| :--- | :--- | :--- |
| **ExamSimulator.js** | Simulates submitting an exam and receiving results. | `setTimeout` (Async Simulation) |
| **LibraryManagement.js** | A mini-system to manage books, borrowing, and returns. | Object-Oriented Design |
| **OTPSimulator.js** | A 10-second countdown timer for OTP verification. | `setInterval` & `clearInterval` |
| **Shallow.js** | Shows why copying objects with `{...obj}` can be tricky. | Shallow Copying |
| **deep.js** | Demonstrates how to make a perfect, independent copy. | `structuredClone` (Deep Copy) |
| **User.js** | Simple example of updating objects using the spread operator. | Object Spreading |
| **fruit.js** | Simple example of cloning and expanding arrays. | Array Spreading |

---

## How to use these files

You can run any of these files using Node.js to see the output in your terminal. For example:

```bash
node Employee.js
node h4/OTPSimulator.js
```

##  Learning Highlights

1.  **Privacy**: Use the `#` prefix to keep variables safe inside classes (see `Employee.js`).
2.  **Modern Copies**: Use `structuredClone` for deep objects to avoid accidental data changes (see `h4/deep.js`).
3.  **Async Logic**: Master `setTimeout` and `setInterval` for handling time-based logic (see `h4/ExamSimulator.js` and `h4/OTPSimulator.js`).
4.  **OOP**: Organize your code into reusable blueprints using `class` syntax (see `LibraryManagement.js`).
