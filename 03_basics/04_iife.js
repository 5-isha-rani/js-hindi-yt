//IMMEDIATELY INVOKED FUNCTION IN JS 
// ()()  
// FIRST bracket for execution and second bracket for calling 
(function chai(){
    console.log("databse connected");
})();//if we dont put semicolon here then second arrow function will not work we need to end this function first

((name)=>{
    console.log(`database connected 2 ${name}`)
})("isha rani")
