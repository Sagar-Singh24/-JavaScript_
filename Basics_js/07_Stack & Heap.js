// Stack(Primitive)    Heap(Non-Primitive)

let myYoutubename = "Sagar Singh"

let anothername = myYoutubename
anothername = "SinghCode"


console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "sagar@google.com"

console.log(userOne.email)
console.log(userTwo.email)
