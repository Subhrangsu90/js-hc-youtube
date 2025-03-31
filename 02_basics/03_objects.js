// singleton pattern
// Object.create(null);

// object literal

const mySym = Symbol("key1");

const JsUser = {
	name: "Subhrangsu",
	"full name": "Subhrangsu Bera",
	// mySym: "mykey1",
	[mySym]: "mykey1",
	age: 28,
	location: "Kolkata",
	email: "subhrangsu@gmail.com",
	isLoggedIn: false,
	lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email); // dot notation
// console.log(JsUser["email"]); // bracket notation
// console.log(JsUser["full name"]); // bracket notation
// console.log(JsUser[mySym]);

JsUser.email = "subhrangsu@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "subhrangsu@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
	console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
	console.log(`Hello JS user ${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
