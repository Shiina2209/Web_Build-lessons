// Variables
// To declare a variable, use the keyword 'var', 'let' or 'const'.
// var or let have the same way to define a variable.
var v1;
v1 = 20;
// or
let v2 = 20;

// const can only be defined in one way. Defining a const variable in the other way will produce a SynataxError
const v3 = 20;
// const v4; // SyntaxError: Missing initializer in const declaration

// Operators
// There are 5 types of operators in JavaScript:
/* Arithmetic */ console.log(20 + 5); // 25
/* Assignment */ let numexplol = 20;
/* Comparison */ console.log(20 == 5); // false
/* Logical */ console.log(20 > 5 && 20 < 30); // true
/* Ternary (Conditional) */ console.log(20 > 5 ? 'Yes' : 'No'); // Yes

console.log('\n#### ARITHMETIC OPERATORS ####');
// Arithmetic
// There are 6 arithmetic operators in JavaScript:
/* Addition */ console.log(20 + 5); // 25
/* Subtraction */ console.log(20 - 5); // 15
/* Multiplication */ console.log(20 * 5); // 100
/* Division */ console.log(20 / 5); // 4
/* Modulus */ console.log(20 % 5); // 0
/* Exponentiation */ console.log(20 ** 5); // 3200000

/* Increment */ let numexp2 = 20;
numexp2++;
console.log(numexp2); // 21
/* Decrement */ let numexp3 = 20;
numexp3--;
console.log(numexp3); // 19

console.log('\n#### ASSIGNMENT OPERATORS ####');
// Assignment
let numexp4 = 20;
// There are 5 assignment operators in JavaScript:
/* Variable Addition */ numexp4 += 5;
console.log(numexp4); // 25
/* Variable Subtraction */ numexp4 -= 5;
console.log(numexp4); // 20
/* Variable Multiplication */ numexp4 *= 5;
console.log(numexp4); // 100
/* Variable Division */ numexp4 /= 5;
console.log(numexp4); // 20
/* Variable Modulus */ numexp4 %= 5;
console.log(numexp4); // 0

console.log('\n#### COMPARISON OPERATORS ####');
// Comparison
// There are 6 comparison operators in JavaScript:
/* Equal Value */ console.log(20 == 5); // false
/* Equal Value and Type */ console.log(20 === 5); // false

/* Not Equal Value */ console.log(20 != 5); // true
/* Not Equal Value and Type */ console.log(20 !== 5); // true

/* Greater Than */ console.log(20 > 5); // true
/* Less Than */ console.log(20 < 5); // false

/* Greater Than or Equal */ console.log(20 >= 5); // true
/* Less Than or Equal */ console.log(20 <= 5); // false

console.log('\n#### LOGICAL OPERATORS ####');
// Logical
// There are 3 logical operators in JavaScript:
/* AND */ console.log(20 > 5 && 20 < 30); // true
/* Note: If first condition is false, the second condition will not be checked. */
console.log(20 < 5 && console.log('true?')); // false
console.log(20 > 5 && console.log('true?')); // true? undefined
/* OR */ console.log(20 > 5 || 20 < 30); // true
/* NOT */ console.log(!(20 > 5)); // false

// Data Types
// There are 7 data types in JavaScript:
/* String */ let v4 = 'Hello World!';
/* Number */ let v5 = 20;
/* Boolean */ let v6 = true;
/* Undefined */ let v7;
/* Null */ let v8 = null;
/* Array */ let v9 = [1, 2, 3, 4, 5];
/* Object */ let v11 = { name: 'John', age: 20 };

// Use of typeof() function
console.log('\n#### DATA TYPES ####');
console.log(`Type of v4 is ${typeof v4}`); // Type of v4 is string
console.log(`Type of v5 is ${typeof v5}`); // Type of v5 is number
console.log(`Type of v6 is ${typeof v6}`); // Type of v6 is boolean
console.log(`Type of v7 is ${typeof v7}`); // Type of v7 is undefined
console.log(`Type of v8 is ${typeof v8}`); // Type of v8 is object
console.log(`Type of v9 is ${typeof v9}`); // Type of v9 is object
console.log(`Type of v10 is ${typeof v10}`); // Type of v10 is object
console.log(`Type of v11 is ${typeof v11}`); // Type of v11 is object

//Sets
//just like arrays but it only has unique values
// String
// String is a sequence of characters. It can be defined in 3 ways:
let str1 = 'Hello World!';
let str2 = 'Hello World!';
let str3 = `Hello World!`;

