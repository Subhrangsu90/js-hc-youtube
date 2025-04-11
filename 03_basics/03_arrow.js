const user = {
    username: "Subhrangsu",
    price: 999,

    welcomeMessage: function(){
        console.log(`Welcome to my website ${this.username}`)
        console.log(this);
        
    },
}

// user.welcomeMessage() // Welcome to my website Subhrangsu
// user.username = "Sam"
// user.welcomeMessage() // Welcome to my website Sam

// console.log(this); // {} => Window object ===> global object(in browser)

// function chai(){
//     let chai = "chai"
//     console.log(this.chai); // undefined => chai is not defined in global scope & 'this' is pointing to global object
// }

const chai = () => {
    let chai = "chai"
    console.log(this.chai); // undefined => chai is not defined in global scope & 'this' is pointing to global object
}

// chai() 

// Arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // implicit return
// const addTwo = (num1, num2) => (num1 + num2) // implicit return

const addTwo = (num1, num2) => ({username:"subha"}) // implicit return


console.log(addTwo(5, 10)); // 15

// const myArray = [1, 2, 3, 4, 5]
// myArray.forEach((num) => {})
