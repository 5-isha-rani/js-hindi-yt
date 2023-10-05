//singleton
// const user = new Object();
const user = {}
user.id = "123abc"
user.name = "isha"
user.isLoggedIn = false;
// console.log(user);

const user2 = {
    email:'isha@gmail.com',
    fullName :{
        userName:{
            fname:"isha",
            lname:"rani"
        }
    }
}
// console.log(user2.fullName.userName.fname);

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    2:"c",
    4:"d"
}
const obj3 = {obj1 , obj2};
// console.log(obj3);

// const obj4 = Object.assign(obj1 , obj2)
//obj1 and obj4 are same because assign method returns modified target array
// console.log(obj4);
//{ '1':'a','2':'c','4': 'd' }
// console.log(obj1);

//in this case target is {} (empty object)
const obj5 = Object.assign({} ,obj1 , obj2)
// console.log(obj5);
// console.log(obj1);


//spread operator
const obj6 = {...obj1 , ...obj2};
// console.log(obj6);

const user3 = [
    {
        id:1,
        email:"isha@gmail.com",  
    },
    {
        id:1,
        email:"isha@gmail.com",  
    },
    {
        id:2,
        email:"aisha@gmail.com",  
    },
    {
        id:3,
        email:"isha@gmail.com",  
    }
]
// console.log(user3[0].email)
// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('name'));

//*********object destructure***********//
const course = {
    cname:"js in hindi",
    price:"999",
    teacher:"hitesh"
}
// console.log(course.teacher);
const{cname:name , price} = course;
console.log(name);
