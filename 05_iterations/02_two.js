//filter
const coding = ["js" , "ruby" , "java", "cpp", "python"]

const values = coding.forEach( (item)=>{
    // console.log(item);
})
// console.log(values)//undefined

const num = [1,2,3,4,5];
// const newNum = num.filter((num) => num > 2);
// newNum.forEach((item)=> console.log(item));

const num1 = [];
num.forEach( (item) =>{
    if(item > 2)
    {
        num1.push(item);
    }
})

console.log(num1);
