const user={
    username:"roshan",
    age:20,
    price:700,
    welcomMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
        
    }
}
user.welcomMessage()
user.username="antara"
user.welcomMessage()

//console.log(this);

function chai() {
    let username="roshan"
    console.log(this.username);
    
}
chai()

// const chai= () => {
//     let username="roshan"
//     console.log(this);
    
// }
//chai()

const addtwo= (num1,num2)=>{
    return num1 + num2
}

console.log(addtwo(4,5));

const addtwoo= (num1,num2)=> (num1 + num2)
console.log(addtwoo(14,5));

