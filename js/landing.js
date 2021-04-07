const signInButton = document.getElementById("signInButton");
const container = document.querySelector(".forms-container");
signInButton.addEventListener("click", signInForm);

const signUpButton = document.getElementById("signUpButton");
const signUp = document.querySelector(".form-group");
signUpButton.addEventListener("click", signUpForm);

function signInForm() {
  signInButton.style.display = "none";
  container.style.display = "block";
}

function signUpForm() {
  signUpButton.style.display = "none";
  container.style.display = "none";
  signUp.style.display = "block";
}

// if (window.localStorage) {
//   console.log("supported");
// } else {
//   console.log("not supported");
// }
const memberSignUp = (event) => {
  let formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("userEmail").value,
    password: document.getElementById("userPassword").value,
  };
  localStorage.setItem("formData", JSON.stringify(formData));
  console.log(localStorage.getItem("formData"));
  event.preventDefault();
};

function clearForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("userEmail").value = "";
  document.getElementById("userPassword").value = "";
}

function memberSignIn() {
  if (userEmail.value == memberEmail && userPassword.value == memberPassword) {
    alert("you're logged in");
  } else {
    alert("error");
  }
}
