

const button = document.querySelector("#submit-button");
const result = document.querySelector("#result");

button.addEventListener("click", (event) => {
  // prevent form from refreshing the page
  event.preventDefault();
  // retrieve values from the form
  const dayValue = Number(document.querySelector("#day").value);
  const monthValue = Number(document.querySelector("#month").value);
  const yearValue = Number(document.querySelector("#year").value);
  const genderValue = document.querySelector("#gender").value;

  // --- Validate first ---
  // Check if the date the user entered is valid before doing anything else
  const validationError = validateDate(dayValue, monthValue, yearValue);
  if (validationError) {
    result.textContent = `Error`;
    result.style.color = "black";
    return;
  }

  // result.style.color = ""; // reset color on success

  // Zeller's formula treats Jan & Feb as months 13 & 14 of the previous year
  let MM = monthValue;
  let YY_full = yearValue;

  if (MM <= 2) {
    MM += 12; // shift Jan(1) → 13, Feb(2) → 14
    YY_full -= 1; // and go back one year
  }

  let CC = firstTwoDigits(YY_full);
  let YY = lastTwoDigits(YY_full);

  // Calculate which day of the week the person was born on
  let dayOfWeek = calculateDayOfWeek(CC, YY, MM, dayValue);
  // Use the day of the week and gender to find the Akan name
  let akanName = getAkanName(dayOfWeek, genderValue);

  result.textContent = `Your Akan name is: ${akanName} (born on a ${dayOfWeek})`;
});

// --- Validation ---

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInMonth(month, year) {
  // Index matches month number:
  const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // Override February's days if it's a leap year
  if (month === 2 && isLeapYear(year)) return 29;
  return days[month];
}

function validateDate(day, month, year) {
  if (!year || year < 1) {
    return "Please enter a valid year.";
  }

  if (!month || month < 1 || month > 12) {
    return `"${month}" is not a valid month.`;
  }

  const maxDays = getDaysInMonth(month, year);

  if (!day || day < 1 || day > maxDays) {
    const leapNote =
      month === 2
        ? ` (${year} is ${isLeapYear(year) ? "a leap year — max 29 days" : "not a leap year — max 28 days"})`
        : "";
    return `"${day}" is not a valid day for month ${month}${leapNote}. Max days: ${maxDays}.`;
  }

  return null; // no error
}



function firstTwoDigits(year) {
  return Math.floor(year / 100);
}

function lastTwoDigits(year) {
  return year % 100;
}

// --- Zeller's Formula  ---

function calculateDayOfWeek(CC, YY, MM, DD) {
  const part1 = Math.floor(CC / 4) - 2 * CC - 1;
  const part2 = Math.floor((5 * YY) / 4);
  const part3 = Math.floor((26 * (MM + 1)) / 10);
  const sum = part1 + part2 + part3 + DD;

  const dayIndex = ((sum % 7) + 7) % 7;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[Math.floor(dayIndex)] ?? "Invalid input";
}

// --- Akan Name Lookup ---

function getAkanName(dayOfWeek, genderValue) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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

  const index = days.indexOf(dayOfWeek);
  if (index === -1) return "Unknown";

  return genderValue === "male" ? maleNames[index] : femaleNames[index];
}