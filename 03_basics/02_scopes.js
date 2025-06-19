let a=10 //this all are global scopes


if(true){
    let a =100
    const b= 20
    console.log("inner block scope value of a :",a);   
}

console.log(a);
// console.log(b);


//nested scope

function one(){
    const username="roshan"

    function two(){
        const website="Youtube"
        console.log(username); 
    }
    //console.log(website);

    two()
}
one()

if(true){
    const usernamee="patil"
    if(usernamee==="patil"){
        const websitee="youtu"
        console.log(usernamee + websitee);
        
    }
    //console.log(websitee);
    
}
//console.log(usernamee);

//++++++++++++interesting++++++++++++

function addone(num){
    return num+1
}

addone(6)
console.log(addone(6));


const addtwo=function(num){
    return num+2
}
addtwo(6)
console.log(addtwo(6));



