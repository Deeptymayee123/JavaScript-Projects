// ES6
//JS- prototypal behaviour

// class user {
//   constructor(userName, email, password) {
//     this.userName = userName;
//     this.password = password;
//     this.email = email;
//   }

//   encryptPassword() {
//     return `${this.password}`;
//   }
//   capitalizeWord() {
//     return `${this.userName.toUpperCase()}`;
//   }
// }

// const chai = new user("sipu", "sipu@example.com", "1234");

// console.log(chai.encryptPassword());
// console.log(chai.capitalizeWord());

//behind the scene

function user(userName, email, password) {
  this.userName = userName;
  this.password = password;
  this.email = email;
}

user.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

user.prototype.capitalizeWord = function () {
  return `${this.userName.toUpperCase()}`;
};

const kadha = new user("sipu", "sipu@example.com", "1234");

console.log(kadha.encryptPassword());
console.log(kadha.capitalizeWord());
