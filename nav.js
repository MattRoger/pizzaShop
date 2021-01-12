const navButtons = document.querySelectorAll("button.nav");
const header = document.querySelector("header");
const menuSection = document.getElementById("menu");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");
const cateringSection = document.getElementById("catering");

for (i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener("click", (e) => {
    header.style.display = "none";
    switch (e.target.id) {
      case "menu-btn":
        console.log("menu");
        menuSection.style.display = "block";
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
