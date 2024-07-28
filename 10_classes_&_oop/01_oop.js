const user = {
    username: "Ash",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;   //this is used here to assign varaibles
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("asmit", 12, true) // the new keyword creates an new object(that has a constructor function) , which is used to create a new instance for userOne ,if new is not here then userTwo will overwrite its data to userOne as no new instance is being created ,and even if we print userOne the Data of userTTwo will be displayed
const userTwo = new User("yash", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);