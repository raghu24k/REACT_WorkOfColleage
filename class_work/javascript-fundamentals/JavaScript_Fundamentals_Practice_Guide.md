# JavaScript Fundamentals: Complete Practice Guide for Placements

## Table of Contents

1. [Introduction](#introduction)
2. [Variables and Data Types](#variables-and-data-types)
3. [Operators and Expressions](#operators-and-expressions)
4. [Control Flow](#control-flow)
5. [Functions](#functions)
6. [Arrays](#arrays)
7. [Objects](#objects)
8. [ES6+ Features](#es6-features)
9. [Closures and Scope](#closures-and-scope)
10. [This Keyword](#this-keyword)
11. [Prototypes and Inheritance](#prototypes-and-inheritance)
12. [Async Programming](#async-programming)
13. [Error Handling](#error-handling)
14. [DOM Manipulation](#dom-manipulation)
15. [Event Handling](#event-handling)
16. [Higher-Order Functions](#higher-order-functions)
17. [Destructuring and Spread](#destructuring-and-spread)
18. [Modules and Imports](#modules-and-imports)
19. [Common Interview Questions](#common-interview-questions)
20. [Coding Challenges](#coding-challenges)

---

## Introduction

### Why JavaScript Fundamentals Matter for Placements

JavaScript is one of the most in-demand skills in the tech industry. Strong fundamentals are crucial for:
- **Technical Interviews:** Most companies test core JavaScript concepts
- **Code Reviews:** Understanding fundamentals helps write better code
- **Debugging:** Strong fundamentals make debugging easier
- **Framework Understanding:** React, Vue, Angular all rely on JavaScript fundamentals

### How to Use This Guide

1. **Read the concept** - Understand the theory
2. **Solve the problem** - Try solving before looking at solution
3. **Review the solution** - Compare your approach
4. **Practice variations** - Modify problems to deepen understanding
5. **Interview prep** - Use interview questions for mock interviews

---

## Variables and Data Types

### Problem 1: Variable Declaration and Types

**Problem Statement:**
Write a program that declares variables of different types (number, string, boolean, null, undefined, object, array) and displays their types using `typeof`.

**Solution:**
```javascript
// Different variable declarations
let num = 42;
const str = "Hello, JavaScript!";
var isActive = true;
let nothing = null;
let notDefined = undefined;
let person = { name: "John", age: 30 };
let numbers = [1, 2, 3, 4, 5];

// Display types
console.log(typeof num);        // "number"
console.log(typeof str);        // "string"
console.log(typeof isActive);   // "boolean"
console.log(typeof nothing);     // "object" (JavaScript quirk)
console.log(typeof notDefined); // "undefined"
console.log(typeof person);     // "object"
console.log(typeof numbers);     // "object"
console.log(Array.isArray(numbers)); // true (better way to check arrays)
```

**Key Learning Points:**
- `let` and `const` are block-scoped (ES6+)
- `var` is function-scoped (older way)
- `null` returns `"object"` due to JavaScript bug (use `=== null` to check)
- Use `Array.isArray()` to check for arrays

---

### Problem 2: Type Coercion and Conversion

**Problem Statement:**
Demonstrate type coercion and explicit type conversion. Show what happens when you add different types together.

**Solution:**
```javascript
// Type Coercion (Implicit Conversion)
console.log(5 + "5");        // "55" (number coerced to string)
console.log("5" + 5);       // "55" (number coerced to string)
console.log(5 - "3");       // 2 (string coerced to number)
console.log("5" * 2);       // 10 (string coerced to number)
console.log("5" / 2);       // 2.5 (string coerced to number)
console.log(true + 1);      // 2 (true = 1)
console.log(false + 1);     // 1 (false = 0)
console.log(null + 1);      // 1 (null = 0)
console.log(undefined + 1); // NaN

// Explicit Type Conversion
let str = "123";
let num = Number(str);      // 123
let num2 = parseInt(str);   // 123
let num3 = +str;            // 123 (unary plus)
let num4 = Number("abc");   // NaN

let num5 = 456;
let str2 = String(num5);    // "456"
let str3 = num5.toString(); // "456"
let str4 = num5 + "";       // "456" (coercion)

let bool1 = Boolean(1);     // true
let bool2 = Boolean(0);     // false
let bool3 = Boolean("");    // false
let bool4 = Boolean("abc"); // true
let bool5 = !!1;            // true (double negation)
```

**Interview Question:**
What is the difference between `==` and `===`?

**Answer:**
```javascript
// == (loose equality) - performs type coercion
console.log(5 == "5");   // true (coerces string to number)
console.log(null == undefined); // true
console.log(0 == false); // true

// === (strict equality) - no type coercion
console.log(5 === "5");  // false (different types)
console.log(null === undefined); // false
console.log(0 === false); // false

// Best Practice: Always use ===
```

---

### Problem 3: Variable Hoisting

**Problem Statement:**
Explain variable hoisting with examples. Show the difference between `var`, `let`, and `const` hoisting.

**Solution:**
```javascript
// var hoisting
console.log(x); // undefined (not ReferenceError)
var x = 5;
// Equivalent to:
// var x;
// console.log(x);
// x = 5;

// let and const hoisting (Temporal Dead Zone)
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15;

// Function hoisting
sayHello(); // "Hello!" (works)

function sayHello() {
    console.log("Hello!");
}

// Function expression hoisting
sayHi(); // TypeError: sayHi is not a function

var sayHi = function() {
    console.log("Hi!");
};
```

**Interview Question:**
What will be the output?
```javascript
var a = 1;
function test() {
    console.log(a);
    var a = 2;
}
test();
```

**Answer:** `undefined` (not `1`). The `var a` inside function is hoisted, so it shadows the outer `a`.

---

## Operators and Expressions

### Problem 4: Arithmetic and Comparison Operators

**Problem Statement:**
Create a calculator function that performs basic operations and handles edge cases.

**Solution:**
```javascript
function calculator(a, b, operation) {
    switch(operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                throw new Error("Division by zero!");
            }
            return a / b;
        case '%':
            return a % b;
        case '**':
            return a ** b; // Exponentiation
        default:
            throw new Error("Invalid operation");
    }
}

console.log(calculator(10, 5, '+'));  // 15
console.log(calculator(10, 5, '-'));  // 5
console.log(calculator(10, 5, '*'));  // 50
console.log(calculator(10, 5, '/'));  // 2
console.log(calculator(10, 5, '%'));  // 0
console.log(calculator(2, 3, '**'));  // 8
```

---

### Problem 5: Logical Operators and Short-Circuit Evaluation

**Problem Statement:**
Demonstrate logical operators (`&&`, `||`, `!`) and their short-circuit behavior.

**Solution:**
```javascript
// AND (&&) - Returns first falsy value or last truthy value
console.log(true && false);     // false
console.log(true && "hello");   // "hello"
console.log(false && "hello");  // false (short-circuits)
console.log(null && "hello");   // null (short-circuits)

// OR (||) - Returns first truthy value or last falsy value
console.log(true || false);     // true (short-circuits)
console.log(false || "hello");  // "hello"
console.log(null || undefined); // undefined

// NOT (!) - Converts to boolean and negates
console.log(!true);   // false
console.log(!false);  // true
console.log(!0);      // true
console.log(!!"hello"); // true (double negation)

// Practical Examples
function greet(name) {
    name = name || "Guest"; // Default value
    return `Hello, ${name}!`;
}

console.log(greet("John"));  // "Hello, John!"
console.log(greet());        // "Hello, Guest!"

// Modern way (nullish coalescing)
function greetModern(name) {
    name = name ?? "Guest"; // Only null/undefined, not falsy
    return `Hello, ${name}!`;
}

console.log(greetModern(""));     // "Hello, !" (empty string is not null)
console.log(greetModern(null));   // "Hello, Guest!"
```

**Interview Question:**
What is the difference between `||` and `??`?

**Answer:**
- `||` returns first truthy value (considers all falsy: `false`, `0`, `""`, `null`, `undefined`, `NaN`)
- `??` (nullish coalescing) returns first non-nullish value (only `null` and `undefined`)

---

## Control Flow

### Problem 6: Conditional Statements

**Problem Statement:**
Write a function that determines the grade based on score using if-else, switch, and ternary operators.

**Solution:**
```javascript
// Using if-else
function getGradeIfElse(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// Using switch
function getGradeSwitch(score) {
    const level = Math.floor(score / 10);
    switch(level) {
        case 10:
        case 9:
            return 'A';
        case 8:
            return 'B';
        case 7:
            return 'C';
        case 6:
            return 'D';
        default:
            return 'F';
    }
}

// Using ternary operator
function getGradeTernary(score) {
    return score >= 90 ? 'A' :
           score >= 80 ? 'B' :
           score >= 70 ? 'C' :
           score >= 60 ? 'D' : 'F';
}

console.log(getGradeIfElse(85));   // 'B'
console.log(getGradeSwitch(92));   // 'A'
console.log(getGradeTernary(75));  // 'C'
```

---

### Problem 7: Loops - For, While, Do-While

**Problem Statement:**
Implement different loop types to solve: sum of numbers, factorial, and finding prime numbers.

**Solution:**
```javascript
// Sum of numbers using for loop
function sumForLoop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Factorial using while loop
function factorialWhile(n) {
    let result = 1;
    let i = n;
    while (i > 1) {
        result *= i;
        i--;
    }
    return result;
}

// Prime numbers using do-while
function isPrimeDoWhile(num) {
    if (num < 2) return false;
    let i = 2;
    do {
        if (num % i === 0) {
            return false;
        }
        i++;
    } while (i <= Math.sqrt(num));
    return true;
}

// For...of loop (arrays)
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// For...in loop (objects)
function printObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

console.log(sumForLoop(10));           // 55
console.log(factorialWhile(5));        // 120
console.log(isPrimeDoWhile(17));       // true
console.log(sumArray([1, 2, 3, 4]));   // 10
```

---

## Functions

### Problem 8: Function Declarations vs Expressions

**Problem Statement:**
Demonstrate different ways to define functions and their differences.

**Solution:**
```javascript
// Function Declaration (hoisted)
function add(a, b) {
    return a + b;
}

// Function Expression (not hoisted)
const subtract = function(a, b) {
    return a - b;
};

// Arrow Function (ES6+)
const multiply = (a, b) => {
    return a * b;
};

// Arrow Function (single expression)
const divide = (a, b) => a / b;

// Arrow Function (single parameter)
const square = x => x * x;

// Arrow Function (no parameters)
const greet = () => "Hello!";

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("IIFE executed");
})();

// Arrow function IIFE
(() => {
    console.log("Arrow IIFE executed");
})();

console.log(add(5, 3));        // 8
console.log(subtract(5, 3));  // 2
console.log(multiply(5, 3));  // 15
console.log(divide(10, 2));   // 5
console.log(square(4));       // 16
```

**Key Differences:**
- Function declarations are hoisted
- Arrow functions don't have their own `this`
- Arrow functions can't be used as constructors
- Arrow functions don't have `arguments` object

---

### Problem 9: Default Parameters and Rest Parameters

**Problem Statement:**
Create functions using default parameters and rest parameters.

**Solution:**
```javascript
// Default Parameters
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());              // "Hello, Guest!"
console.log(greet("John"));        // "Hello, John!"
console.log(greet("John", "Hi"));  // "Hi, John!"

// Rest Parameters (collects remaining arguments)
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3));           // 6
console.log(sum(1, 2, 3, 4, 5));     // 15
console.log(sum());                  // 0

// Combining default and rest
function createUser(name, age = 18, ...hobbies) {
    return {
        name,
        age,
        hobbies: hobbies.length > 0 ? hobbies : ["None"]
    };
}

console.log(createUser("John", 25, "reading", "coding"));
// { name: "John", age: 25, hobbies: ["reading", "coding"] }
```

---

### Problem 10: Callback Functions

**Problem Statement:**
Implement callback functions for array operations and event handling.

**Solution:**
```javascript
// Callback function example
function processArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = processArray(numbers, function(num) {
    return num * 2;
});

// Square each number (arrow function)
const squared = processArray(numbers, num => num * num);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(squared); // [1, 4, 9, 16, 25]

// setTimeout callback
setTimeout(function() {
    console.log("This runs after 1 second");
}, 1000);

// Array methods with callbacks
const nums = [1, 2, 3, 4, 5];

const evens = nums.filter(num => num % 2 === 0);
const doubled2 = nums.map(num => num * 2);
const sum = nums.reduce((acc, num) => acc + num, 0);

console.log(evens);    // [2, 4]
console.log(doubled2); // [2, 4, 6, 8, 10]
console.log(sum);      // 15
```

---

## Arrays

### Problem 11: Array Methods - Map, Filter, Reduce

**Problem Statement:**
Solve common array problems using map, filter, and reduce.

**Solution:**
```javascript
const students = [
    { name: "John", age: 20, grade: 85 },
    { name: "Jane", age: 22, grade: 92 },
    { name: "Bob", age: 19, grade: 78 },
    { name: "Alice", age: 21, grade: 95 }
];

// Map: Transform array
const names = students.map(student => student.name);
const grades = students.map(student => student.grade);
console.log(names);  // ["John", "Jane", "Bob", "Alice"]
console.log(grades); // [85, 92, 78, 95]

// Filter: Select elements
const topStudents = students.filter(student => student.grade >= 90);
const adults = students.filter(student => student.age >= 21);
console.log(topStudents); // [{name: "Jane", ...}, {name: "Alice", ...}]
console.log(adults);      // [{name: "Jane", ...}, {name: "Alice", ...}]

// Reduce: Accumulate values
const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
const averageGrade = totalGrade / students.length;
console.log(averageGrade); // 87.5

// Group by age
const groupedByAge = students.reduce((groups, student) => {
    const age = student.age;
    if (!groups[age]) {
        groups[age] = [];
    }
    groups[age].push(student);
    return groups;
}, {});
console.log(groupedByAge);

// Chaining methods
const topStudentNames = students
    .filter(student => student.grade >= 90)
    .map(student => student.name);
console.log(topStudentNames); // ["Jane", "Alice"]
```

---

### Problem 12: Array Manipulation

**Problem Statement:**
Implement common array operations: add, remove, find, sort.

**Solution:**
```javascript
let fruits = ["apple", "banana"];

// Add elements
fruits.push("orange");        // End
fruits.unshift("grape");      // Beginning
fruits.splice(2, 0, "mango"); // At index 2
console.log(fruits); // ["grape", "apple", "mango", "banana", "orange"]

// Remove elements
fruits.pop();                 // Remove last
fruits.shift();               // Remove first
fruits.splice(1, 1);          // Remove 1 element at index 1
console.log(fruits); // ["apple", "banana"]

// Find elements
const numbers = [1, 2, 3, 4, 5];
const found = numbers.find(num => num > 3);      // 4 (first match)
const foundIndex = numbers.findIndex(num => num > 3); // 3
const includes = numbers.includes(3);            // true
const indexOf = numbers.indexOf(3);             // 2

// Sort
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
const sorted = [...unsorted].sort((a, b) => a - b); // Ascending
const sortedDesc = [...unsorted].sort((a, b) => b - a); // Descending
console.log(sorted);     // [1, 1, 2, 3, 4, 5, 6, 9]
console.log(sortedDesc); // [9, 6, 5, 4, 3, 2, 1, 1]

// Reverse
const reversed = [...numbers].reverse();
console.log(reversed); // [5, 4, 3, 2, 1]

// Slice (doesn't modify original)
const sliced = numbers.slice(1, 3);
console.log(sliced); // [2, 3]
console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)
```

---

### Problem 13: Multi-dimensional Arrays

**Problem Statement:**
Work with 2D arrays: matrix operations, transpose, flatten.

**Solution:**
```javascript
// 2D Array (Matrix)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Access elements
console.log(matrix[1][2]); // 6

// Transpose matrix
function transpose(matrix) {
    return matrix[0].map((_, colIndex) => 
        matrix.map(row => row[colIndex])
    );
}

const transposed = transpose(matrix);
console.log(transposed);
// [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

// Flatten 2D array
const flattened = matrix.flat();
console.log(flattened); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Sum of matrix
const sum = matrix.flat().reduce((acc, num) => acc + num, 0);
console.log(sum); // 45

// Find max in matrix
const max = Math.max(...matrix.flat());
console.log(max); // 9
```

---

## Objects

### Problem 14: Object Creation and Manipulation

**Problem Statement:**
Create objects using different methods and manipulate them.

**Solution:**
```javascript
// Object literal
const person1 = {
    name: "John",
    age: 30,
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
}
const person2 = new Person("Jane", 25);

// Object.create()
const personProto = {
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};
const person3 = Object.create(personProto);
person3.name = "Bob";
person3.age = 28;

// Class (ES6+)
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}
const person4 = new PersonClass("Alice", 27);

// Object methods
const obj = { a: 1, b: 2, c: 3 };

// Keys
console.log(Object.keys(obj));      // ["a", "b", "c"]
console.log(Object.values(obj));    // [1, 2, 3]
console.log(Object.entries(obj));   // [["a", 1], ["b", 2], ["c", 3]]

// Check property
console.log(obj.hasOwnProperty("a")); // true
console.log("a" in obj);              // true

// Copy object
const copy1 = Object.assign({}, obj);
const copy2 = { ...obj }; // Spread operator (ES6+)

// Merge objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }
```

---

### Problem 15: Object Destructuring

**Problem Statement:**
Use object destructuring to extract and manipulate object properties.

**Solution:**
```javascript
const person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA"
};

// Basic destructuring
const { name, age } = person;
console.log(name, age); // "John" 30

// Renaming variables
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // "John" 30

// Default values
const { name: userName, email = "no-email@example.com" } = person;
console.log(email); // "no-email@example.com"

// Nested destructuring
const user = {
    name: "Jane",
    address: {
        street: "123 Main St",
        city: "Boston"
    }
};
const { address: { city } } = user;
console.log(city); // "Boston"

// Function parameters
function greet({ name, age }) {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet(person)); // "Hello, John! You are 30 years old."

// Rest in destructuring
const { name: firstName, ...rest } = person;
console.log(rest); // { age: 30, city: "New York", country: "USA" }
```

---

## ES6+ Features

### Problem 16: Template Literals

**Problem Statement:**
Use template literals for string interpolation and multi-line strings.

**Solution:**
```javascript
const name = "John";
const age = 30;

// Template literals (backticks)
const greeting = `Hello, ${name}! You are ${age} years old.`;
console.log(greeting); // "Hello, John! You are 30 years old."

// Multi-line strings
const multiLine = `
    This is a
    multi-line
    string
`;
console.log(multiLine);

// Expressions in template literals
const a = 5;
const b = 10;
const math = `The sum of ${a} and ${b} is ${a + b}`;
console.log(math); // "The sum of 5 and 10 is 15"

// Tagged template literals
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? `<mark>${values[i]}</mark>` : '');
    }, '');
}

const name2 = "JavaScript";
const message = highlight`Learning ${name2} is fun!`;
console.log(message); // "Learning <mark>JavaScript</mark> is fun!"
```

---

### Problem 17: Arrow Functions vs Regular Functions

**Problem Statement:**
Demonstrate differences between arrow functions and regular functions, especially regarding `this`.

**Solution:**
```javascript
// Regular function - has its own 'this'
const obj1 = {
    name: "Object 1",
    regularFunction: function() {
        console.log(this.name);
    }
};

// Arrow function - uses parent's 'this'
const obj2 = {
    name: "Object 2",
    arrowFunction: () => {
        console.log(this.name); // undefined (global scope)
    }
};

obj1.regularFunction(); // "Object 1"
obj2.arrowFunction();   // undefined

// 'this' binding example
const person = {
    name: "John",
    hobbies: ["reading", "coding"],
    
    // Regular function - 'this' refers to person
    showHobbiesRegular: function() {
        this.hobbies.forEach(function(hobby) {
            console.log(`${this.name} likes ${hobby}`); // 'this' is undefined
        });
    },
    
    // Arrow function - 'this' refers to person
    showHobbiesArrow: function() {
        this.hobbies.forEach(hobby => {
            console.log(`${this.name} likes ${hobby}`); // Works!
        });
    }
};

person.showHobbiesRegular(); // Error: Cannot read property 'name' of undefined
person.showHobbiesArrow();   // Works correctly

// Arguments object
function regular() {
    console.log(arguments); // Arguments object
}
regular(1, 2, 3);

const arrow = () => {
    console.log(arguments); // ReferenceError
};
// arrow(1, 2, 3); // Error
```

---

## Closures and Scope

### Problem 18: Understanding Closures

**Problem Statement:**
Create examples demonstrating closures and their practical uses.

**Solution:**
```javascript
// Basic closure
function outerFunction(x) {
    // Outer function's variable
    const outerVariable = x;
    
    // Inner function (closure)
    function innerFunction(y) {
        console.log(outerVariable + y); // Accesses outer variable
    }
    
    return innerFunction;
}

const closure = outerFunction(10);
closure(5); // 15 (remembers outerVariable = 10)

// Practical example: Counter
function createCounter() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter2.increment()); // 1 (separate closure)
console.log(counter1.getCount());  // 2

// Module pattern
const calculator = (function() {
    let result = 0;
    
    return {
        add: (x) => result += x,
        subtract: (x) => result -= x,
        multiply: (x) => result *= x,
        divide: (x) => result /= x,
        getResult: () => result,
        reset: () => result = 0
    };
})();

calculator.add(10);
calculator.multiply(2);
console.log(calculator.getResult()); // 20

// Common closure mistake (loop)
// Wrong way
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // Prints 3, 3, 3
    }, 100);
}

// Right way - using let
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // Prints 0, 1, 2
    }, 100);
}

// Right way - using IIFE
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // Prints 0, 1, 2
        }, 100);
    })(i);
}
```

**Interview Question:**
What is a closure and why is it useful?

**Answer:**
A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned. Useful for:
- Data privacy/encapsulation
- Function factories
- Module pattern
- Event handlers
- Callbacks

---

## This Keyword

### Problem 19: Understanding 'this' Binding

**Problem Statement:**
Demonstrate different ways `this` is bound in JavaScript.

**Solution:**
```javascript
// Global context
console.log(this); // Window (browser) or global (Node.js)

// Object method
const obj = {
    name: "MyObject",
    regularMethod: function() {
        return this.name; // 'this' refers to obj
    },
    arrowMethod: () => {
        return this.name; // 'this' refers to global
    }
};

console.log(obj.regularMethod()); // "MyObject"
console.log(obj.arrowMethod());   // undefined

// Function call (loses 'this')
const regularMethod = obj.regularMethod;
console.log(regularMethod()); // undefined (this is global)

// Bind - creates new function with bound 'this'
const boundMethod = obj.regularMethod.bind(obj);
console.log(boundMethod()); // "MyObject"

// Call - calls function with specified 'this'
function greet(greeting) {
    return `${greeting}, ${this.name}`;
}
const person = { name: "John" };
console.log(greet.call(person, "Hello")); // "Hello, John"

// Apply - same as call but arguments as array
console.log(greet.apply(person, ["Hi"])); // "Hi, John"

// Constructor function
function Person(name) {
    this.name = name;
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
}
const person1 = new Person("Alice");
console.log(person1.greet()); // "Hello, I'm Alice"

// Class methods
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    greetArrow = () => {
        return `Hello, I'm ${this.name}`;
    }
}

const person2 = new PersonClass("Bob");
const greetMethod = person2.greet;
const greetArrow = person2.greetArrow;

console.log(greetMethod());     // Error (lost 'this')
console.log(greetArrow());      // "Hello, I'm Bob" (bound)
```

---

## Prototypes and Inheritance

### Problem 20: Prototype Chain

**Problem Statement:**
Demonstrate prototype-based inheritance in JavaScript.

**Solution:**
```javascript
// Constructor function
function Animal(name) {
    this.name = name;
}

// Add method to prototype
Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

// Create instance
const dog = new Animal("Dog");
console.log(dog.speak()); // "Dog makes a sound"

// Inheritance using prototype
function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add method to Dog prototype
Dog.prototype.speak = function() {
    return `${this.name} barks`;
};

const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.speak()); // "Buddy barks"
console.log(myDog instanceof Dog);  // true
console.log(myDog instanceof Animal); // true

// ES6 Class syntax (syntactic sugar)
class AnimalClass {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
}

class DogClass extends AnimalClass {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks`;
    }
}

const myDog2 = new DogClass("Max", "Labrador");
console.log(myDog2.speak()); // "Max barks"
```

---

## Async Programming

### Problem 21: Promises

**Problem Statement:**
Create and handle promises for asynchronous operations.

**Solution:**
```javascript
// Creating a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve({ data: "Success!" });
            } else {
                reject(new Error("Failed!"));
            }
        }, 1000);
    });
}

// Using promises
fetchData()
    .then(result => {
        console.log(result.data);
        return "Processed";
    })
    .then(processed => {
        console.log(processed);
    })
    .catch(error => {
        console.error(error.message);
    })
    .finally(() => {
        console.log("Done");
    });

// Promise.all - wait for all promises
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // [1, 2, 3]
    });

// Promise.allSettled - wait for all (success or failure)
Promise.allSettled([promise1, Promise.reject("Error"), promise3])
    .then(results => {
        console.log(results);
        // [{status: "fulfilled", value: 1}, 
        //  {status: "rejected", reason: "Error"},
        //  {status: "fulfilled", value: 3}]
    });

// Promise.race - first to resolve/reject
Promise.race([
    new Promise(resolve => setTimeout(() => resolve("First"), 100)),
    new Promise(resolve => setTimeout(() => resolve("Second"), 200))
]).then(result => {
    console.log(result); // "First"
});
```

---

### Problem 22: Async/Await

**Problem Statement:**
Convert promise-based code to async/await and handle errors.

**Solution:**
```javascript
// Async function
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
}

// Using async/await
async function displayUser(userId) {
    try {
        const user = await fetchUserData(userId);
        console.log(user);
    } catch (error) {
        console.error("Failed to display user");
    }
}

// Sequential async operations
async function sequentialOperations() {
    const result1 = await operation1();
    const result2 = await operation2(result1);
    const result3 = await operation3(result2);
    return result3;
}

// Parallel async operations
async function parallelOperations() {
    const [result1, result2, result3] = await Promise.all([
        operation1(),
        operation2(),
        operation3()
    ]);
    return { result1, result2, result3 };
}

// Example: Fetching multiple resources
async function fetchMultipleResources() {
    try {
        const [users, posts, comments] = await Promise.all([
            fetch('/api/users').then(r => r.json()),
            fetch('/api/posts').then(r => r.json()),
            fetch('/api/comments').then(r => r.json())
        ]);
        
        return { users, posts, comments };
    } catch (error) {
        console.error("Error fetching resources:", error);
        return null;
    }
}
```

---

## Error Handling

### Problem 23: Try-Catch and Error Types

**Problem Statement:**
Implement comprehensive error handling.

**Solution:**
```javascript
// Basic try-catch
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero!");
        }
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

// Multiple catch blocks (not in JS, but can check error type)
function processData(data) {
    try {
        if (!data) {
            throw new TypeError("Data is required");
        }
        if (typeof data !== 'object') {
            throw new TypeError("Data must be an object");
        }
        // Process data
        return data.processed = true;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Type error:", error.message);
        } else {
            console.error("Unknown error:", error.message);
        }
        throw error; // Re-throw if needed
    }
}

// Finally block
function riskyOperation() {
    let resource = acquireResource();
    try {
        // Use resource
        return useResource(resource);
    } catch (error) {
        console.error("Error:", error);
        throw error;
    } finally {
        // Always cleanup
        releaseResource(resource);
    }
}

// Custom error class
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateUser(user) {
    if (!user.name) {
        throw new ValidationError("Name is required", "name");
    }
    if (!user.email) {
        throw new ValidationError("Email is required", "email");
    }
}

try {
    validateUser({});
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Validation error in ${error.field}: ${error.message}`);
    }
}
```

---

## DOM Manipulation

### Problem 24: Selecting and Manipulating DOM Elements

**Problem Statement:**
Create functions to manipulate the DOM.

**Solution:**
```javascript
// Selecting elements
const elementById = document.getElementById('myId');
const elementsByClass = document.getElementsByClassName('myClass');
const elementsByTag = document.getElementsByTagName('div');
const elementByQuery = document.querySelector('#myId');
const elementsByQueryAll = document.querySelectorAll('.myClass');

// Creating elements
function createElement(tag, text, className) {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) {
        element.className = className;
    }
    return element;
}

// Adding elements
const container = document.querySelector('#container');
const newDiv = createElement('div', 'Hello World', 'greeting');
container.appendChild(newDiv);

// Modifying elements
function updateElement(id, text, className) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
        element.className = className;
        element.setAttribute('data-updated', 'true');
    }
}

// Removing elements
function removeElement(id) {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
        // Or: element.parentNode.removeChild(element);
    }
}

// Manipulating styles
function changeStyle(id, styles) {
    const element = document.getElementById(id);
    if (element) {
        Object.assign(element.style, styles);
    }
}

changeStyle('myElement', {
    color: 'red',
    fontSize: '20px',
    backgroundColor: 'yellow'
});

// Working with classes
const element = document.querySelector('.my-element');
element.classList.add('new-class');
element.classList.remove('old-class');
element.classList.toggle('active');
element.classList.contains('active'); // true/false
```

---

## Event Handling

### Problem 25: Event Listeners and Event Delegation

**Problem Statement:**
Implement event handling with proper delegation.

**Solution:**
```javascript
// Basic event listener
const button = document.querySelector('#myButton');
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Event:', event);
    console.log('Target:', event.target);
});

// Event delegation (efficient for multiple elements)
const list = document.querySelector('#myList');

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
        event.target.classList.toggle('selected');
    }
});

// Event object properties
function handleEvent(event) {
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Stop event bubbling
    
    console.log('Type:', event.type);
    console.log('Target:', event.target);
    console.log('Current Target:', event.currentTarget);
    console.log('Client X:', event.clientX);
    console.log('Client Y:', event.clientY);
}

// Multiple event types
const input = document.querySelector('#myInput');

input.addEventListener('focus', () => {
    console.log('Input focused');
});

input.addEventListener('blur', () => {
    console.log('Input blurred');
});

input.addEventListener('input', (event) => {
    console.log('Input value:', event.target.value);
});

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log('Enter pressed');
    }
});

// Removing event listeners
function handleClick() {
    console.log('Clicked');
}

button.addEventListener('click', handleClick);
// Later...
button.removeEventListener('click', handleClick);
```

---

## Higher-Order Functions

### Problem 26: Map, Filter, Reduce Implementation

**Problem Statement:**
Implement your own versions of map, filter, and reduce.

**Solution:**
```javascript
// Custom map implementation
Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.myMap(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Custom filter implementation
Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

const evens = numbers.myFilter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Custom reduce implementation
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    
    return accumulator;
};

const sum = numbers.myReduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Chaining
const result = numbers
    .myMap(num => num * 2)
    .myFilter(num => num > 5)
    .myReduce((acc, num) => acc + num, 0);
console.log(result); // 24 (6 + 8 + 10)
```

---

## Destructuring and Spread

### Problem 26: Advanced Destructuring

**Problem Statement:**
Use destructuring and spread operators in various scenarios.

**Solution:**
```javascript
// Array destructuring
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log(first, second, rest); // 1, 2, [3, 4, 5]

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1

// Object destructuring
const person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA"
};

const { name, age, ...otherInfo } = person;
console.log(name, age, otherInfo);

// Nested destructuring
const data = {
    user: {
        name: "Jane",
        address: {
            street: "123 Main St",
            city: "Boston"
        }
    }
};

const { user: { name: userName, address: { city } } } = data;
console.log(userName, city);

// Spread operator - arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Spread operator - objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Function arguments
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Copying arrays/objects (shallow copy)
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] (unchanged)
console.log(copy);    // [1, 2, 3, 4]
```

---

## Common Interview Questions

### Question 1: What is the output?
```javascript
console.log(typeof typeof 1);
```
**Answer:** `"string"` - `typeof 1` returns `"number"`, then `typeof "number"` returns `"string"`.

---

### Question 2: What is the difference between `null` and `undefined`?
**Answer:**
- `undefined`: Variable declared but not assigned
- `null`: Explicitly assigned value meaning "no value"
- `typeof undefined` → `"undefined"`
- `typeof null` → `"object"` (JavaScript bug)

---

### Question 3: Explain event loop and call stack.
**Answer:**
```javascript
console.log('1');

setTimeout(() => {
    console.log('2');
}, 0);

Promise.resolve().then(() => {
    console.log('3');
});

console.log('4');

// Output: 1, 4, 3, 2
// Call stack: 1, 4
// Microtask queue: 3 (Promises)
// Macrotask queue: 2 (setTimeout)
```

---

### Question 4: What is the difference between `let`, `const`, and `var`?
**Answer:**
- `var`: Function-scoped, hoisted, can be redeclared
- `let`: Block-scoped, hoisted but in TDZ, cannot be redeclared
- `const`: Block-scoped, must be initialized, cannot be reassigned

---

### Question 5: Explain closure with example.
**Answer:**
```javascript
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
// Inner function remembers 'count' variable
```

---

## Coding Challenges

### Challenge 1: Implement Debounce Function

**Problem Statement:**
Create a debounce function that delays function execution.

**Solution:**
```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage
const debouncedSearch = debounce((query) => {
    console.log(`Searching for: ${query}`);
}, 300);

// Only executes after 300ms of no calls
debouncedSearch("hello");
debouncedSearch("hello");
debouncedSearch("hello"); // Only this executes
```

---

### Challenge 2: Implement Throttle Function

**Problem Statement:**
Create a throttle function that limits function execution frequency.

**Solution:**
```javascript
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

// Usage
const throttledScroll = throttle(() => {
    console.log("Scrolled");
}, 1000);

// Executes at most once per second
```

---

### Challenge 3: Deep Clone Object

**Problem Statement:**
Create a function to deep clone nested objects.

**Solution:**
```javascript
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    if (obj instanceof Array) {
        return obj.map(item => deepClone(item));
    }
    
    if (typeof obj === 'object') {
        const cloned = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloned[key] = deepClone(obj[key]);
            }
        }
        return cloned;
    }
}

