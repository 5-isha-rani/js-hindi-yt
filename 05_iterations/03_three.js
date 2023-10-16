//map function in array
const num = [1,2,3,4,5];

const newNum = num.map((item , index , num)=> item+10);
// console.log(newNum);

const num2 = num.map(x=> x*10 )
.map(x => x+1)
.filter(x => x>30)
// console.log(num2);

const num3 = [1,2,3,4,5]

const initial_value = 0;
let res = num3.reduce((sum , curval) => sum+curval, initial_value);
console.log(res);


