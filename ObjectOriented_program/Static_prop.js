class user {
  constructor(userName) {
    this.userName = userName;
  }

  hideMe() {
    console.log(`userName is: ${this.userName}`);
  }
  //sometimes u dont want to give permission to objects which are instanciate from  class  to  access class methods .
  static createId() {
    //now we can not access it by instance objects
    return `123`;
  }
}

const rina = new user("deepti");

// console.log(rina.createId());

class department extends user {
  constructor(userName, email) {
    super(userName);
    this.email = email;
  }
}
const python = new department("deepti", "dipa@employee.com");
console.log(python.hideMe());
