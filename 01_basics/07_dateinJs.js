let date = new Date();
// console.log(date.toDateString());
// console.log(date.toString());
// console.log(date.toLocaleString("en-US", {timeZone: 'Asia/Kolkata'}));
// console.log(date.toLocaleTimeString("en-US", {timeZone: 'Asia/Kolkata'}));
console.log(date.toTimeString("en-US", {timeZone: 'Asia/Kolkata'}));

let d = new Date(2023, 1, 23);
// console.log(d.toDateString());

let d1 = new Date("10-04-2023");
// console.log(d1.toDateString());

//timestamps
let d2 = Date.now();//returns the number of ms
// console.log(d2);
// console.log(d1.getTime()); //return ms

// console.log(Math.floor(Date.now() /1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); //9 -->october
console.log(newDate.getDay()); //1-->monday

