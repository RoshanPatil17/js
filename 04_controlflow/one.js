//if 
//<,>,<=,>=,==,!=,===

// if(2==="2"){
//     console.log("executed")
// }else{
//     console.log("not Executed")
// }
// console.log("programmed executed")


// function temp(temperature){
// if(temperature>60){
//     let result=console.log("greater than 60");
//     return result
//     } 
//     console.log("not grater than")
// }
// console.log(temp(45))
// //console.log("not grater");

// const score=200
// if (score==100){
//     const power="fly"
//     console.log(`user power:${power}`);
// }
// console.log("not power");


// const balance=1000

// if(balance>500){
//     console.log("gretter than 500");
// }else if (balance<700){
//      console.log("less than 700");
// }




const userLoggedin=true
const debitcard=true

if(userLoggedin && debitcard){
    console.log("allow to buy course");
    
}

const usersLoggedin=true
const debitcardd=false

if(usersLoggedin || debitcardd){
    console.log("user logged in"); 
}

//Nullish Coalescing Operator(??): null undefined

let val1;
val1=5 ?? 10
val2=null ?? 10
val3=undefined ?? 15
val4= null ?? 10 ??20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// terniary Operator

// condition ? true:false

const iceTeaPrice=100
iceTeaPrice>=90 ?console.log("greater than 90") : console.log("less than 90");