console.log('\n#### STRING CONCATENATION ####');
// There are two ways to concatenate a variable with a string:
// 1. Using the + operator
let username = 'John';
console.log('Welcome ' + username + '!'); // Welcome John!

// 2. Using the ${} operator
console.log(`Welcome ${username}!`); // Welcome John!
// Multi-Line strings can also be created using the ${} operator
console.log(`Hello
        World!`); // Hello
// World!

console.log('\n#### ESCAPE CHARACTERS ####');
// Escape characters
// To use a special character in a string, use the escape character. The following are some examples for the use of escape characters:
// To use a single quote in a string, use the escape character \ before the single quote.
console.log("I'm John"); // I'm John
// To create a new line, use the escape character \n.
console.log('Hello\nWorld!'); // Hello
// World!
// To use a backslash in a string, use the escape character \ before the backslash.
console.log('C:\\Users\\John'); // C:\Users\John

console.log('\n#### STRING METHODS ####');
// Uses of common string methods:
let strexp = 'hello world!';
/* Length */ console.log(strexp.length); // 12
/* Extract */ console.log(strexp.slice(0, 5)); // hello (Note: Strings are 0 indexed. Last index is not included)
/* Replace */ console.log(strexp.replace('world', 'john')); // hello john!
/* Concat */ console.log('Hello '.concat('World!')); // Hello World!
/* Split */ console.log(strexp.split(' ')); // ['hello', 'world!'] (Note: Returns an array. Will be taught later.)
/* Character At */ console.log(strexp.charAt(0)); // h

/* Upper Case */ console.log(strexp.toUpperCase()); // HELLO WORLD!
/* Lower Case */ console.log(strexp.toLowerCase()); // hello world!
/* Capitalize */ console.log(strexp.charAt(0).toUpperCase() + strexp.slice(1)); // Hello world!

// Number
// Numbers can be defined in 3 ways:
let num1 = 20;
let num2 = 20.5;
let num3 = 2e5; // 2e5 is the same as 200000

console.log('\n#### NUMBER METHODS ####');
// Uses of common number methods:
let numexp = 20.5;
/* Convert to string */ console.log(numexp.toString()); // 20.5
/* Amount of decimal places */ console.log(numexp.toFixed(2)); // 20.50
/* Amount of digits */ console.log(numexp.toPrecision(5)); // 20.500
/* Convert to integer */ console.log(parseInt(numexp)); // 20

// Array
// Arrays are used to store multiple values in a single variable.
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['John', 'Doe', 20, true]; // Arrays can store different data types
const arr3 = new Array(1, 2, 3, 4, 5);
const arr4 = new Array('John', 'Doe', 20, true); // Arrays can be multi-line

console.log('\n#### ARRAY METHODS ####');
// Uses of common array methods:
const arr5 = [1, 2, 3, 4, 5];
/* Length */ console.log(arr5.length); // 5
/* Add to end */ arr5.push(6);
console.log(arr5); // [1, 2, 3, 4, 5, 6]
/* Add to front */ arr5.unshift(0);
console.log(arr5); // [0, 1, 2, 3, 4, 5, 6]
/* Remove from end */ arr5.pop();
console.log(arr5); // [0, 1, 2, 3, 4, 5]
/* Remove from front */ arr5.shift();
console.log(arr5); // [1, 2, 3, 4, 5]

/* Remove element */ arr5.splice(2, 1);
console.log(arr5); // [1, 2, 4, 5]
/* Reverse */ arr5.reverse();
console.log(arr5); // [5, 4, 2, 1]
/* Concatenate */ const arr6 = arr5.concat(arr5);
console.log(arr6); // [5, 4, 2, 1, 5, 4, 2, 1]
/* Sort */ arr6.sort();
console.log(arr6); // [1, 1, 2, 2, 4, 4, 5, 5]
/* Sort (reverse) */ arr6.sort((a, b) => b - a);
console.log(arr6); // [5, 5, 4, 4, 2, 2, 1, 1]

/* Find index */ console.log(arr6.indexOf(2)); // 4
/* To String */ console.log(arr6.join(', ')); // 5, 5, 4, 4, 2, 2, 1, 1

/* Array Spread */
const arr7 = [...arr6];
arr7.push(6);
console.log(arr6); /* [5, 5, 4, 4, 2, 2, 1, 1] */
console.log(arr7); /* [5, 5, 4, 4, 2, 2, 1, 1, 6] */

