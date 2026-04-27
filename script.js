// Retrieve user input
function getUserInput() {
  const day = document.querySelector("#dd").value;
  const month = document.querySelector("#mm").value;
  const year = document.querySelector("#yy").value;
  const gender = selectedGender; // set by your gender button clicks

  return {
    day: parseInt(day),
    month: parseInt(month),
    year: parseInt(year),
    gender: gender,
  };
}
