//for of

const arr = [1,2,3,4,5];

for(const num of arr)
{
    // console.log(num);
}
const greeting = "isha is the best";
for(greet of greeting)
{
    if(greet === ' ')
    continue;
    // console.log(greet)
}

//maps
const map = new Map()
map.set("IN" , "India");
map.set("USA" , "United states of America");
map.set("fr" , "france");
// console.log(map)

for(const [key,value] of map)
{
    // console.log(key , ':-' , value);
}

const obj = {
    name:'isha',
    age:22,
    email:"isha@gmail.com"
}
for(const key in obj)
{

    // console.log(key);  
}
// name
// age
// email

for(const key in obj)
{
    // console.log(obj[key])
}

for(const key in arr)
{
    // console.log(arr[key]);
}
//for each loop
arr.forEach(item => {
    // console.log(item);
});

function print(item){
    // console.log(item);
}
arr.forEach(print) //dont write print() as we dont call the funciton here just reference it 

const coding = [
    {
        languageName: "javascript",
        file:"js"
    },
    {
        languageName: "java",
        file:"java"
    },
    {
        languageName: "python",
        file:"py"
    }
]
coding.forEach((item)=>{
    console.log(item.languageName)
})