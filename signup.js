const signUpForm = document.getElementById("sign-up-form");

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const fullName = document.getElementById("fullName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const passwordId = document.getElementById("passwordId").value;
  const email = document.getElementById("email").value;
  const error = document.getElementById("error");
  //
  const signUpWrapper = document.getElementById("signUpWrapper");
  const loginPopup = document.getElementById("loginPopup");
  const closePopUp = document.getElementById("closePopUp");

  loginPopup.addEventListener("click", () => {
    document.location.href = "login.html";
  });
  closePopUp.addEventListener("click", () => {
    signUpWrapper.style.display = "none";
  });

  if (passwordId != confirmPassword) {
    error.innerHTML = "Please Confirm password";
    error.style.color = "#830606";
    return;
  }

  const existingUser = localStorage.getItem(username);
  if (existingUser) {
    error.innerHTML = "User already exist. Please login";
    error.style.color = "#836806";
    return;
  }
  const userData = { username, fullName, email, phoneNumber, passwordId };
  localStorage.setItem(username, JSON.stringify(userData));
  //
  signUpWrapper.style.display = "flex";
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
const eyeToggle2 = document.getElementById("eyeToggle2");
const hidePassword2 = document.getElementById("hidePassword2");
const showPassword2 = document.getElementById("showPassword2");

eyeToggle2.addEventListener("click", () => {
  isEyeToggled2()
});
let isToggled2 = true;
function isEyeToggled2() {
  if (isToggled2) {
    confirmPassword.type = "text";
    isToggled2 = false
    showPassword2.style.display = "none";
    hidePassword2.style.display = "block";
  } else {
    confirmPassword.type = "password";
    isToggled2 = true 
    showPassword2.style.display = "block";
    hidePassword2.style.display = "none";
  }
}