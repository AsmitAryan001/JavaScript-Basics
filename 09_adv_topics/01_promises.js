const promiseOne =new Promise(function(resolve,reject){
    // do an async task
    // database calls,crypto,network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "asmit" , email: "abc@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);  // the parameter passed in resolve is received here 

})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "yash", password: "4321"})
        } else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
 console.log(user);
    return user.username
}).then((username) => {
    console.log();
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise io either resolveg or rejected"))


//using promises with async await 
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "JavaScript", password: "4321"})
        } else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
