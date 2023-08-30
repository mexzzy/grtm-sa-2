const toggle = document.getElementById("toggle");
const navbar = document.getElementById("navbar");
const openIcon = document.getElementById("openIcon")
const closeIcon = document.getElementById("closeIcon")
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
  closeIcon.style.display = "block"
  openIcon.style.display = "none"
}
function close() {
  isToggle = true;
  navbar.style.display = "none";
  closeIcon.style.display = "none"
  openIcon.style.display = "block"
}
document.querySelector(".infoWrapper").addEventListener("click", () => {
  close();
});
