const score = 400;
console.log(score);

const balance = new Number(100);
// console.log(balance);   //[Number: 100]

// console.log(balance.toString());
console.log(balance.toFixed(2));

const num = 1123.8765;
// console.log(num.toPrecision(3));

const num1 = 100000;
// console.log(num1.toLocaleString('en-IN'));

// console.log(Number.MIN_VALUE);

//******Maths********/
// console.log(Math.abs(-4));   //4
// console.log(Math.round(4.6));  //5
// console.log(Math.ceil(4.6));   //5
// console.log(Math.floor(4.9));  //4
// console.log(Math.min(2 , 3));
console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor  (Math.random() * (max - min + 1))+min);