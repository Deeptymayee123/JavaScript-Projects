//object literal

const user = {
  //collection of properties ad method.
  userName: "dipa", //object properties
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("got user details from user.");
    // console.log(`username: ${userName}`); // userName not defined
    // console.log(`username: ${this.userName}`);
    console.log(this); // current context (object value).
  },
};

// console.log(user);
// console.log(user.userName);
// user.getUserDetails();
// console.log(this); // an empty object.
//  global context value of this is = {}
//in google browser inspect console.log(this) gives global context s windows

//for making more objects we need constructor.
//new keyword is basically a constructor function.

// const promiseOne = new Promise();
const date = new Date();

function User(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`welcome ${this.userName}`);
  };

  return this; // after comment it also return implicitlly all the values.
}

// const userOne = User("Subhalaxmi", 12, true);
// const userTwo = User("laxmi", 11, false);

// console.log(userOne);
//use constructor for removing overwritting.new keyword gives new instances.
//new keyword function
// - first create an empty object called instance.
// - 2nd construction function call bcz of new keyword (it packs all the arguments and give)
// - 3rd all arguments injected in this keyword.
// - 4th we got all inside the function.

const userOne = new User("Subhalaxmi", 12, true);
const userTwo = new User("laxmi", 11, false);
// console.log(userOne);
// console.log(userTwo);
// console.log(userOne.constructor); // o/p- [Function: User]
// console.log(userTwo.constructor);

// console.log(userOne instanceof User === userTwo instanceof User);
// console.log(userTwo instanceof User);

console.log(typeof function () {});
