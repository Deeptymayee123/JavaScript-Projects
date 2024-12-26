// call and this in js
// creating a discord

function setUserName(userName) {
  // complex DB calls
  this.userName = userName;
  console.log("setUserName is called");
}

function createUser(userName, email, password) {
  //   setUserName(userName); //actually it does not call here if call we get userName in output.
  //   setUserName.call(userName); //no it can call this.
  setUserName.call(this, userName); //actually this use current context of setUserName. like setUserName gives all his properties here.

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@.com", "123");
console.log(chai);
