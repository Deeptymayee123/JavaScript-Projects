/*
we can create/declare an object in 2 ways 
  1> by object constructor
  2> by object literal
*/

//1> singleton
// Object.create // object constructor

// 2>object literals

const mySymbol = Symbol("key");
const jsuser = {
  name: "Deepti", //key - value
  "full name": "Deeptimayee ojha",
  [mySymbol]: "birth mark",
  age: 18,
  location: "odisha",
  email: "ojha@gmail.com",
  lastLoginDay: ["friday", "saturday"],
};
//we access elements of objects using . and {} 

// console.log(typeof jsuser.email);
// console.log(jsuser["email"]);
// console.log(typeof jsuser["full name"]); // here we can't use . for accessing "full name" value.
// //mdn js data types symbol declaration by using [] syntax.

// console.log(jsuser[mySymbol]);
// console.log(jsuser[mySymbol]);

// // Object.freeze(jsuser);  // it will make our object immutable.
// jsuser.email = "dipa@gmail.com";
// console.log(jsuser.email);
// console.log(jsuser);     //it will show you that mySymbol is a symbol key.

jsuser.greeting = function () {
  console.log("hello guys!");
};

jsuser.greetingTwo = function () {
  console.log(`hello, ${this.name}!`); //${name} => show error.
};
console.log(jsuser.greeting);
//it will show function reference

console.log(jsuser.greeting()); //it executes the function.

console.log(jsuser.greetingTwo());
