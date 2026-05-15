/**
 * Deep Copy Demonstration
 * This script shows how to create a truly independent copy of an object 
 * using 'structuredClone'. This is the modern way to handle deep copies.
 */

const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};

// Creating a deep copy. 
// Every level of the object is copied, so they share no references.
let copyOrder = structuredClone(order);

// Modifying nested properties in the copy.
copyOrder.customer.address.city = "Chennai";
copyOrder.items[0].price = 100000;

console.log("Original Order (remains Hyderabad/70k):", order.customer.address.city, order.items[0].price);
console.log("Deep Copy Order (is now Chennai/100k):", copyOrder.customer.address.city, copyOrder.items[0].price);

// SUMMARY: With a deep copy, changing the copy never affects the original, no matter how deep the data is.