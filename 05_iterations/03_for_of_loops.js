// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps  // it is an object that holds key value pairs and does not repeat values 

const map = new Map()
map.set('IN', "India") // first one is the key and second on is value
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {  //within the block bracket destructuring of array is happening where the key and value would be printed separatly  
    // console.log(key, ':-', value);
}  


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {  // here the object is not iterable as for of loop doesn't work on objects 
//     console.log(key, ':-', value);
    
// }