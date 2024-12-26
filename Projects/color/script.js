// generate random color by math.random

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#"; // color starts from # like #fff.
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor);
let interval;
const startChangingColor = function () {
  if (!interval) {
    interval = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
    console.log(randomColor);
  }
};

const stopChangingColor = function () {
  clearInterval(interval);
  interval = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
