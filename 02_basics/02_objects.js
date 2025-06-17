//singelton
//Object.create//constructor

//object literals

const mySym=Symbol("key1")

const jsUser={
    name: "roshan",
    "fullName":"Patil",
    [mySym]:"myKey1",
    age:20,
    location: "Mumbai",
    lastLoginDate:["monday","tuesday"]
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["age"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

jsUser.name="antaraa"
Object.freeze(jsUser)
jsUser.name="patil"//this change can not propogate
console.log(jsUser);

// jsUser.greeting=function(){
//     console.log("hello js user");
// }


// jsUser.greeting1=function(){
//     console.log(`hello js user,${this.name}`);
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greeting1());






