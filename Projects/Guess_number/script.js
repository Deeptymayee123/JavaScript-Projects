// const num = Math.floor(Math.random() * (100 - 1 + 1) + 1);
// console.log(num);
// console.log(typeof num);

const num = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const lowOrhi = document.querySelector(".lowOrhi");
const startOver = document.querySelector(".resultPass");

const p = document.createElement("p");

let preGuess = [];
let numGuess = 1;

let playGame = true;

function validateGuess(guess) {
  //
}

function checkGuess(guess) {}
