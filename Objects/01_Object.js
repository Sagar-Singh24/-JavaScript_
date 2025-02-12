//Singleton
//Object.create

//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sagar",
    "full_Name": "Sagar Singh",
    [mySym]: "myKey1",
    age: 23,
    location: "BBSR",
    email: "sagarsingh@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); //Best Method
// console.log(JsUser["full_Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "sagar@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sagar@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
