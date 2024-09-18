// Arrays

const myArray = [0, 1, 2, 3, 4, 5, true, "deepti"];
const friends = ["chinu", "snehal", "dinesh", "Biswa", "Ankita"];

const myArr = new Array(1, 2, 3, 4);

// console.log(myArr[0]);

// Array methods

myArr.push(5); //shallow copy of object myArr
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// const element = myArr.shift();
// console.log(myArr);
// console.log(element);

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(5)); //boolean result
// console.log(myArr.indexOf(4));

// const newArray = myArr.join();

// console.log(newArray);
// console.log(typeof newArray);

// console.log(myArr);

// slice, splice
console.log("A", myArr); //A tag and it gives real array

const myr1 = myArr.slice(1, 4);
console.log(myr1); //slice gives 1 to 4-1
console.log("B", myArr); // it does not change original array.

const myr2 = myArr.splice(1, 4);
console.log(myr2); //splice gives 1 to 4
console.log("B", myArr); // it changes ogiginal array by removing splice elements.
