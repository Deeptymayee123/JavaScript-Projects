let myName = "deepti    ";
let myHouse = "Kakatpur    ";

// console.log(myName.length);
// console.log(myName.truelength);
// console.log(myName.trim().length);

//Question: How can we acces the real string without using trim() in all time ?

let myFnd = ["chinu", "snehal"];

let fndPower = {
  chinu: "smart",
  snehal: "beautiful",

  getChinuQuality: function () {
    console.log(`chinu's strength is ${this.chinu}`); // this means here this current function.
  },
};

// how we can inject prototype ?
Object.prototype.deepti = function () {
  console.log(`deepti is present in all objects.`);
};

Array.prototype.heydeepti = function () {
  console.log(`deepti says hello.`);
};

// fndPower.deepti();
myFnd.deepti();

myFnd.heydeepti();
// fndPower.heydeepti(); //array power is not injected in objects or its siblings like string or function.
// -  Array -->object -->null(reference of prototype)
// - string -->object -->null(reference of prototype)
// - Function -->object -->null(reference of prototype)

// - if we inject power in object then array, fun and string all passes through objects so all are injected with that object.

// inheritance

const User = {
  name: "chai",
  email: "chai@example.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "js assignment",
  fulltime: true,
  __proto__: teachingSupport, //assign prototype io ta object.
};

teacher.__proto__ = User; //assign user's property to teacher. then teacher can access it.
// this is prototypal inheritance.

//modern syntax
Object.setPrototypeOf(teachingSupport, teacher);

//now we get our answere that by injecting prototype we can get trim() value os ant string .Answere code:

let anotherUserName = "chaiaurcode         ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`true length is: ${this.trim().length}`);
};

anotherUserName.trueLength();
"kishan".trueLength();
"iceTech".trueLength();
// this is how we can iinject prototype in object ,array, function or string.
