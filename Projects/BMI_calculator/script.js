const form = document.querySelector("form");
//this height will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (!height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please giva a valid height ${height}`;
  } else if (!weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please giva a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    console.log(bmi);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
