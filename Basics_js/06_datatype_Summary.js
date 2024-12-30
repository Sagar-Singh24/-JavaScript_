// Primitive

// 7 Type: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const Score = 100
const ScoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);

const bigNumber = 2466587942566415611n //BigInt



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["IronMan", "Dr Strange", "SpiderMan"];// Array

let myObj = {
    name: "Sagar",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof anotherId);
