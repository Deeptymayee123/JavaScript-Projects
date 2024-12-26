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

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number!");
  } else if (guess < 1) {
    alert("please enter a number more than 1.");
  } else if (guess > 100) {
    alert("please enter a number less than 100.");
  } else {
    prevGuess.push(guess); // pushing in en empty array.
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${num}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === num) {
    displayMessage(`You guessed it right.`);
    endGame();
  } else if (guess < num) {
    displayMessage(`Number is too low.`);
  } else if (guess > num) {
    displayMessage(`Number is too high.`);
  }
}

// clean up method.
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrhi.innerHTML = `<h2>${message}</h2>`;
  console.log(`${message}`);
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    num = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
