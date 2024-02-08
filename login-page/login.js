const hamburger = document.querySelector(".ham_menu");
const nav_links = document.querySelector(".nav_links");
const li = document.querySelectorAll(".nav_links li");

hamburger.addEventListener("click", () => {
  nav_links.classList.toggle("open");
  li.forEach((link) => {
    link.classList.toggle("fade");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login");
  const signupForm = document.querySelector(".signup");
  const loginLink = document.getElementById("loginLink");

  loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login");
  const signupForm = document.querySelector(".signup");
  const loginLink = document.getElementById("signupLink");

  loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    signupForm.style.display = "block";
    loginForm.style.display = "none";
  });
});
