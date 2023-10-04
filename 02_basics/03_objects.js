//singleton   constructor se hamesha singleton banega 
// Object.create()



//object literal 
const sym = Symbol("key1");
const user = {
    name:"isha",
    "fullName":"isha rani",
    age:22,
    [sym]:"mykey1",
    isLoggedIn:false,
    location:"ludhiana"
};




// console.log(user.name);
// console.log(user["name"])
// console.log(user["fullName"]);
// console.log(user.age);
// console.log(user[sym]);

// user.age = 23;
// console.log(user.age);
// Object.freeze(user);
// user.name = "ishu";


user.greeting = function(){
    console.log("hello world")
}
user.greeting2 = function(){
    console.log(`hello js user , ${this.name} `);
}
console.log(user.greeting());
console.log(user.greeting2());