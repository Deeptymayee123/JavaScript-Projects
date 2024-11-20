const score = 500;
const marks = new Number(400);

// console.log(score);
// console.log(marks);
// console.log(marks.toString().length);
// console.log(marks.toFixed(3)); //to fix decimal /precition value

const otherNumber = 123.5766;

// console.log(otherNumber.toPrecision(5));

// const hundreds = 3568;
// console.log(hundreds.toLocaleString("en-IN"));
// it will set comma in  numbers in indian format, e.g - 1,000 etc(Et cetera)

// **************************maths**********************

// math library in js is by default.

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(7.6));
// console.log(Math.ceil(4, 2));
/*
Math.ceil() static method always rounds up 
and returns the smallest integer greater than or equal to a given number.
*/
console.log(Math.floor(4, 9));
console.log(Math.min(4, 5, 8, 0));
console.log(Math.max(4, 5, 8, 0));

console.log(Math.random()); //gives values between 0 to 1.
console.log(Math.random() * 10 + 1);
/*
Math.random() * 10 => for getting single number between 1 to 9.
+1 => for avoiding 0 value.

Math.floor() =>static method always rounds down and
returns the largest integer less than or equal to a given number
*/
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
/*
set the range  of random value by using (max - min ) instead multiplying with 10 and 
,then add min because it gives result upto (max-min) i.e upto 10 
*/
