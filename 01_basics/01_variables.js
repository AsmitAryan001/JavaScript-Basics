const accountId = 121212
let accountEmail = "abc@gmail.com"
var accountPassword = "1134"
accountCity = "Patna"
let accountState

// accountId = 2 // not allowed

accountEmail = "dec@gmail.com"
accountPassword = "323423"
accountCity = "Delhi"

console.log(accountId); 

/*
Do not use var 
due to issue in block scope and funtional scope\
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])