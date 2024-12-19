const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros); //array inside an array
console.log(marvel_heros);

console.log(marvel_heros[3][2]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // add in a single array.

const all_newHeros = [...marvel_heros, ...dc_heros]; // spread operator(...)
console.log(all_newHeros);

const another_arr = [1, [[2, 3], 4, 5], [6, 7]];
const usable_another_arr = another_arr.flat(Infinity); //spreadout all deep level elements

console.log(usable_another_arr);

console.log(Array.isArray("deepti")); // checking that is it an array
console.log(Array.from("deepti")); // converting into an array
console.log(Array.from({ name: "deepti" })); //get confused that taking key as array of value

let score1 = 100;
let score2 = 200;
let score3 = 30;

console.log(Array.of(score1, score2, score3)); //returns new aray from set of elements ( can check hovering on of in vs code)
