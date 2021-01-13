const navLinks = document.querySelectorAll("ul");
const menuItem = document.querySelectorAll(".menu-item");

// color pallet

const light = "#F8FAF0";
const dark = "#12130F";
const greenHight = "#40750A";
const sectionBackground = "#534D56";

// const font choices
const displayFont = `'East Sea Dokdo', cursive;'`;
const headingFont = `'Damion', cursive;`;
const textFont = `'Amatic SC', cursive;`;

// Change nav links
for (i = 0; i < navLinks.length; i++) {
  navLinks[i].style.color = light;
  navLinks[i].style.backgroundColor = dark;
  navLinks[i].style.fontSize = "170%";
}

// menu items
for (i = 0; i < menuItem.length; i++) {
  menuItem[i].style.border = `${light} 4px solid`;
  menuItem[i].style.color = light;
}

// 