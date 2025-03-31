# JavaScript Arrays, Objects, and Spread Operator

## 📌 Arrays in JavaScript

### **Key Features:**

- Ordered collection of values (index-based)
- Can contain different data types (numbers, strings, objects, other arrays)
- Mutable (elements can be modified)
- Indexed from `0` (first element at index `0`)

### **Common Array Methods:**

| Method                                 | Description                                   |
| -------------------------------------- | --------------------------------------------- |
| `push()`                               | Adds an element to the end                    |
| `pop()`                                | Removes the last element                      |
| `shift()`                              | Removes the first element                     |
| `unshift()`                            | Adds an element to the beginning              |
| `splice(start, deleteCount, ...items)` | Adds/removes elements at a specific index     |
| `slice(start, end)`                    | Returns a portion of the array                |
| `map()`                                | Returns a new array after applying a function |
| `filter()`                             | Returns elements that satisfy a condition     |
| `reduce()`                             | Reduces array to a single value               |
| `find()`                               | Returns the first matching element            |
| `forEach()`                            | Loops through the array (no return value)     |

### **Example:**

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr[2]); // 3

arr.push(6); // [1, 2, 3, 4, 5, 6]
arr.pop(); // [1, 2, 3, 4, 5]
```

---

## 📌 Objects in JavaScript

### **Key Features:**

- Collection of **key-value pairs**
- Keys are always **strings** or **Symbols**
- Values can be any data type
- Not iterable by default (cannot use `for...of`, but can use` for...in`)

### **Common Object Methods:**

| Method                          | Description                                 |
| ------------------------------- | ------------------------------------------- |
| `Object.keys(obj)`              | Returns an array of keys                    |
| `Object.values(obj)`            | Returns an array of values                  |
| `Object.entries(obj)`           | Returns an array of `[key, value]` pairs    |
| `Object.assign(target, source)` | Copies properties from `source` to `target` |
| `delete obj.key`                | Removes a property                          |

### **Example:**

```js
const person = { name: "Alice", age: 25, city: "New York" };
console.log(person.name); // Alice
console.log(Object.keys(person)); // ["name", "age", "city"]
```

---

## 📌 Destructuring in JavaScript

### **Key Features:**

- Extract values from arrays or objects into variables
- Makes code cleaner and easier to read

### **Object Destructuring:**

```js
const course = {
	coursename: "JS in Hindi",
	price: "999",
	courseInstructor: "Hitesh",
};

// Traditional way
console.log(course.courseInstructor); // "Hitesh"

// Destructuring way
const { courseInstructor: instructor } = course;
console.log(instructor); // "Hitesh"
```

### **Array Destructuring:**

```js
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third); // 1, 2, 3
```

### **Default Values in Destructuring:**

```js
const { name = "Guest" } = {};
console.log(name); // "Guest"
```

### **Nested Destructuring:**

```js
const user = {
	name: "John",
	address: {
		city: "New York",
		zip: 10001,
	},
};

const {
	address: { city },
} = user;
console.log(city); // "New York"
```

---

## 📌 Spread Operator (`...`)

### **Key Features:**

- Used to **spread elements** from arrays, objects, or iterables
- Can be used for **shallow copies** and **merging**
- Works on **iterables** (arrays, strings, Sets, Maps)
- Can be used for **function arguments**

### **Usage in Arrays:**

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]
```

