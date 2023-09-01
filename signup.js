const signUpForm = document.getElementById("sign-up-form");

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const fullName = document.getElementById("fullName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const error = document.getElementById("error");
  
  if (password != confirmPassword) {
    error.innerHTML = "Confirm password";
    error.style.color = "#830606";
    return
  }

  const existingUser = localStorage.getItem(username);
  if (existingUser) {
    error.innerHTML = "User already exist. Please login";
    error.style.color = "#836806";
    return;
  }
  const userData = { username, fullName, email, phoneNumber, password };
  localStorage.setItem(username, JSON.stringify(userData));
  error.innerHTML = "Signup Successful ✅. Login";
  error.style.color = "#068353";
});
