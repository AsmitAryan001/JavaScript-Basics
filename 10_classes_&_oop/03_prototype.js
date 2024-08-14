// let myName = "asmit"
// let mychannel = "ash"

// console.log(myName.trueLength);


let myHeros = ["hulk", "spiderman"]

let heroPower = {
    hulk: "punch",
    spiderman: "web",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
        
    }
}

Object.prototype.yash = function(){  // here we are adding a new property in the topmost level heirarchy of the object
    console.log(`yash is present in all objects`);
    
}

Array.prototype.heyYash = function() { //here we are adding a new property to the array to check if it can be accessed in the obejet or not
    console.log(`yash says hello`);
}

//heroPower.yash() //here we are accessing that property through object 

//myHeros.yash() //here we are accessing that property through an array 

myHeros.heyYash() //here we are able to access it without any issues  

//heroPower.heyYash() //but here are unable to access it through the object because it is present in the lower heirarchy 

// IMP Note:- if the property is added in the object then only it can be accessed everywhere otherwise it is added in a array, string, function then it can only be accessed in the same only and CANNOT BE SHARED AMONG THEM


// inheritance 

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()