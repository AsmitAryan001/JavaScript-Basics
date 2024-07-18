const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){  // a callback function that will print all the elements of the array 
//     console.log(val);
// } )

// coding.forEach( (item) => { // same as above , will print the elements of the array 
//    console.log(item);
// } )

// function printMe(item){ // a basic fucntion just for printing values 
//     console.log(item);
// }

// coding.forEach(printMe) // here we are embedding an external function inside the for each loop , make sure to use only the reference don't execute the fucntion

// coding.forEach( (item, index, arr)=> { 
//     console.log(item, index, arr);  // here it will print the item with its index and the total array 
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName); // it will allow us to extract an object from an array 
} )