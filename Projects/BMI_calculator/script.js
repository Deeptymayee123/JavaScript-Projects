const form = document.querySelector("form");
//this height will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if (!height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please giva a valid height ${height}`;
  } else if (!weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please giva a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    console.log(bmi);
    // results.innerHTML = `<span>${bmi}</span>`;

    if (bmi <= 18.8) {
      results.textContent = `${bmi} :under weight = less than 18.8`;
    } else if (bmi == 24.9 || bmi == 18.6) {
      results.textContent = `${bmi} :under weight = less than 24.9`;
    } else {
      results.textContent = `${bmi} :under weight = less than 18.8`;
    }
  }
});
