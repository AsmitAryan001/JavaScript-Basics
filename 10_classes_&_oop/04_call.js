function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // .call is a method that is used to explicitly call a function, it also hold the reference like the variables declared, functions called, values returned and the "this" mentioned here sets the current execution context that now the "this" mentioned here would be used that gives the current context (this passes the context)

    // A formal definition :- .call is used to pass the current execution context from one function to another function
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);