// global scope
let a = 10
// const b= 20
// var c = 30

// block scope
if(true){
    let a = 100
    const b = 200
    // var c = 300
    // console.log(a) // 100
    // console.log(b) // 200
    // console.log(c) // 300
}

// console.log(a) // ReferenceError: a is not defined 
// console.log(b) // ReferenceError: b is not defined
// console.log(c) // 300

// console.log(a) // 10


// function scope
function one(){
    var username = "Subhrangsu"
   
    function two(){
        const website = "subhrangsu.com"
        console.log(username) // Subhrangsu
    }
    // console.log(website) // ReferenceError: website is not defined
    two()
}  
// one() 


if(true){
    const username = "Subhrangsu"
    if(username === "Subhrangsu"){
        // block scope
        const website = " subhrangsu.com"
        // console.log(username + website) 
    }
    // console.log(website) // ReferenceError: website is not defined
}
// sconsole.log(username) // ReferenceError: username is not defined

// ========== Interesting fact ==========
console.log(addOne(5) ); // 6
function addOne(num){
    return num + 1
}
addOne(5) 

console.log(addTwo(5) ); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function addOne(num){
    return num + 2
}
addTwo(5) 
