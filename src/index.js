function specialButtonFunction() {
  alert("Hooray!");
}
let specialButton = document.querySelector("#special-button");
specialButton.addEventListener("click", specialButtonFunction);

function passwordInputFunction(event) {
  event.preventDefault();
  let password = document.querySelector("#password-input").innerHTML;
  console.log(password);
}
let passwordForm = document.querySelector("#password-form");
passwordForm.addEventListener("submit", passwordInputFunction);

// console.log(document.querySelector("#email-input").innerHTML);
function emailInputFunction(event) {
  event.preventDefault();
  let email = document.querySelector("#email-input").innerHTML;
  let username = document.querySelector("#username-input").innerHTML;
  alert(email);
  alert(username);
}

let emailInput = document.querySelector("#signup-form");
emailInput.addEventListener("submit", emailInputFunction);
