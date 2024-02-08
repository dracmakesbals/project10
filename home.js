const hamburger = document.querySelector(".ham_menu");
const nav_links = document.querySelector(".nav_links");
const li = document.querySelectorAll(".nav_links li");

hamburger.addEventListener("click", () => {
  nav_links.classList.toggle("open");
  li.forEach((link) => {
    link.classList.toggle("fade");
  });
});

document.getElementById("contact1").onclick = function () {
  window.location.href = "login-page/index.html";
};
