// Immediately invoked function expressions (IIFE)

// function call() {
//   console.log("DB CONNECTED");
// }
// call();

//named IIFE
(function call() {
  console.log("DB CONNECTED");
})(); // it will give same result.
/*syntax:
()()
1st- we write fun def
2nd- execution call 

* how to explain in interview?
=> it is a fun for immediate call/execute. (not bad but not selected in interview)
=> Sometimes global scope create pollution ,therefore to remove that pollution we use it.*/
// here in first () we can write arrow fun.

//simple IIFE
((name) => {
  //argument
  console.log(`DB connected two ${name}`); //use backtick o/w it will give ${name}.
})("deepti"); //parameter, it will run. ; for end code

// arrow function expression
((child) => {
  console.log(`good morning ${child}`);
})("laxmi");
