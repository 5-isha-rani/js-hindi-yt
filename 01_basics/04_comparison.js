// dont comapare two different datatypes it will give unpredictable results
console.log("2" > 1);  //true
console.log("2 " == 2); // true
console.log(null > 0); //false
console.log(null == 0); //false

console.log(null >= 0) //true because this comparison convert null to a number , treating it as 0

console.log(undefined == 0);
console.log(undefined >= 0);

// "===" this will check datatypes 
console.log("2" === 2); //false