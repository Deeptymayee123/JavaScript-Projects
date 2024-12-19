// object types.
// const obj = new Object();   => singleton object (object constructor)
const obj = {}; // => non-singleton object
obj.id = "1234ID";
obj.company = "TCS";
obj.isLoggedIn = false;
obj.email = "ojha@gmail.com";

console.log(obj);

const employees = {
  email: "Dipa@gmail.com",
  fullname: {
    userFullName: {
      firstname: "deeptimayee",
      lastname: "ojha",
    },
  },
};

console.log(employees.fullname.userFullName.firstname);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "A",
  4: "B",
};

// combining objects
// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 }; // latest
console.log(obj3);
/*
  read object assign in mdn
const obj = Object.assign(target, source)
here target is {} and sources are obj1, obj2.
  */
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "kishan@gmail.com",
  },
  {
    id: 2,
    email: "dipa@gmail.com",
  },
  {
    id: 3,
    email: "gudu@gmail.com",
  },
  {
    id: 4,
    email: "chinu@gmail.com",
  },
];
console.log(users[0].email);
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log(obj.hasOwnProperty("isLoggedIn"));
