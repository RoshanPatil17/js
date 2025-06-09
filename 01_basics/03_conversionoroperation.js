let score= "33"
console.log(typeof score);
console.log(typeof (score));
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber) //output is NaN-not a number
/*if value of score is null then output is 0
undefined then output is undefined
true=1 & false=0*/

let isLoggedIn="hitesh"
let booleanISLoggedIn = Boolean(isLoggedIn)
console.log(booleanISLoggedIn)

// 1= true; 0= false
//""= false
//"roshan"=true

let someNumber=34
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


//****************operations************//

let value = 3
let negvalue = -value
console.log(negvalue);

let str="hello"
let str1="antara"
let str3=str1+ str
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(2+2+"2");

console.log(true)//output=true
console.log(+true)//output=1

let gameCounter=100
gameCounter++;
console.log(gameCounter) //output=101

let gameCounters=100
gameCounters--;
console.log(gameCounters)//output=99