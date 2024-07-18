//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 number");
    }
    //console.log(element);
    
}

//console.log(element); // not accessible outside for loop scope


for (let i = 1; i <= 10; i++) { // nested loop i.e loop within a loop , here for every 1 iteration of the outer loop the inner loop would run 10 times
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and outer loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {  // if the conditions is true then the break statement will terminate any further iterations 
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) { // if the  statement is true then the continue statement will skip that iteration and also would allow the rest of the loop to continue , in this case when the value of index is equal to 5 then that iteration would be skipped and rest of the loop would be printed as per usual
    if (index == 5) {
       // console.log(`Detected 5`);
        continue
    }
   //console.log(`Value of i is ${index}`);
    
}