const arr8 = arr7;
arr8.push('add');
console.log(arr7); /* [5, 5, 4, 4, 2, 2, 1, 1, 6, 'add'] */
console.log(arr8); /* [5, 5, 4, 4, 2, 2, 1, 1, 6, 'add'] */

/* Get min */ console.log(Math.min(...arr6)); // 1
/* Get max */ console.log(Math.max(...arr6)); // 5

console.log('\n#### ARRAY ITERATION ####');
// There are 5 ways to iterate through an array:
// For Loop (Will be taught later)
// For Each
// Map
// Filter
// Reduce

// Each method can have 3 parameters: num, index, array.
// num -> current element in the array.
// index -> index of the current element.
// array -> array itself.

// For Each
const arr9 = [1, 2, 3, 4, 5];
arr9.forEach((num) => console.log(num + 2)); // 3, 4, 5, 6, 7
arr9.forEach((num, index) => console.log(`${index}: ${num}`)); // 0: 1, 1: 2, 2: 3, 3: 4, 4: 5

let foreachstorage = '';
arr9.forEach((num) => (foreachstorage += num));
console.log(foreachstorage); // 12345

// Map (Creates a new array)
const map1 = arr9.map((num) => num + 2);
console.log(arr9); // [1, 2, 3, 4, 5]
console.log(map1); // [3, 4, 5, 6, 7]

// Filter (Creates a new array)
const filter1 = arr9.filter((num) => num > 3);
console.log(arr9); // [1, 2, 3, 4, 5]
console.log(filter1); // [4, 5]

// Reduce (Returns a single value)
const reduce1 = arr9.reduce((total, num) => total + num);
console.log(arr9); // [1, 2, 3, 4, 5]
console.log(reduce1); // 15

// Objects
console.log('\n#### OBJECTS ####');
// Objects contain key:value pairs.
const redCup = {
  color: 'red',
  volume: 500,
  weight: 200,
  material: 'plastic',
  'alternate material': 'glass',
  den: function () {
    console.log(this.weight * this.volume);
  },
};

// Accessing object properties:
console.log(redCup.color); // red
console.log(redCup['color']); // red

// If the key has a space in it, you must use bracket notation.
console.log(redCup['alternate material']); // glass

// Removing object's value
delete redCup.weight;
console.log(redCup); // {color: "red", volume: 500, material: "plastic", den: [Function: den]}

// Object methods are functions that are stored as object values.
// this refers to the object itself. Thus, this.weight refers to the weight property of redCup object.
redCup.den(); // 1000000

// Classes
console.log('\n#### CLASSES ####');
// Classes are blueprints for creating objects.
class Cup {
  constructor(color, volume, weight, material) {
    this.color = color;
    this.volume = volume;
    this.weight = weight;
    this.material = material;
  }

  den() {
    console.log(this.weight * this.volume);
  }
}

// To create an object from a class, you must use the new keyword.
const blueCup = new Cup('blue', 500, 200, 'plastic');

// Dates
console.log('\n#### DATES ####');
// Date objects are created with the new Date() constructor.
new Date(); // Current date and time
new Date(2023, 3, 20, 12, 30, 0, 0); // 20 April 2023 12:30:00
new Date('April 20, 2023 12:30:00'); // 20 April 2023 12:30:00
new Date('2023/04/20'); // 20 April 2023 00:00:00
new Date('2023-04-20'); // 20 April 2023 00:00:00

// Date methods
const date1 = new Date('2023-04-20 02:30:05:02');
// Get year
console.log(date1.getFullYear()); // 2023
// Get month (0 = January, 1 = February, etc.)
console.log(date1.getMonth()); // 3
// Get day (0 = Sunday, 1 = Monday, etc.)
console.log(date1.getDay()); // 0
// Get date
console.log(date1.getDate()); // 20
// Get hours
console.log(date1.getHours()); // 2
// Get minutes
console.log(date1.getMinutes()); // 30
// Get seconds
console.log(date1.getSeconds()); // 5
// Get milliseconds
console.log(date1.getMilliseconds()); // 2

// Math
console.log('\n#### MATH ####');
// Math is a built-in object that has properties and methods for mathematical constants and functions.
// Math.PI
console.log(Math.PI); // 3.141592653589793
// Math.round()
console.log(Math.round(4.7)); // 5
// Math.ceil() (Always rounds up)
console.log(Math.ceil(4.4)); // 5
// Math.floor() (Always rounds down)
console.log(Math.floor(4.7)); // 4
// Math.trunc() (Removes decimal)
console.log(Math.trunc(4.7)); // 4

