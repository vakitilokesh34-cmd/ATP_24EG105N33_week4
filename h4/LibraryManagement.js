/**
 * Library Management System
 * A simple demonstration of Object-Oriented Programming (OOP) to manage a library of books.
 */

class Book {
  /**
   * Constructor to create a new Book instance.
   * @param {string} title - The title of the book.
   * @param {string} author - The author of the book.
   * @param {number} pages - Total number of pages.
   */
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = true; // By default, a new book is available.
  }

  // --- Methods ---

  /**
   * Marks the book as borrowed.
   */
  borrow() {
    this.isAvailable = false;
  }

  /**
   * Marks the book as returned and available.
   */
  returnBook() {
    this.isAvailable = true;
  }

  /**
   * Returns a formatted string with book details.
   */
  getInfo() {
    return `"${this.title}" by ${this.author} (${this.pages} pages)`;
  }

  /**
   * Checks if the book is considered "long" (more than 300 pages).
   */
  isLongBook() {
    return this.pages > 300;
  }
}

// --- Data Initialization ---

// Creating multiple book instances.
let library = [
  new Book("Harry Potter", "J.K. Rowling", 350),
  new Book("1984", "George Orwell", 328),
  new Book("The Hobbit", "J.R.R. Tolkien", 310),
  new Book("Wings of Fire", "A.P.J. Abdul Kalam", 180),
  new Book("The Alchemist", "Paulo Coelho", 208)
];

// --- Operations ---

// 1. Display information of all books in the library.
console.log("--- All Books in Library ---");
library.forEach(book => console.log(book.getInfo()));

// 2. Simulating borrowing 2 books.
console.log("\n--- Borrowing Books ---");
library[0].borrow(); // Harry Potter
library[2].borrow(); // The Hobbit
console.log(`${library[0].title} available: ${library[0].isAvailable}`);
console.log(`${library[2].title} available: ${library[2].isAvailable}`);

// 3. Simulating returning a book.
console.log("\n--- Returning a Book ---");
library[0].returnBook();
console.log(`${library[0].title} available: ${library[0].isAvailable}`);

// 4. Count and list "Long Books" using filter.
let longBooksCount = library.filter(book => book.isLongBook()).length;
console.log("\nNumber of Long Books (>300 pages):", longBooksCount);

// 5. List currently available books.
console.log("\n--- Currently Available Books ---");
library
  .filter(book => book.isAvailable)
  .forEach(book => console.log(book.title));
