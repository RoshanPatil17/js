//primitive -call by value
//7 types : String,Number,Boolean,Null,Undefined,symbol,BigInt

const score=100
const scoreval=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);//cheak they are equal or not

const bigNumber=3456765n
console.log(bigNumber)
console.log(typeof bigNumber)//bigint


//non-premetive -call by Reference-refernce is irectly allocated
// Array,Objects,Functions

const heros=["Roshan","PAtil","Antara"]

let myObj={
    name:"roshan",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

/*********************Stack(Primitive),Heap(Non-primitive) */
let myYoutubeName="rosh"

let anotherName=myYoutubeName
anotherName="patil"

console.log(myYoutubeName)
console.log(anotherName)

//let myYoutubeName="rosh"

//let anotherName="patil"
// anotherName=myYoutubeName

//console.log(myYoutubeName)
//console.log(anotherName)//output is same

let userOne={
    email:"user@google.com",
    upi:"user.ybl"
}
let userTwo=userOne
userTwo.email="roshan@google.com"

console.log(userOne.email);
console.log(userTwo.email);