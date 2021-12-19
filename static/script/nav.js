// File: nav.js - handler for navbar
// Author: itsOiK
// Date: 16/12-21

const navTab = document.getElementById("nav-tab"),
    navTabContent = document.getElementById("nav-tab-content"),
    navTabButton = document.getElementById("nav-tab-button");

navTabButton.addEventListener("click", () => toggleNavBarVisibility());

function toggleNavBarVisibility() {
    const toggleNav = document.getElementById("nav-tab-toggle");
    toggleNav.checked = !toggleNav.checked;
    if (toggleNav.checked) {
        navTabButton.innerHTML = ">>";
        navTabContent.classList.add("hide");
        navTab.classList.replace("nav-open", "nav-closed");
    } else {
        navTabButton.innerHTML = "<<";
        navTabContent.classList.remove("hide");
        navTab.classList.replace("nav-closed", "nav-open");
    }
}
