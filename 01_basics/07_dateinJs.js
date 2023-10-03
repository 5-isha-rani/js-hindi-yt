let date = new Date();
// console.log(date.toDateString());
// console.log(date.toString());
// console.log(date.toLocaleString("en-US", {timeZone: 'Asia/Kolkata'}));
// console.log(date.toLocaleTimeString("en-US", {timeZone: 'Asia/Kolkata'}));
console.log(date.toTimeString("en-US", {timeZone: 'Asia/Kolkata'}));

let d = new Date(2023, 1, 23);
// console.log(d.toDateString());

let d1 = new Date("2023-01-23");
// console.log(d1.toDateStringt());

//timestamps
let d2 = Date.now();
console.log(d2);