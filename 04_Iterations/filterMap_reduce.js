const coding = ["c", "java", "js", "python", "shellscript"];

// const var1 = coding.forEach((item) => {
//   // console.log(item);
//   return item;
// }); // function extression
// for each don't return the values

// console.log(var1);

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newnum = mynums.filter((num) => num > 4); // but filter return the values.
// const newnum = mynums.filter((num) => {
//   num > 4;
// }); // we discussed it in 02_Basics/arrowFun.js in line no 40.i.e
// if we write open {} scope then we need to write return keyword.

// const newnum = mynums.filter((num) => {
//   return num > 4;
// }); //it will give normal result.

// const newnum = [];

// mynums.forEach((num) => {
//   if (num > 4) {
//     newnum.push(num);
//   }
// });

// console.log(newnum); // filter and forEach both are good way

const book = [
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    title: "Things Fall Apart",
    year: 1958,
  },
  {
    author: "Hans Christian Andersen",
    country: "Denmark",

    title: "Fairy tales",
    year: 1836,
  },
  {
    author: "Dante Alighieri",
    country: "Italy",

    title: "The Divine Comedy",
    year: 1315,
  },
  {
    author: "Unknown",
    country: "Sumer and Akkadian Empire",

    title: "The Epic Of Gilgamesh",
    year: -1700,
  },
  {
    author: "Unknown",
    country: "Achaemenid Empire",

    title: "The Book Of Job",
    year: -600,
  },
  {
    author: "Unknown",
    country: "India/Iran/Iraq/Egypt/Tajikistan",

    title: "One Thousand and One Nights",
    year: 1200,
  },
  {
    author: "Unknown",
    country: "Iceland",

    title: "Nj\u00e1l's Saga",
    year: 1350,
  },
  {
    author: "Jane Austen",
    country: "United Kingdom",

    title: "Pride and Prejudice",
    year: 1813,
  },
  {
    author: "Honor\u00e9 de Balzac",
    country: "France",

    title: "Le P\u00e8re Goriot",
    year: 1835,
  },
  {
    author: "Samuel Beckett",
    country: "Republic of Ireland",

    title: "Molloy, Malone Dies, The Unnamable, the trilogy",
    year: 1952,
  },
  {
    author: "Giovanni Boccaccio",
    country: "Italy",

    title: "The Decameron",
    year: 1351,
  },
  {
    author: "Jorge Luis Borges",
    country: "Argentina",

    title: "Ficciones",
    year: 1965,
  },
  {
    author: "Emily Bront\u00eb",
    country: "United Kingdom",

    title: "Wuthering Heights",
    year: 1847,
  },
  {
    author: "Albert Camus",
    country: "Algeria, French Empire",

    title: "The Stranger",
    year: 1942,
  },
  {
    author: "Miguel de Cervantes",
    country: "Spain",

    title: "Don Quijote De La Mancha",
    year: 1610,
  },
];

// console.log(book);

let userbooks = book.filter((bk) => bk.country === "Argentina");
userbooks = book.filter((bk) => bk.year >= 1952);
userbooks = book.filter((bk) => bk.country === "Spain" && bk.year >= 1610);
console.log(userbooks);

const addTwo = (n1, n2) => ({ userName: "deepti" }); // for returning an object we take it in {}.
console.log(addTwo(3, 4)); //it will return totally this { userName: "deepti" }
