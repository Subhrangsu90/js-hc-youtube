// Dates

let myDate = new Date();
// console.log(typeof myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toJSON());

// let myCreateDate = new Date(2023, 0, 23);
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreateDate.toLocaleString());

// let myCreateDate = new Date("2023-01-14");
let myCreateDate = new Date("01-14-2023");
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());
console.log(newDate.getDay());

newDate.toLocaleString("default", {
	weekday: "long",
});
console.log(newDate);
