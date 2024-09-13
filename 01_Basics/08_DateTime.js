// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

// let CreatedDate = new Date(1999, 0, 7); // in js month starts from 0 -> jan ... 11-> dec
//let CreatedDate = new Date(1999, 10, 7);
//let CreatedDate = new Date(1999, 10, 7, 5, 3); //it gives date with time.

let CreatedDate = new Date("2024-01-13"); //yyyy-mm-dd, dd--mm-yyyy
//console.log(CreatedDate.toLocaleString()); //Tue Dec 07 1999

let myTimeStamp = Date.now();
// console.log(myTimeStamp); //gives time in miliseconds
// console.log(CreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000)); // converting miliseconds into secondsl

let newDate = new Date();
console.log(newDate.getMonth() + 1); //+1 because month starts from 0 in js, similarly we can find month, day, year, hr, milisec, sec etc(et cetera)

// string interpolation
console.log(`${newDate.getDate()} and the time is ${newDate.getTime()}`);

newDate.toLocaleDateString("default", {
  weekday: "long",
});
