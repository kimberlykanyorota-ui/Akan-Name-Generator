










const h1 = document.querySelector("h1");

const headerParagraph = document.querySelector("#header-p");

const button = document.querySelector("#submit-button");
let birthDate;
let gender;



button.addEventListener("click",(event) => {
    // prevent form from refreshing the page
    event.preventDefault();
    // retrieve values from the form
     birthDate = document.querySelector("#birthday").value;
     gender = document.querySelector("#gender").value;

     h1.textContent = "Akan Name Generator";
     headerParagraph.textContent = "Find your Akan name";
});