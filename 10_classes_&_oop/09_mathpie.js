const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    
    orderChai: function(){
        console.log("chai nhi bni");
    }
    }


console.log(Object.getOwnPropertyDescriptor(chai, "name")); // getOwnPropertyDescriptor tells us about some hidden properties about an Object like if it is writable , enumerable, configurable etc

Object.defineProperty(chai, 'name',{
    //writable: false,
    enumerable: false, 
}) 

//defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') //this check condition prevent iterating over any functions {
        
        console.log(`${key} : ${value}`);
    }
}

//here as we have set the enumerable property to false, it would not iterate over that property (in this case its name)