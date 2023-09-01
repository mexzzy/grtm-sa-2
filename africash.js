const homeBtn = document.getElementById("homeBtn");
const walletBtn = document.getElementById("walletBtn");
const walletBtnAdd = document.getElementById("walletBtnAdd");
const walletBtnAdd2 = document.getElementById("walletBtnAdd2");
const savingsBtn = document.getElementById("savingsBtn");
const closeProfilePage = document.getElementById("closeProfilePage");
const openProfilePage = document.getElementById("openProfilePage");
const openProfilePage2 = document.getElementById("openProfilePage2");
//
const homePage = document.getElementById("homePage");
const walletPage = document.getElementById("walletPage");
const savingsPage = document.getElementById("savingsPage");
const profilePage = document.getElementById("profilePage");
//
const pageName = document.getElementById("pageName");
//
const mainBalanceAmount = document.getElementById("mainBalance");
const toggleBalance = document.getElementById("toggleBalance");
const hideBalance = document.getElementById("hideBalance");
const showBalance = document.getElementById("showBalance");
//
const usernameDisplay = document.getElementById("username");
const username2 = document.getElementById("username2");
const email = document.getElementById("email");
const fullName = document.getElementById("fullName");
const fullName2 = document.getElementById("fullName2");
const fullName3 = document.getElementById("fullName3");
const fullName4 = document.getElementById("fullName4");
const nameFL = document.getElementById("nameFL");
const phoneNumber = document.getElementById("phoneNumber");
const logout = document.getElementById("logout");
const logoutProfile = document.getElementById("logoutProfile");
const dashboardCover = document.getElementById("dashboardCover");
//
const isLoggedIn = localStorage.getItem("loggedIn");

if (!isLoggedIn) {
  alert("You must be logged in to access this page.");
  window.location.href = "login.html";
} else {
  const username = localStorage.getItem("loggedInUsername");
  const userData = JSON.parse(localStorage.getItem(username));
  const storedUserData = localStorage.getItem(username);
  const userStoredData = JSON.parse(storedUserData);

  usernameDisplay.textContent = username;
  username2.textContent = username;
  email.textContent = userData.email;
  fullName.textContent = userStoredData.fullName;
  fullName2.textContent = userStoredData.fullName;
  fullName3.textContent = userStoredData.fullName;
  fullName4.textContent = userStoredData.fullName;
  phoneNumber.textContent = userStoredData.phoneNumber;
  nameFL.textContent = userStoredData.fullName.charAt(0);

  logout.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("loggedInUsername");

    window.location.href = "login.html";
  });
  logoutProfile.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("loggedInUsername");

    window.location.href = "login.html";
  });
}

homeBtn.addEventListener("click", () => {
  homePage.style.display = "block";
  walletPage.style.display = "none";
  savingsPage.style.display = "none";
  pageName.innerHTML = "dashboard";
  homeBtn.style.background = "#06835357";
  walletBtn.style.background = "transparent";
  savingsBtn.style.background = "transparent";
});

walletBtn.addEventListener("click", () => {
  homePage.style.display = "none";
  walletPage.style.display = "block";
  savingsPage.style.display = "none";
  pageName.innerHTML = "wallet";
  homeBtn.style.background = "transparent";
  walletBtn.style.background = "#06835357";
  savingsBtn.style.background = "transparent";
});

walletBtnAdd.addEventListener("click", () => {
  homePage.style.display = "none";
  walletPage.style.display = "block";
  savingsPage.style.display = "none";
  pageName.innerHTML = "wallet";
  homeBtn.style.background = "transparent";
  walletBtn.style.background = "#06835357";
  savingsBtn.style.background = "transparent";
});
walletBtnAdd2.addEventListener("click", () => {
  homePage.style.display = "none";
  walletPage.style.display = "block";
  savingsPage.style.display = "none";
  pageName.innerHTML = "wallet";
  homeBtn.style.background = "transparent";
  walletBtn.style.background = "#06835357";
  savingsBtn.style.background = "transparent";
});
savingsBtn.addEventListener("click", () => {
  homePage.style.display = "none";
  walletPage.style.display = "none";
  savingsPage.style.display = "block";
  pageName.innerHTML = "savings";
  homeBtn.style.background = "transparent";
  walletBtn.style.background = "transparent";
  savingsBtn.style.background = "#06835357";
});

closeProfilePage.addEventListener("click", () => {
  profilePage.style.display = "none";
});
openProfilePage.addEventListener("click", () => {
  profilePage.style.display = "block";
});
openProfilePage2.addEventListener("click", () => {
  profilePage.style.display = "block";
});

toggleBalance.addEventListener("click", () => {
  mainBalance();
});
let isBalance = true;
function mainBalance() {
  if (isBalance) {
    hideBalanceToggle();
  } else {
    showBalanceToggle();
  }
}
function hideBalanceToggle() {
  isBalance = false;
  showBalance.style.display = "block";
  hideBalance.style.display = "none";
  mainBalanceAmount.innerHTML = "****";
}
function showBalanceToggle() {
  isBalance = true;
  showBalance.style.display = "none";
  hideBalance.style.display = "block";
  mainBalanceAmount.innerHTML = "25,600.40";
}
