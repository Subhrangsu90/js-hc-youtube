// Primitive Data Types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);

const bigNumber = 3456543576654356754n;

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
	name: "Subhrangsu",
	age: 28,
};

const myFunction = function () {
	console.log("Hello World");
};

// console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) => Copy, Heap (Non-Primitive) => Reference

let myYoutubeName = "Subhrangshuberacom";

let anotherName = myYoutubeName;
anotherName = "Subhrangshu";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
	email: "user@google.com",
	upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "subhrangshu@google.com";

console.log(userOne.email);
console.log(userTwo.email);