### **Usage in Objects:**

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 3, c: 4 }
```

### **Using Spread in Function Arguments:**

```js
function sum(x, y, z) {
	return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```

### **Common Mistakes with Spread:**

❌ Spreading an object where an array is expected:

```js
const obj = { a: 1, b: 2 };
console.log([...obj]); // ❌ TypeError: obj is not iterable
```

✅ Fix:

```js
console.log([...Object.values(obj)]); // ✅ [1, 2]
```

---

## 📌 Rest Operator (`...` in Function Parameters)

### **Key Features:**

- Used to **gather arguments** into an array
- Helps in handling **variable arguments**

### **Example:**

```js
function addNumbers(...nums) {
	return nums.reduce((sum, num) => sum + num, 0);
}

console.log(addNumbers(1, 2, 3, 4)); // 10
```

- Here, `...nums` collects all arguments into an array `[1, 2, 3, 4]`

---

## 📌 Destructuring with Spread

### **Array Destructuring:**

```js
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first, second, rest);
// Output: 1, 2, [3, 4, 5]
```

### **Object Destructuring:**

```js
const obj = { name: "John", age: 30, city: "London" };
const { name, ...otherDetails } = obj;
console.log(name); // John
console.log(otherDetails); // { age: 30, city: "London" }
```

---

## 📌 Difference Between Spread and Rest

| Feature  | Spread (`...`)                       | Rest (`...`)                       |
| -------- | ------------------------------------ | ---------------------------------- |
| Usage    | Expands elements                     | Gathers elements                   |
| Works on | Arrays, Objects, Strings, Sets, Maps | Function parameters, Destructuring |
| Example  | `const newArr = [...arr1, ...arr2];` | `function sum(...nums) {}`         |

---

## 📌 Shallow Copy vs Deep Copy

### **Shallow Copy (Using Spread)**

```js
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };

obj2.b.c = 99;
console.log(obj1.b.c); // 99 (nested objects are referenced)
```

### **Deep Copy (Using `JSON.parse(JSON.stringify())`)**

```js
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.b.c = 99;
console.log(obj1.b.c); // 2 (deep copy avoids reference issues)
```

---

## 📌 Interview Questions

### **Basic Level:**

1. **What is the difference between an array and an object in JavaScript?**  
   Arrays are ordered collections indexed by numbers, while objects store key-value pairs where keys are strings or symbols.

2. **What are different ways to loop through an array?**  
   Using `for`, `forEach()`, `map()`, `while`, `for...of`, and `reduce()`.

3. **What are `map()`, `filter()`, and `reduce()` used for?**

   - `map()` creates a new array by transforming each element.
   - `filter()` returns elements that satisfy a condition.
   - `reduce()` accumulates values into a single output.

4. **How does the spread operator work in arrays?**  
   It expands elements into a new array, e.g., `const newArr = [...arr1, ...arr2];`.

5. **What happens if two objects have the same key when spread?**  
   The last object in the spread operation overrides earlier ones with the same key.

6. **What is destructuring in JavaScript?**  
   Destructuring allows extracting values from objects or arrays into variables.

7. **How do you rename a variable while destructuring an object?**  
   Using `const { key: newVar } = object;`

8. **How does destructuring work with default values?**  
   If a value is `undefined`, the default value is used (`const { key = "default" } = obj;`).

9. **What is the difference between spread and rest?**  
   Spread expands values, while rest collects values into an array.

10. **How do you destructure a nested object?**  
    `const { outerKey: { innerKey } } = obj;`

### **Advanced Level:**

11. **Explain the difference between `Object.keys()`, `Object.values()`, and `Object.entries()`.**

- `Object.keys()` returns an array of property names.
- `Object.values()` returns an array of values.
- `Object.entries()` returns an array of `[key, value]` pairs.

12. **What is the difference between shallow copy and deep copy?**

- A **shallow copy** (e.g., using spread) shares nested object references.
- A **deep copy** (e.g., `JSON.parse(JSON.stringify(obj))`) creates a completely independent clone.

13. **Why does `console.log(...{ a: 1, b: 2 })` give an error?**  
    Objects are not iterable, so they cannot be spread into function arguments or arrays directly.

14. **What is the difference between spread (`...`) and rest (`...`) operators?**

- **Spread** expands elements (`const arr = [...arr1, ...arr2]`).
- **Rest** gathers elements (`function sum(...nums) {}`).

14. **How do you merge two objects without modifying the original?**  
    Using the spread operator: `const merged = { ...obj1, ...obj2 };`.

---

## 📌 Summary

✔ Arrays are **ordered, index-based** collections.  
✔ Objects are **key-value pairs** and **not iterable**.  
✔ **Destructuring** extracts values from objects/arrays into variables.  
✔ The **spread operator (`...`)** is used for merging/copying arrays and objects.  
✔ The **rest operator (`...`)** gathers arguments in functions and destructuring.
