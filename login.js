const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");
  const storedUserData = localStorage.getItem(username);
  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    if (userData.password === password) {
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

// const eyeToggle = document.getElementById("eyeToggle");
// const hideToggle = document.getElementById("hideToggle");
// const showPassword = document.getElementById("showPassword");

// eyeToggle.addEventListener("click", () => {
//   eyeMainToggle();
//   console.log("clickeddd");
// });
// let isEye = true;
// function eyeMainToggle() {
//   if (isEye) {
//     showPassword();
//   } else {
//     hidePassword();
//   }
// }
function showPassword() {
  const password = document.getElementById("password").value;
  password.type = Text;
  isEye = false;
}
function hidePassword() {
  const password = document.getElementById("password").value;
  password.type = password;
  isEye = true;
}
