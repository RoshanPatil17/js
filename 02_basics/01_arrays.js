//array

const myArr = [0,1,2,3,4,5]//it can be mix datatypes

console.log(myArr[1])
const myArr2 = new Array(1,2,3,4)

//array method

myArr.push(6)
myArr.push(7)
myArr.push(8)
myArr.pop()//eleting last value
myArr.unshift(9)//it adds to start of index
myArr.shift()//it will remove start of index number
console.log(myArr);


console.log(myArr.includes(6));
console.log(myArr.indexOf(2));

const newArr=myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice,splice

console.log("A",myArr);
const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

 const myHeros=["roshan","patil","shaktiman"]
 const dc=["yoooo","devta","shaktiman"]
// myHeros.push(dc)
// console.log(myHeros);

let allhero=myHeros.concat(dc)
console.log(allhero);

const allnewhero=[...allhero,...dc];
console.log(allnewhero);

const anotherArr=[1,2,3,[4,5,6],7,[8,9]]
const realArray=anotherArr.flat(Infinity)
console.log(realArray);

console.log(Array.isArray("roshan"));
console.log(Array.from("ROSHANTARA"))

console.log(Array.from({name:"ROSHANTARA"}))//interesting


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


 








