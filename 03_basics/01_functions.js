function name(){
    console.log("R");
    console.log("O");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N"); 
}
name()

// function addTwonumber(num1,num2){//+++parameters
//     console.log(num1+num2);
// }
// addTwonumber(3,4)//arguments
// addTwonumber(3,"4")
// addTwonumber(3,a)
// addTwonumber(3,null)

function addTwonumber(num1,num2){//+++parameters
    // let result=num1+num2
    // return result //or
    return num1+num2
}
const result=addTwonumber(6,7)
console.log("result is:",result)

function logginUserMessage(username){
    if (username===undefined) {//or if(!username)
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}
console.log(logginUserMessage("Roshan"));
console.log(logginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400));

function calculateCartPrices(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrices(200,300,400));


const user={
    username:"roshan",
    price:12333
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)
handleObject({
    username:"antara",
    price:12234
})

const myArray=[100,200,300,400]
function mynewArray(anyArray){
    return anyArray[1]
}
console.log(mynewArray(myArray));
console.log(mynewArray([1000,12222,33333,44444]));


   


