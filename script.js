
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
function getAkanName() {
    const names = {
      male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
      female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
    };
}

 

const h1 = document.querySelector("h1");

const headerParagraph = document.querySelector("#header-p");

const button = document.querySelector("#submit-button");

let birthDate;
let gender;

button.addEventListener("click", (event) => {
  // prevent form from refreshing the page
  event.preventDefault();
  // retrieve values from the form
  birthDate = document.querySelector("#birthday").value;
  gender = document.querySelector("#gender").value;

  //  to see what will change in the console
  h1.textContent = "Akan Name Generator";
  headerParagraph.textContent = "Find your Akan name";
});
