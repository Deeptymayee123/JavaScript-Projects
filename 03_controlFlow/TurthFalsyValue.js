// const userEmail = "dipa@4321";//got user email.
// const userEmail = "";//gives don't have user email
const userEmail = []; //got usser email.
if (userEmail) {
  console.log("got user email.");
} else {
  console.log("don't have user email.");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
//"0", 'false'," ", [], {}, function(){}

if (userEmail.length === 0) {
  console.log("empty array");
}

// empty obj

const emptyobj = {};
if (Object.keys(emptyobj).length === 0) {
  console.log("object is empty");
}

//Nullish Coalqscing Oprator(??) null, undefined
/*definition: the nullish coalescing(??) operator is a logical operator that returns its right hand side operand 
when its left hand side operand is null or undefined, and o/w returns its left hand side operand. */

let val1;
// val1 = 5 ?? 10;//ans 5
// val1 = null ?? 10; // ans = 10
// val1 = undefined ?? 15; // ans= 15
// val1 = null ?? 14 ?? 10;

console.log(val1);

// ternary operator
// condition ? true: false
