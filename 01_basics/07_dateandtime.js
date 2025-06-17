let myDate=new Date()
console.log(myDate);
console.log(myDate.toString);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);//object

let myCreateDate=new Date(2023,0,23)
console.log(myCreateDate.toDateString());

let myCreateDates=new Date(2023,0,23,12,5,45)
console.log(myCreateDates.toLocaleString());

let myCreateDatess=new Date("08-09-2005")
console.log(myCreateDatess.toLocaleString());

let myTimeStamp =Date.now()
console.log(myTimeStamp);
console.log(myCreateDatess.getTime());
console.log(Math.floor(Date.now()/1000));//convert to sec

let newDate= new Date()
console.log(newDate);
console.log(newDate.getHours());
console.log(newDate.getDay());

newDate.toLocaleString('default',{weekday:"narrow"})



