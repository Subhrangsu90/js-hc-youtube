// let score = "33";
// let score = "33abc";
// let score = null;
// let score = undefined;
let score = true;

// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// null => 0
// undefined => NaN

// let isLoggedIn = 1;
// let isLoggedIn = "";
let isLoggedIn = "Subhrangshu";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Subhrangshu" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// **************************** Operation ***************************** //

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 % 3);

let str1 = "hello";
let str2 = " Subhrangshu";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log(((3 + 4) * 5) % 3); // 2

// console.log(+true); // 1
// console.log(true+); // error
// console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
// gameCounter++;
++gameCounter;
// console.log(gameCounter);

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`); // "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`); // "a:4, b:4"

// Postfix increment
let x = 3;
const y = x++;
console.log(x, y); // x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
console.log(x2, y2); // x2 is 4n; y2 is 3n

// Prefix increment
let a = 3;
const b = ++a;
console.log(a, b); // a is 4; b is 4

let a2 = 3n;
const b2 = ++a2;
console.log(a2, b2); // a2 is 4n; b2 is 4n
