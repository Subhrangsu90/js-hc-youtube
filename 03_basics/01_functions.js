function sayMyName(){
    console.log("Subha");
}
// sayMyName // Reference 
// sayMyName() // Function call

// function addTwoNumbers(num1,num2){ // num1, num2 parameters
//     console.log(num1+num2); 
// }

function addTwoNumbers(num1,num2){ // num1, num2 parameters
    // let result =num1 + num2; 
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3,4)// 3,4 are arguments 

// console.log("Result",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return; 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Subhrangsu"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){ // inside function ... rest operator
    return num1;
}

// console.log(calculateCartPrice(100,240,50,450));

const user = {
    username: "Subhrangsu",
    price: 499
}

function handleObject(anyobject){
    console.log(`Uesrname is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
 handleObject({
    username: "Subhrangsu",
    prices: 499
 })


 const myNewArray = [200,500,800]
 function returnSecondValue(getArray){
    return getArray[1]
 }

//  console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500,800]))
 
