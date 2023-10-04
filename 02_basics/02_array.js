const heros = ["ironman" , "spiderman"];
const heros2 = ["superman" , "flash" , "batman"];
// heros.push(heros2);
// console.log(heros); //[ 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


const heros3 = heros.concat(heros2);
// console.log(heros3);

const heros4 = [...heros , ...heros2]
// console.log(heros4);

const heros5 = [1,2,3,[4,5,6] , 7, [6,7,[4,5]]];
// console.log(heros5);
const heros6 = heros5.flat(Infinity);
// console.log(heros6);

// console.log(Array.isArray("isha")); //false

// console.log(Array.from("isha"));

console.log(Array.from({name:"isha"}));  //interesting case

const num1 = 100;
const num2 = 200;
const num3 = 300;
console.log(Array.of(num1 , num2 , num3));
