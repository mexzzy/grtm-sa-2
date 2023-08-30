const toggle = document.getElementById("toggle");
const navbar = document.getElementById("navbar");

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
}
function close() {
  isToggle = true;
  navbar.style.display = "none";
}
document.querySelector(".infoWrapper").addEventListener("click", () => {
  close();
});