// Math.pow() (Power)
console.log(Math.pow(8, 2)); // 64
// Math.sqrt() (Square root)
console.log(Math.sqrt(64)); // 8
// Math.abs() (Absolute value)
console.log(Math.abs(-4.7)); // 4.7

// Math.random() (Random number between 0 and 1)
console.log(Math.random()); // 0.123456789
// Math.floor(Math.random() * 10) (Random number between 0 and 10)
console.log(Math.floor(Math.random() * 10)); // 5

// Math.min() (Minimum number)
console.log(Math.min(1, 2, 3, 4, 5)); // 1
// Math.max() (Maximum number)
console.log(Math.max(1, 2, 3, 4, 5)); // 5

// Functions
console.log('\n#### FUNCTIONS ####');
// Functions are reusable blocks of code.
// Function declaration
function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(2, 3)); // 5
// Arrow function
const addNumbers2 = (num1, num2) => num1 + num2;
console.log(addNumbers2(2, 3)); // 5

// Conidtional statements
console.log('\n#### CONDITIONAL STATEMENTS ####');
// Conditional statements are used to perform different actions based on different conditions.
// If statement (Outputs 'You are underage.')
const age = 10;
if (age < 18) {
  // Only executed when user is under 18
  console.log('You are underage.');
} else if (age >= 18 && age < 21) {
  // Only executed when user is between 18 and 21
  console.log('You are old enough to drink but not old enough to smoke.');
} else {
  // Only executed when user is 21 or older
  console.log('You are old enough to drink and smoke.');
}

// Switch statement (Outputs 'You selected option 2.')
let option = 2;
switch (option) {
  case 1:
    console.log('You selected option 1.');
    break; // Important
  case 2:
    console.log('You selected option 2.');
    break;
  case 3:
    console.log('You selected option 3.');
    break;
  default:
    // Optional
    console.log('You selected an invalid option.');
    break;
}

// Ternary operator (Outputs 'You are underage.')
const curr_age = 10;
curr_age < 18
  ? console.log('You are underage.')
  : console.log('You are old enough.');
// to store the result in a variable,
let message = curr_age < 18 ? 'You are underage.' : 'You are old enough.';
console.log(message);

// Loops
// Loops are used to repeat a block of code a certain number of times.
// For loop (Outputs 0 to 9)
console.log('\n#### FOR LOOP ####');
for (let i = 0; i < 10; i++) {
  // let i = 0 (initialization), i < 10 (condition), i++ (increment)
  console.log(i);
}

// For-In Loop and For-of Loop
console.log('\n#### FOR-IN/FOR-OF LOOP ####');
// When used in objects
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
};
for (let key in person) {
  console.log(key); // Outputs 'name', 'age', 'city'
  console.log(person[key]); // Outputs 'John', 30, 'New York'
}

// for (let key of person) {
//     console.log(key) // TypeError: person is not iterable
// }

// When used in arrays
const colors = ['red', 'green', 'blue'];
for (let index in colors) {
  console.log(index); // Outputs 0, 1, 2
  console.log(colors[index]); // Outputs 'red', 'green', 'blue'
}

for (let color of colors) {
  console.log(color); // Outputs 'red', 'green', 'blue'
}

// While loop
console.log('\n#### WHILE LOOP ####');
// While loops are normally used when you don't know how many times the code should run.
// Note: If the condition can never be false, an infinite loop will occur.
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
} // Outputs 0 to 4

// Do-While loop
console.log('\n#### DO-WHILE LOOP ####');
// The do-while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true,
// then it will repeat the loop as long as the condition is true.
let j = 0;
do {
  console.log(j);
  j++;
} while (j > 5); // Outputs 0

// Break vs Continue
// Break
// The break statement "jumps out" of a loop.
console.log('\n#### BREAK ####');
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i); // Outputs 0 to 4
}

// Continue
// The continue statement "jumps over" one iteration in the loop.
console.log('\n#### CONTINUE ####');
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i); // Outputs 0 to 4 and 6 to 9
}

// Error Handling
console.log('\n#### ERROR HANDLING ####');
// Error handling is used to handle runtime errors in a program.
// try...catch
let errorh = 4;
try {
  console.log(errorh / 5); // Will only run if errorh is defined previously
} catch (err) {
  throw new Error('errorh is currently not defined'); // Will only run if errorh is not defined previously
} finally {
  console.log('This will always run.'); // Will always run
} // Outputs 0.8 and 'This will always run.'

// END
