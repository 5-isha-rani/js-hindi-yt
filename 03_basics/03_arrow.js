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
// console.log(fun())

//normal function has arguments object
function print(){
    console.log(arguments) 
}
print(20,30,40)  //returns an object   --> [Arguments] { '0': 20, '1': 30, '2': 40 }

//arrow function dont have 
const print1 = ()=>{
    console.log(arguments) //error
}
// print1(20,38,78)