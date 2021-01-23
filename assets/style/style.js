const navLinks = document.querySelectorAll("ul");
const menuLinks = document.querySelectorAll(".menu-nav li");
const menuItem = document.querySelectorAll(".menu-item");
const price = document.querySelectorAll(".price");
// const subtotal = document.querySelectorAll(".subtotal");

// color pallet

// const light = "#F8FAF0";
// const dark = "#12130F";
// const greenHight = "#40750A";
// const sectionBackground = "#534D56";
const priceColor = "#F786AA";
// const greenChalk = "#99F7AB";

// const font choices
const headingFont = "'East Sea Dokdo', cursive'";
const displayFont = "'Damion', cursive";
const textFont = "'Amatic SC', cursive";

// Change nav links
for (i = 0; i < navLinks.length; i++) {
  navLinks[i].style.color = light;
  navLinks[i].style.fontFamily = headingFont;
}

// menu items
for (i = 0; i < menuItem.length; i++) {
  menuItem[i].style.border = `${light} 4px solid`;
  menuItem[i].style.color = light;
}

// // price color
// for (i = 0; i < price.length; i++) {
//   price[i].style.color = priceColor;
// }
// for (i = 0; i < subtotal.length; i++) {
//   subtotal[i].style.color = greenChalk;
// }

