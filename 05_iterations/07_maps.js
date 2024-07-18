const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 ) //this is called chaining and the in this technique the elements passed by the first function would be carried over to the next and so on 
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);