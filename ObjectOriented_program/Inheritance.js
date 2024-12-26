class user {
  constructor(username) {
    this.username = username;
  }
  logme() {
    console.log(`username is ${this.username}`);
  }
}

class Teacher extends user {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourses() {
    console.log(`a new user whose name is ${this.username} `);
  }
}

const tea = new Teacher("chai", "chai@teacher.com", "123");

// tea.addCourses();
tea.logme();
const masalachai = new user("masalachai");
// masalachai.addCourses(); //it does not have the access.
masalachai.logme();

console.log(tea === masalachai);
console.log(tea === Teacher);
console.log(tea instanceof Teacher);
console.log(tea instanceof user);
