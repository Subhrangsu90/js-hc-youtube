const tinderUser = {}; // this is how we create an empty literal object in JS

// const tinderUser = new Object(); // this is how we create an empty singleton object in JS

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
	email: "some@gmail.com",
	fullname: {
		userfullname: {
			firstname: "Subhrangsu",
			lastname: "Bera",
		},
	},
};
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign(obj1, obj2, obj4); // this will merge all the objects into one object
// const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj1 === obj3); // true

const obj3 = { ...obj1, ...obj2, ...obj4 }; // this will merge all the objects into one object
// console.log(obj3);

const myArr = [1, 2, 3, 4, 5];
const mergedArr = { ...myArr, ...obj1 };
console.log(mergedArr);
const users = [
	{
		id: 1,
		email: "s@gmail.com",
	},
	{
		id: 2,
		email: "u@gmail.com",
	},
	{
		id: 3,
		email: "b@gmail.com",
	},
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // this will return an array of keys
// console.log(Object.values(tinderUser)); // this will return an array of values
// console.log(Object.entries(tinderUser)); // this will return an array of arrays of key-value pairs
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // this will return true if the object has the property

// Destructuring

const course = {
	coursename: "js in hindi",
	price: "999",
	courseInstructor: "hitesh",
};

// course.courseInstructor;

const { courseInstructor: instructor } = course;
console.log(instructor);

// JSON Format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [{}, {}, {}];
