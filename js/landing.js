const signInButton = document.getElementById("signInButton");
const container = document.querySelector(".forms-container");
signInButton.addEventListener("click", signInForm);

function signInForm() {
  signInButton.style.display = "none";
  container.style.display = "block";
}

