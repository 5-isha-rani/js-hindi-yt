let score = "33a";
console.log(typeof(score));

let valInNumber = Number(score);
console.log(typeof valInNumber);  //  o/p --> number
console.log(valInNumber); //NaN

let temp = null;
let temp2 = Number(temp);  // o/p --> 0
//console.log(typeof temp);//  o/p --> object
//console.log(temp2);  // o/p --> 0

let undef = undefined;

// console.log(undef);
// console.log(typeof undef);
// console.log(Number(undef));

let isLog = "ijjh";
// let isBoolLog = Boolean(isLog);
// console.log(isBoolLog);  //true

let isStringLog = Boolean(isLog);
console.log(isStringLog);   //true

let emptyString = "";
console.log(Boolean(emptyString)); //false


let num = 33;
let stringNum = String(num);
console.log(typeof stringNum);   //string
console.log(stringNum);

