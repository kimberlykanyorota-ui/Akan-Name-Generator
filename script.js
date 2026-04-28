// filepath: Akan-Name-Generator/script.js
const button = document.querySelector("#submit-button");
const result = document.querySelector("#result");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const dayValue = Number(document.querySelector("#day").value);
  const monthValue = Number(document.querySelector("#month").value);
  const yearValue = Number(document.querySelector("#year").value);
  const genderValue = document.querySelector("#gender").value;

  let CC = firstTwoDigits(yearValue);
  let YY = lastTwoDigits(yearValue);
  let MM = monthValue;
  let DD = dayValue;

  let dayOfWeek = calculateDayOfWeek(CC, YY, MM, DD);
  let akanName = getAkanName(dayOfWeek, genderValue);
console.log(akanName);
  result.textContent = `Your Akan name is: ${akanName}`;
});

function firstTwoDigits(year) {
  return Math.floor(year / 100);
}

function lastTwoDigits(year) {
  return year % 100;
}

function calculateDayOfWeek(CC, YY, MM, DD) {
  let dayOfWeek =
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
    console.log(dayOfWeek);
    switch (Math.floor(dayOfWeek)) {
      case 0:
        return dayOfWeek = 0; // Sunday
        break;
      case 1:
        return dayOfWeek = 1; // Monday
        break;
      case 2:
        return dayOfWeek = 2; // Tuesday
        break;
      case 3:
        return dayOfWeek = 3; // Wednesday
        break;
      case 4:
        return dayOfWeek = 4; // Thursday
        break;
      case 5:
        return dayOfWeek = 5; // Friday
        break;
      case 6:
        return dayOfWeek = 6; // Saturday
        break;
      default:
        return "Invalid input";
    }   
  return Math.floor(dayOfWeek);
}

function getAkanName(dayOfWeek, genderValue) {
    console.log(dayOfWeek, genderValue);
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

  if (genderValue === "male") {
    return maleNames[dayOfWeek];
  } else {
    return femaleNames[dayOfWeek];
  }
}
