/*stack (primitive)--> string, boolean, number, undefined, symbol
 heap (non-primitive)--> array, object, function
*/
let name = "deepti ojha";
let anotherName = name;
anotherName = "kishan";

let num = 3455267434267843n;

console.log(typeof num);

console.log(name);
console.log(anotherName);

let user = {
  email: "deepti@google.com",
  upi: "kjnnlknlk",
};
console.log(user.email);

let user1 = user;
user1.email = "kishan@ojha";
console.log(user.email);
console.log(user1.email);
