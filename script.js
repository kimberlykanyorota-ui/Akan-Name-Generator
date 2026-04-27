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
    // validate form inputs
    if (dayValue < 1 || dayValue > 31) {
        alert("Please enter a valid day (1-31).");
        return;
    }
    if (monthValue < 1 || monthValue > 12) {
        alert("Please enter a valid month (1-12).");
        return;
    }

