//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "ash"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "asmit"
    if (username === "asmit") {
        const website = " youtube"
        // console.log(username + website); // no error
    }
    // console.log(website); // outside scope 
}

// console.log(username); //outside scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // here it would execute without any errors

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){ //here it would throw an error as it cannot access addtwo before inintialization 
    return num + 2
}