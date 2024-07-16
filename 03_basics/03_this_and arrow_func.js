const user = {
    username: "ash",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //here this will show the current context 
    }

}

// user.welcomeMessage()
// user.username = "sam"  //this will overide the value as the context here is changed
// user.welcomeMessage()

// console.log(this); //this will refer to an empty object


// function chai(){
//     let username = "ash"
//     console.log(this.username); //here the "this" context doesn't work because it is inside a function not an object 
// }

// chai()


// const chai = function () {   //another way to write a function
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => { //writing a function using the arrow function
   let username = "ash"
    console.log(this);
}


chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2    // explicit return 
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // implicit return

const addTwo = (num1, num2) => ({username: "hitesh"}) // implicit return with an object


//parenthesis are important in implicit return 

console.log(addTwo(3, 4))