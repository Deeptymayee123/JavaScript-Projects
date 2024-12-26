//How can you change the value of pi from 3.1415 to a upper celing value or lower floor value ?

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

console.log(Math.PI);
console.log((Math.PI = 5));
console.log(Math.PI);

const chai = {
  name: "ginger",
  price: "250",
  isAvailable: true,

  orderChai: function () {
    console.log("chai nehain bani");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: true,
  //   enumerable: false, //then it stop iterting
}); //making property value false.

console.log(Object.getOwnPropertyDescriptors(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
  console.log(`${key} : ${value}`);
}

// search in google:- object itetaration properties
