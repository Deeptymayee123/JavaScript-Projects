const account_ID = 1442233; //const - declar for constants
let account_Email = "Deepti@google.com"; //for variables - let and var, {}---> scope
var account_Password = "12345";
account_City = "Bhubaneswar"; //not recommended
let account_State;
// console.log(account_City);

/*
Prefore not use var
because of issue in block scope and functional scope
*/

// account_ID = 2;           --------> (ctrl+/ )

account_Email = "Kishan@google.com";
account_Password = "45";
account_City = "Bengaluru";

console.log(account_Email); //log

console.table([
  // new for print more in a table format.
  account_ID,
  account_Email,
  account_Password,
  account_City,
  account_State,
]);
