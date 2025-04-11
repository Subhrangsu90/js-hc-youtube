// Immediately Invoked Function Expression (IIFE)

// IIFE is a function that runs as soon as it is defined
// It is a design pattern to avoid polluting the global scope

(function chai(){
    // named IIFE
    console.log("DB CONNECTED");
})(); // IIFE


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Subha'); 