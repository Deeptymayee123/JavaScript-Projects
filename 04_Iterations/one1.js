// for

// for (let index = 0; index < 10; index++) {
//   const element = index;
//   console.log (element);
//  }// ctrl +d --> for multi cursur in same word

// for (let index = 0; index < 5; index++) {
//   console.log(`outer loop element : ${index}`);

//   for (let i = 0; i < 5; i++) {
//     console.log(`inner loop element : ${i} and outer loop element : ${index}`);
//   }
// }

// for of

// ["", "", ""]--> value inside array
// [{},{},{}]--> value inside object
const arr = [1, 22, 3, 4, 5];

// for (const element of object) {

// }
// for (const element of arr) {
//   console.log(element);
// }
const wish = "greetings";
// for (const element of wish) { //iterate directly through value
//   console.log(`${element}`);
// }

// higher order array loops
// map --> read in map js mdn

const map = new Map();
map.set("father", "ullash ojha");
map.set("mother", "mamata ojha");
map.set("brother", "kishan ojha");
console.log(map);

// for (const key of map) {
//   console.log(key);

//   //   console.log(map.get(key));
// }

// for (const [key, value] of map) {
//   // array destructuring here.
//   console.log(key, ":- ", value);
// }

// const myobj = {
//   game: "ludo",
//   game2: "snake run",
// };
// for (const [key, value] of myobj) {
//   console.log(key, ":- ", value);
// }

const myobj = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

// for (const key in myobj) { //iterate through keys
//   console.log(`${key} and value is ${myobj[key]}`);
// }

// const programming = ["c", "java", "js", "python", "shellscript"];
// for (const key in programming) {
//   console.log(key, programming[key]);
// }

// for (const val in map) { // map is not iterable
//   console.log(val);
// }

// for each

const coding = ["c", "java", "js", "python", "shellscript"];

// coding.forEach(function (item) {
//   console.log(item);
// }); //callback fun has no name

// arrow fun syntax--> fun call() => {}
// coding.forEach((item) => {
//   console.log(item);
// function printme(item) {
//   console.log(item);
// }
// coding.forEach(printme); //here we give reference of printme don't execute it by writing printme()

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const mycode = [
  {
    languageName: "javascripts",
    extension: "js",
  },
  {
    languageName: "java",
    extension: "java",
  },
  {
    languageName: "python",
    extension: "py",
  },
];

mycode.forEach((item) => {
  console.log(item.languageName);
});
