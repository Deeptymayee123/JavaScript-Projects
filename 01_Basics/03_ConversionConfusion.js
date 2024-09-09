let score = "33";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//let score1 = "33abc";
// let score1 = null;
let score1 = true;
console.log(typeof score1);

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1); //string---->number, null--> object, boolean--> 1(true)/0(false), number--> number
console.log(valueInNumber1); //33abc ---> NaN ,null --->0 ,true --->1
/*
string---->number, null--> object, boolean--> 1(true)/0(false), number--> number
33abc ---> NaN ,null --->0 ,true --->1
 */

let num = 1;
let booleanIsLogged = Boolean(num);
console.log(booleanIsLogged);

/*
(i/p) 1 --> (0/p)true
*/
