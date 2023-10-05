const user = {
    username : "isha",
    price: 999,

    welcomeMsg : function(){
        // console.log(`${this.username} ,welcome`);
        console.log(this) // returns current object
    }
}
// user.welcomeMsg()
user.username = "ishuuu"
// user.welcomeMsg()
// console.log(this)


function chai(){
    const username = "isha";
    // console.log(this.username);//undefined
    console.log(this);  
}
// chai()

const chai2 = ()=>{
    console.log(this);//{}
}
chai2();

//implicit return in arrow function
const addTwo = (num1,num2)=> (num1+num2)
// console.log(addTwo(2,3))

const fun = ()=>({username:"isha"})
console.log(fun())