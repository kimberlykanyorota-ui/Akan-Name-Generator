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
function calculate() {
  const input = getUserInput();

  console.log(input);
  // { day: 15, month: 8, year: 1995, gender: "male" }

  // Step 1 — validate
  if (isNaN(input.day) || input.day < 1 || input.day > 31) {
    showError("Day must be between 1 and 31.");
    return;
  }

  if (isNaN(input.month) || input.month < 1 || input.month > 12) {
    showError("Month must be between 1 and 12.");
    return;
  }

  if (isNaN(input.year) || input.year < 1) {
    showError("Please enter a valid year.");
    return;
  }

  if (!input.gender) {
    showError("Please select a gender.");
    return;
  }

  showError(""); // clear errors

  // Step 2 — use the values
  const DD = input.day;
  const MM = input.month;
  const YYYY = input.year;
  const gender = input.gender;

  // ... rest of your calculation logic
}
