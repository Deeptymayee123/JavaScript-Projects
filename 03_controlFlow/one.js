// if
// const isUserloggedIn = true;
// if (isUserloggedIn) {
//   var name = "fly";
//   console.log(`you choose ${name}`);
// }
// console.log(`out of if scope ${name}`);

// if (2 != "2") {
//   console.log("run");
// }

// const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test2");---->dont use comma like this

// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 750) {
//   console.log(" less 750");
// } else if (balance < 900) {
//   console.log("less 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = false;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy coourse1.");
}
if (userLoggedIn || debitCard) {
  console.log("Allow to buy coourse2.");
}

const month = 33;
switch (month) {
  case 1:
    console.log("1");
    break;
  case 3:
    console.log("3");
    break;
  default:
    console.log("default");
    break;
}
