const accountId = 12345
let accountEmail = "sagarsingh@gmail.com"
var accountPassword = "01234"
accountCity = "NewYork"

//accountId = 2 //Not Allowed

accountEmail =  "Sa@Sa.com"
accountPassword = "12121212"
accountCity = "Bengaluru"
let accountState;

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //In table form

/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/
