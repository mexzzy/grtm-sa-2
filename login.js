const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const passwordId = document.getElementById("passwordId").value;
  const error = document.getElementById("error");
  const storedUserData = localStorage.getItem(username);
  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    if (userData.passwordId === passwordId) {
      error.innerHTML = "login successful";
      error.style.color = "#068353";
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("loggedInUsername", username);
      document.location.href = "africash-dashboard.html";
    } else {
      error.innerHTML = "incorrect credentials";
      error.style.color = "#830606";
    }
  } else {
    error.innerHTML = "User not found. Please Sign up";
    error.style.color = "#830606";
  }
});

const eyeToggle = document.getElementById("eyeToggle");
const hidePassword = document.getElementById("hidePassword");
const showPassword = document.getElementById("showPassword");

eyeToggle.addEventListener("click", () => {
  isEyeToggled()
});
let isToggled = true;
function isEyeToggled() {
  if (isToggled) {
    passwordId.type = "text";
    isToggled = false
    showPassword.style.display = "none";
    hidePassword.style.display = "block";
  } else {
    passwordId.type = "password";
    isToggled = true 
    showPassword.style.display = "block";
    hidePassword.style.display = "none";
  }
}
