const userEmail="rosh@gmail.com"

if (userEmail){
    console.log("got user email");
}else{
    console.log("dont have an email");
}

//falsy values
// false,0,-0,BigInt 0n,"",null,undefied,NaN
// truthy value 
// "0","false"," ",{},[],function(){}
if (userEmail.length===0) {
    console.log("Array is empty");
}
const emptyObj={}
if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
}