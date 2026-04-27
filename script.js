const day = document.querySelector("#day");

const month = document.querySelector("#month");

const year = document.querySelector("#year");

const gender = document.querySelector("#gender");

const button = document.querySelector("#submit-button");
let fullName;
let email;
let message;


button.addEventListener("click",(event) => {
    // prevent form from refreshing the page
    event.preventDefault();
    // retrieve values from the form
     dayValue = document.querySelector("#day").value;
     monthValue = document.querySelector("#month").value;
     yearValue = document.querySelector("#year").value;
     genderValue = document.querySelector("#gender").value;
});
    // validate form inputs
    if (dayValue < 1 || dayValue > 31) {
        alert("Please enter a valid day (1-31).");
        return;
    }
    if (monthValue < 1 || monthValue > 12) {
        alert("Please enter a valid month (1-12).");
        return;
    }
    if (gender === "") {
        alert("Please select a gender");
        return;
    }

    // Extract CC and YY
    let CC = Math.floor(year / 100);
    let YY = year % 100;

    // Formula
    let d = ((4 * CC - 2 * CC - 1) + (5 * YY) + (26 * (month + 1) / 10) + day) % 7;
    d = Math.floor(d);

    // Day names
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let akanName;

    if (gender === "male") {
        akanName = maleNames[d];
    } else {
        akanName = femaleNames[d];
    }

    document.getElementById("result").textContent =
        "You were born on " + days[d] + ". Your Akan name is " + akanName + ".";


