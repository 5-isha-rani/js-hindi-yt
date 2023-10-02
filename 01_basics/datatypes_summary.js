//Primitive (call by value)
//String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); //false

const bigNumber = 215454545454n;
//Reference / Non Primitive

//Array
//Objects
//Function  -->function Objects
//return types are objects

const heros = ["isha" , "onlyIsha"];
let obj = {
    name: "isha",
    age :22,

}
const fun = function(){
    console.log("hello");
}