// Usage
const original = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    },
    hobbies: ["reading", "coding"]
};

const cloned = deepClone(original);
cloned.address.city = "Boston";
console.log(original.address.city); // "New York" (unchanged)
```

---

### Challenge 4: Flatten Nested Array

**Problem Statement:**
Flatten a nested array to any depth.

**Solution:**
```javascript
function flattenArray(arr) {
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return acc.concat(flattenArray(item));
        }
        return acc.concat(item);
    }, []);
}

// Or using flat (ES2019)
function flattenArrayModern(arr, depth = Infinity) {
    return arr.flat(depth);
}

// Usage
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(flattenArray(nested)); // [1, 2, 3, 4, 5, 6]
```

---

### Challenge 5: Implement Promise.all

**Problem Statement:**
Implement Promise.all from scratch.

**Solution:**
```javascript
function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            resolve([]);
            return;
        }
        
        const results = [];
        let completed = 0;
        
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    });
}

// Usage
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

myPromiseAll([p1, p2, p3])
    .then(results => {
        console.log(results); // [1, 2, 3]
    });
```

---

### Challenge 6: Find Missing Number in Array

**Problem Statement:**
Find the missing number in an array of consecutive integers.

**Solution:**
```javascript
function findMissingNumber(arr, n) {
    // n is the expected length
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Usage
const arr = [1, 2, 4, 5, 6]; // Missing 3
console.log(findMissingNumber(arr, 6)); // 3
```

---

### Challenge 7: Check if String is Palindrome

**Problem Statement:**
Check if a string is a palindrome (ignoring case and spaces).

**Solution:**
```javascript
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// Or using two pointers
function isPalindromeTwoPointers(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("A man a plan a canal Panama")); // true
```

---

### Challenge 8: Group Anagrams

**Problem Statement:**
Group words that are anagrams of each other.

**Solution:**
```javascript
function groupAnagrams(words) {
    const groups = {};
    
    words.forEach(word => {
        const sorted = word.split('').sort().join('');
        if (!groups[sorted]) {
            groups[sorted] = [];
        }
        groups[sorted].push(word);
    });
    
    return Object.values(groups);
}

// Usage
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```

---

### Challenge 9: Implement Memoization

**Problem Statement:**
Create a memoization function to cache function results.

**Solution:**
```javascript
function memoize(func) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache[key]) {
            return cache[key];
        }
        
        const result = func.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Usage - Fibonacci
