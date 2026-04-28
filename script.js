// const day = document.querySelector("#day");

// const month = document.querySelector("#month");

// const year = document.querySelector("#year");

// const gender = document.querySelector("#gender");

// const button = document.querySelector("#submit-button");

const result = document.querySelector("#result");

let day;
let month;
let year;
let gender;

button.addEventListener("click", (event) => {
  // prevent form from refreshing the page
  event.preventDefault();
  // retrieve values from the form
  const dayValue = document.querySelector("#day").value;
  const monthValue = document.querySelector("#month").value;
  const yearValue = document.querySelector("#year").value;
  const genderValue = document.querySelector("#gender").value;

  // here 31-38

  let CC = firstTwoDigits(yearValue);
  let YY = lastTwoDigits(yearValue);
  let MM = monthValue;
  let DD = dayValue;

  let dayOfWeek = calculateDayOfWeek(CC, YY, MM, DD);

  let akanName = getAkanName(dayOfWeek, genderValue);
  result.textContent = akanName;
});



function firstTwoDigits(year) {
  return Math.floor(year / 100);
}

function lastTwoDigits(year) {
  return year % 100;
}

// hoisting

function calculateDayOfWeek(CC, YY, MM, DD) {
  let dayOfWeek =
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
    // switch here
    
  return ;
}

function getAkanName(dayOfWeek, gender) {
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  if (gender === "male") {
    return maleNames[dayOfWeek];
  } else {
    return femaleNames[dayOfWeek];
  }
}
