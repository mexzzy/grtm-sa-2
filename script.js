const toggle = document.getElementById("toggle");
const navbar = document.getElementById("navbar");
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const getStarted = document.getElementById("getStarted");
toggle.addEventListener("click", function () {
  toggleCheck();
});
let isToggle = true;
function toggleCheck() {
  if (isToggle) {
    open();
  } else {
    close();
  }
}
function open() {
  isToggle = false;
  navbar.style.display = "flex";
  closeIcon.style.display = "block";
  openIcon.style.display = "none";
}
function close() {
  isToggle = true;
  navbar.style.display = "none";
  closeIcon.style.display = "none";
  openIcon.style.display = "block";
}
document.querySelector(".infoWrapper").addEventListener("click", () => {
  close();
});
loginBtn.addEventListener("click", function() {
  document.location.href = "login.html";
});
signupBtn.addEventListener("click", () => {
  document.location.href = "signup.html";
});
getStarted.addEventListener("click", () => {
  document.location.href = "signup.html";
});
