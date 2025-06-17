//+++++++++++Num++++++++++++//
const score=400
console.log(score);

const balance= new Number(100)
console.log(balance);

console.log(balance.toString().lenght);//convert to string

console.log(balance.toFixed(2));

let num=123.8966
console.log(num.toPrecision(3));

let nums=10000000
console.log(nums.toLocaleString('en-IN')); 


// +++++++++++++MAth+++++++++++//

console.log(Math);
console.log(Math.abs(-4));//absolute=convert in positive value
console.log(Math.abs(4));
console.log(Math.round(4.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));//roun of to lowest value
console.log(Math.min(4,3,2,5,6,7));
console.log(Math.max(4,3,2,5,6,7));

console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

const min =10
const max=20
Math.random()*(max-min+1)
console.log(Math.floor(Math.random()*(max-min+1))+min);


