// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr); //prints the original array 

const myn1 = myArr.slice(1, 3)

console.log(myn1);  //prints the range of .slice
console.log("B ", myArr); //shows that the original array is not manipulated in the .slice 


const myn2 = myArr.splice(1, 3)
console.log(myn2); // prints the range of .splice
console.log("C ", myArr);//prints the updated original array 