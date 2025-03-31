const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // push the whole array in an array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros); // combine two arrays
// console.log(allHeros);

// console.log(...dc_heros); // spread operator

const all_new_heros = [...marvel_heros, ...dc_heros]; // spread operator

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; // nested array
const real_another_array = another_array.flat(Infinity); // flat method
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Subhrangsu")); // check if it is array or not
console.log(Array.from("Subhrangsu")); // convert string to array
console.log(Array.from({ name: "Subhrangsu" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // convert to array
