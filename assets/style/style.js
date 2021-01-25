const menuItem = document.querySelectorAll(".menu-item");
const menuLinks = document.querySelectorAll(".menu-nav li");
const price = document.querySelectorAll(".price");
// const subtotal = document.querySelectorAll(".subtotal");

// const font choices
const displayFont = "'Damion', cursive";
const headingFont = "'East Sea Dokdo', cursive";
const textFont = "'Amatic SC', cursive";
const body = document.querySelector("body");
body.style.color = light;
body.position = "relative";

// h1s &h2s
const h1s = document.querySelectorAll("h1");
const h2s = document.querySelectorAll("h2");
const h = (hs) => {
  for (let i = 0; i < hs.length; i++) {
    hs[i].style.color = dark;
    hs[i].style.textAlign = "center";
    hs[i].style.fontFamily = displayFont;
  }
};
h(h1s);
h(h2s);

// h3s
const h3s = document.querySelectorAll("h3");
const h4s = document.querySelectorAll("h4");
for (let i = 0; i < h3s.length; i++) {
  h3s[i].style.color = pinkChalk;
  h3s[i].style.fontFamily = headingFont;
}
// h4s
for (let i = 0; i < h4s.length; i++) {
  h4s[i].style.color = greenChalk;
  h4s[i].style.fontFamily = headingFont;
}

// Change nav links
const navLinks = document.querySelectorAll("ul");
const navLink = document.querySelectorAll("ul li");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].style.color = light;
  navLinks[i].style.fontFamily = headingFont;
}
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("mouseover", () => {
    navLink[i].style.color = greenChalk;
  });
  navLink[i].addEventListener("mouseout", () => {
    navLink[i].style.color = light;
  });
}

// menu section head
const menuSectionHead = document.querySelector(".section-head");
const menuSectionHeadFirst = menuSectionHead.firstChild;
menuSectionHeadFirst.style.fontSize = "120%";
menuSectionHeadFirst.style.color = greenChalk;
const menuSectionHeadLast = menuSectionHead.lastChild;
menuSectionHeadLast.style.textDecoration = "underline";
menuSectionHeadLast.style.textDecorationColor = greenChalk;
menuSectionHeadLast.style.color = pinkChalk;

// menu items
// gives menu items there text and border colors
for (i = 0; i < menuItem.length; i++) {
  menuItem[i].style.border = `${light} 4px solid`;
  menuItem[i].style.color = light;
}
const menuPrice=document.querySelectorAll(".price");
for(let i=0; i< menuPrice.length; i++){
  menuPrice[i].style.color=greenChalk;
}
// pizza forms

const sizeDiv = document.querySelectorAll(".size-div");
for (let i = 0; i < sizeDiv.length; i++) {
  const label = sizeDiv[i].lastChild;
  sizeDiv[i].addEventListener("mouseover", () => {
    label.style.color = greenChalk;
  });
  sizeDiv[i].addEventListener("mouseout", () => {
    label.style.color = light;
  });
}

// toppings div
const toppingDiv = document.querySelectorAll(".topping-div div");
for (let i = 0; i < toppingDiv.length; i++) {
  const toppingLabel = toppingDiv[i].lastChild;
  const toppingInput = toppingDiv[i].firstChild;
  if (i % 2 == 0) {
    toppingLabel.style.color = greenChalk;
    toppingInput.style.color = greenChalk;
    toppingInput.style.backgroundColor = greenChalk;
  } else {
    toppingLabel.style.color = pinkChalk;
  }
}

const addToCart = document.querySelectorAll(".addToCart");
// changes add to cart submits to green chalk on mouseover/out
for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("mouseover", () => {
    addToCart[i].style.color = greenChalk;
    addToCart[i].style.borderColor = greenChalk;
  });
  addToCart[i].addEventListener("mouseout", () => {
    addToCart[i].style.color = light;
    addToCart[i].style.borderColor = light;
  });

  addToCart[i].addEventListener("click", () => {
    // changes price color to chalk green
    const priceP = document.querySelectorAll(".checkout-div p");
    for (let i = 1; i < priceP.length - 1; i++) {
      if (i % 2 != 0) {
        priceP[i].style.color = greenChalk;
      }
    };

    // changes button hightlight on mouse over
    const buttons = document.querySelectorAll(".checkout-div button");
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id == "checkout") {
        hoverGreen(buttons[i])
        buttons[i].addEventListener("click", () => {
          checkoutStyleDiv();
        });
      } else {
        hoverPink(buttons[i]);    
      }     
    }
  });
}

// checkout screen
const checkoutStyleDiv = () => {
  const table = document.querySelector(".checkout-div table");
  const caption = document.querySelector("caption");
  const checkoutBtn = document.getElementById("#checkout");
  const tableHeading = table.childNodes[1];
  tableHeading.style.fontSize = "120%";
  const lastTr = tableHeading.lastChild;
  lastTr.style.color = pinkChalk;
  caption.style.color = pinkChalk;
  const removeBtns = document.querySelectorAll(".removeButton");
  for (let i = 0; i < removeBtns.length; i++) {
    hoverPink(removeBtns[i]);
  }
  const cartBtns=document.querySelectorAll(".cart-btn"
  )
  const subtotalTr = document.querySelector(".subtotal");
  subtotalTr.style.color = greenChalk;
  const totalTr = document.querySelector(".totalPrice");
  totalTr.style.color = pinkChalk;
  const addMore=cartBtns[0];
  hoverPink(addMore);
  const next=cartBtns[1];
  next.addEventListener("click", ()=>{
    tipDivStyling();
  })
  hoverGreen(next);
};

// tip div styling
const tipDivStyling=()=>{
  const tipHeader=document.querySelector(".tipHeader");
  tipHeader.style.color=pinkChalk;
  tipHeader.style.fontFamily=headingFont;
  tipHeader.fontSize="120%";
// why does this turn pink only after click
  const TippedAmount=document.getElementById("#tippedAmount");
  TippedAmount.style.color=pinkChalk;

  const tipButtons=document.querySelectorAll(".tip-div button");
  for(let i=0;i<tipButtons.length;i++){
    hoverGreen(tipButtons[i])
  }
};


// hover pink
const hoverPink = (element) => {
  element.addEventListener("mouseover", () => {
    element.style.color = pinkChalk;
    element.style.borderColor = pinkChalk;
  });
  element.addEventListener("mouseout", () => {
    element.style.color = light;
    element.style.borderColor = light;
  });
};

// hover green
const hoverGreen = (element) => {
  element.addEventListener("mouseover", () => {
    element.style.color = greenChalk;
    element.style.borderColor = greenChalk;
  });
  element.addEventListener("mouseout", () => {
    element.style.color = light;
    element.style.borderColor = light;
  });
};
