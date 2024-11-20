// function sum() {
//   console.log(2 + 3);
// }
// sum();

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// const result = add(5, 3);
//console.log(result);   => it gives undefined as o/p.

function add(num1, num2) {
  const res = num1 + num2;
  return res;
  //console.log(res); //unreachable code
}
const result = add(5, 3);
console.log(result);

function LoginUserMessage(userName = "Ram") {
  // u can give default value here.
  // if (userName === undefined) =>it is a boolean /conditional value.
  // if (userName) => it is undefined value.
  if (!userName) {
    console.log("Please enter a valid user.");
    return; // if u don't  want to execute this => return `${userName} just logged in.`;
  } else {
    return `${userName} just logged in.`;
  }
}

console.log(LoginUserMessage("deepti"));
console.log(LoginUserMessage());
