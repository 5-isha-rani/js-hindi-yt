let a = 300

if(true)
{
 let a = 10
 const b = 20
 var c = 30
// console.log(a); //10
}
// console.log(a); //300

function one(){
    const uname = "isha"
    function two(){
        const website = "youtube"
        
        console.log(uname);
    }
    // console.log(website);  //cant access it
    // two()
}

one()

//*******interesting******//
console.log(addone(6)); // it is written before declaration still works
function addone(num){
    return num + 1;
}

console.log(addTwo(6));  //Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}

