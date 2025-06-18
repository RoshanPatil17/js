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

//object lec 2
const tinderuser= new Object()
// const tinderuser={}

tinderuser.name="roshan"
tinderuser.id="123abc"
tinderuser.isloggedIn=true

console.log(tinderuser);

const regularUser ={
    email:"abcdef123@gmail.com",
    fullname:{
        userfullname:{
            firstName:"roshan",
            lastName:"patil"
        }
    }
}

console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3={obj1,obj3}
// const obj3= Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}
console.log(obj3);

const user=[
    {
        id:1,
        name:"roshan"
    },
    {
        id:1,
        name:"roshan"
    },
    {
        id:1,
        name:"roshan"
    }
]

user[1].name
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('name'));


//object lec 3

const course={
    courseName:"js",
    cursefee:"free",
    courseinstructor:"sir"
}

const{courseinstructor:instructor}=course
console.log(instructor);





