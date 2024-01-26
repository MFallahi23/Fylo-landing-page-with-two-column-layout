/*-----------------------------------*\
  #script.js
\*-----------------------------------*/

/*-----------------------------------*\
  DOM elements
\*-----------------------------------*/
const firstEmail = document.getElementById("email1");
const secondEmail = document.getElementById("email2");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const firstError = document.querySelector(".error");
const secondError = document.querySelector(".errorBottom");

/*-----------------------------------*\
  Functions
\*-----------------------------------*/
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

console.log(validateEmail("m"));
console.log(validateEmail("mhwh@mail.com"));
console.log();
function submit(e, num) {
  e.preventDefault();
  if (num === 1) {
    if (!validateEmail(firstEmail.value)) {
      firstEmail.classList.add("errorInput");
      firstEmail.focus();
      firstError.style.display = "block";
    } else {
      firstEmail.classList.contains("errorInput") &&
        firstEmail.classList.remove("errorInput");

      firstError.style.display === "block"
        ? (firstError.style.display = "none")
        : "";

      firstEmail.value = "";
    }
  } else if (num === 2) {
    if (!validateEmail(secondEmail.value)) {
      secondEmail.classList.add("errorInput");
      secondEmail.focus();
      secondError.style.display = "block";
    } else {
      secondEmail.classList.contains("errorInput") &&
        secondEmail.classList.remove("errorInput");

      secondError.style.display === "block"
        ? (secondError.style.display = "none")
        : "";
      secondEmail.value = "";
    }
  } else {
    console.log("ERROR");
  }
}

/*-----------------------------------*\
  Events
\*-----------------------------------*/

firstForm.addEventListener("submit", (e) => {
  submit(e, 1);
});
secondForm.addEventListener("submit", (e) => {
  submit(e, 2);
});