const fibonacci = memoize(function(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(40)); // Fast due to memoization
```

---

### Challenge 10: Implement Currying

**Problem Statement:**
Convert a function to accept arguments one at a time.

**Solution:**
```javascript
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

// Usage
function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));     // 6
console.log(curriedAdd(1, 2)(3));    // 6
console.log(curriedAdd(1)(2, 3));    // 6
```

---

## Placement Preparation Tips

### 1. Master the Fundamentals
- Variables, data types, operators
- Functions, closures, scope
- Objects, arrays, prototypes
- Async programming (Promises, async/await)

### 2. Practice Problem-Solving
- Solve coding challenges daily
- Focus on time and space complexity
- Practice on platforms like LeetCode, HackerRank

### 3. Understand JavaScript Quirks
- Hoisting
- `this` binding
- Type coercion
- Event loop

### 4. Know ES6+ Features
- Arrow functions
- Destructuring
- Spread/Rest operators
- Template literals
- Classes
- Modules

### 5. Practice Common Patterns
- Module pattern
- Factory pattern
- Observer pattern
- Singleton pattern

### 6. Debugging Skills
- Use browser DevTools
- Understand call stack
- Use breakpoints effectively
- Read error messages

---

## Resources for Further Learning

1. **MDN Web Docs** - Comprehensive JavaScript reference
2. **JavaScript.info** - Modern JavaScript tutorial
3. **Eloquent JavaScript** - Free online book
4. **You Don't Know JS** - Deep dive series
5. **LeetCode** - Coding practice
6. **HackerRank** - Algorithm challenges

---

## Conclusion

Mastering JavaScript fundamentals is essential for:
- **Technical Interviews:** Most companies test core concepts
- **Job Performance:** Strong fundamentals lead to better code
- **Career Growth:** Foundation for learning frameworks
- **Problem Solving:** Better debugging and optimization skills

**Practice regularly, understand concepts deeply, and build projects to reinforce learning!**

---

*Good luck with your placements! 🚀*

