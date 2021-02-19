"use strict";

function calculateTemp() {
  const inputValue = document.getElementById("temp").value;
  const inputOptions = document.getElementById("temp_diff");
  const selectedInputOptions =
    inputOptions.options[inputOptions.selectedIndex].value;
  console.log(selectedInputOptions);

  const celToFah = (inputVal) => Math.round((inputVal / 5) * 9 + 32);
  const fahToCel = (inputVal) => Math.round(((inputVal - 32) * 5) / 9);

  //result container
  const result = document.getElementById("resultContainer");
  (selectedInputOptions === "cel" &&
    (result.innerHTML = `${celToFah(inputValue)}°Fahrenheit`)) ||
    (result.innerHTML = `${fahToCel(inputValue)}°Celsius`);
}
