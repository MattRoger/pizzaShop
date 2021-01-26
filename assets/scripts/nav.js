const navButtons = document.querySelectorAll("li.nav");
const header = document.querySelector("header");
const menuSection = document.getElementById("menu");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");
const cateringSection = document.getElementById("catering");
const menuNav = document.querySelector(".menu-nav");
const links = document.querySelectorAll(".menu-nav li");

menuNav.style.display = "none";

for (i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener("click", (e) => {
    header.style.display = "none";
    switch (e.target.id) {
      case "menu-btn":
        menuSection.style.display = "block";
        menuNav.style.display = "flex";
        menuNav.style.backgroundColor = "rgba(255, 255, 255, 0)";
        menuNav.style.width = "99%";
        menuNav.style.margin = "auto";
        for (let i = 0; i < links.length; i++) {
          links[i].style.border = "4px solid #f8faf0";
          links[i].style.width = "100%";
          links[i].style.textAlign = "center";
        }
        aboutSection.style.display = "none";
        contactSection.style.display = "none";
        cateringSection.style.display = "none";
        break;
      case "about-btn":
        aboutSection.style.display = "block";
        menuSection.style.display = "none";
        contactSection.style.display = "none";
        cateringSection.style.display = "none";
        console.log("about");
        break;
      case "contact-btn":
        contactSection.style.display = "block";
        menuSection.style.display = "none";
        aboutSection.style.display = "none";
        cateringSection.style.display = "none";
        console.log("contact");
        break;
      case "catering-btn":
        cateringSection.style.display = "block";
        menuSection.style.display = "none";
        aboutSection.style.display = "none";
        contactSection.style.display = "none";
        console.log("contact");
        console.log("catering");
        break;
    }
  });
}
