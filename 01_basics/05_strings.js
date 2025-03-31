const name = "Subhrangshu";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String Interpolation

const gameName = new String("Subhrangshu-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf("s"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-13, 4);
console.log(anotherString);

const newStringOne = "   Subhrangshu   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://subhrangshu.com/subhrangshu%20bera";

console.log(url.replace("%20", "-"));

console.log(url.includes("subhrangshu"));

console.log(gameName.split("-"));

console.log(gameName.at(-1));
console.log(gameName.at(0));

console.log(gameName.charCodeAt(2));
