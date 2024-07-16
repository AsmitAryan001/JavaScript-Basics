// Immediately invoked function expression IIFE

(function chai(){
    console.log(`DB CONNECTED`); // the function has been wrapped into a parenthesis and the function is immediately executed after it
})(); //use semi colon to stop context, otherwise the next IIFE function will not execute


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); //IIFE using arrow function 
} )('hitesh')