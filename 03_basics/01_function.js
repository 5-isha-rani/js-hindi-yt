const func = function(){
    console.log("hello")
}
// func();//function execution
// func //function reference

function addTwoNum( a , b)
{
    return a+b;
}
const add = addTwoNum(2 , 3)
// console.log(add);
function loginUserMsg(username)
{
    if(username === undefined){
        console.log("please enter username")
        return
    }
   
    return `${username} just logged in `
}
const ans = loginUserMsg();//if i dont pass arguments then -->undefined
console.log(ans);

//to avoid undefined cases
function msg(username = "isha")
{
return `${username} messaged`

}
console.log(msg())

function calcPrice(...num1){
    return num1
}
console.log(calcPrice(200 , 400 , 500))

function calc(val1 , val2 , ...num)
{
    return num
}
console.log(calc(200 , 400 , 500 , 600))

const user = {
    name:"isha",
    price: 199
}
function handle(u)
{
    console.log(user.name)
}
handle(user);