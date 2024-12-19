var c = 80;
let var1 = 8; //=> global scope

if (true) {
  // {} => this is scope.
  let var1 = 10;
  const var2 = 20;
  c = 90;
  // var2 = 90;
  console.log("INNER: ", var2);
} //=> block scope

// for (let i = 0; i <= arr.length; i++) {
//   const element = arr[i];
// }

// console.log(var1);
// console.log(var2);
// console.log(c); //var c value  reassign  to 90

// scope in brawsor is different from scope in vs.

function one() {
  const userName = "kishan";

  function two() {
    const website = "youtube"; //local scope
    console.log(userName);
  } /// it can acccess parent variable so it is called closure.
  // console.log(website);
  two();
}

// one();

if (true) {
  const userName = "deepti";

  if (userName === "deepti") {
    const website = "youtube";
    console.log(userName + website);
  }
  // console.log(website);
}
// console.log(userName);

// **********interesting**********

console.log(addone(5));

function addone(num) {
  return num + 1;
} //function
// addone(5);

const addtwo = function (num) {
  //function  express
  return num + 2;
};
console.log(addtwo(5));
