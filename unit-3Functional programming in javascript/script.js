
//examples of pure functions

function add(a, b) {
  return a + b;
}

 function toUpper(str) {
  return str.toUpperCase();
}

//example of impure functions

 let counter = 0;

function increment() {
  counter++;
  return counter;
}

function greet(name) {
  console.log("Hello " + name);
}

//reduce method and function chaining examples

 //function that of a list of grades.

const grades = [80, 90, 70, 85];
const sumGrades = (arr) => arr.reduce((sum, grade) => sum + grade, 0);
console.log(sumGrades(grades)); // 325
const averageGrades = (arr) => sumGrades(arr) / arr.length;

// A function that into a single-level array.

const nested = [1, [2, 3], [4, 5]];
const flatten = (arr) => arr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatten(nested)); // [1, 2, 3, 4, 5]

// A function that filters products with price > 500, applies 10% discount, and calculates the total amount after discount
const products = [
  { name: "Notebook", price: 200 },
  { name: "Pen", price: 30 },
  { name: "Laptop", price: 50000 },
  { name: "Bag", price: 700 }
];

const total = products
  .filter(product => product.price > 500)  
                // Step 1: Only expensive items
  .map(product => product.price * 0.9)       
              // Step 2: Apply 10% discount
  .reduce((sum, price) => sum + price, 0);  
               // Step 3: Add up all prices


console.log("Total after discount:", total);  // → e.g. 45630