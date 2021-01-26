const menuLinks = document.querySelectorAll(".menu-nav li");
const price = document.querySelectorAll(".price");
// const subtotal = document.querySelectorAll(".subtotal");

// const font choices
const displayFont = "'Damion', cursive";
const headingFont = "'East Sea Dokdo', cursive";
const textFont = "'Amatic SC', cursive";

// sets body styles
const body = document.querySelector("body");
body.style.color = light;
body.style.position = "relative";
body.style.fontFamily = textFont;
body.style.color = light;

// h1s &h2s
const h1s = document.querySelectorAll("h1");
const h2s = document.querySelectorAll("h2");
/**
 * 
 * @param {string} hs -what element the function is applied to
 */
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

// buttons and inputs
const allButtons = document.querySelectorAll("button");
const inputSubmits = document.querySelectorAll("input[type='submit']");
/**
 * 
 * @param {array} buttonInput -targets button elements
 */
const buttonInputStyle = (buttonInput) => {
  for (let i = 0; i < buttonInput.length; i++) {
    buttonInput[i].style.fontFamily = headingFont;
    buttonInput[i].style.backgroundColor = "#ffffff00";
    buttonInput[i].style.borderColor = light;
    buttonInput[i].style.color = light;
  }
};
buttonInputStyle(allButtons);
buttonInputStyle(inputSubmits);

// Change nav links
const navLinks = document.querySelectorAll("ul");
const navLink = document.querySelectorAll("ul li");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].style.color = light;
  navLinks[i].style.fontFamily = headingFont;
  navLinks[i].style.backgroundColor = dark;

}
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("mouseover", () => {
    navLink[i].style.color = greenChalk;
  });
  navLink[i].addEventListener("mouseout", () => {
    navLink[i].style.color = light;
  });
}

// section heads
const sectionHead = document.querySelectorAll(".section-head");
for(let i=0; i <sectionHead.length;i++){
  sectionHead[i].style.textAlign="center";
  const sectionHeadFirst= sectionHead[i].firstChild;
  sectionHeadFirst.style.fontSize = "120%";
  sectionHeadFirst.style.color = greenChalk;
  const sectionHeadLast = sectionHead[i].lastChild;
  sectionHeadLast.style.textDecoration = "underline";
  sectionHeadLast.style.textDecorationColor = greenChalk;
  sectionHeadLast.style.color = pinkChalk;

}

// menu items
// gives menu items there text and border colors
const menuItem = document.querySelectorAll(".menu-item");
for (i = 0; i < menuItem.length; i++) {
  menuItem[i].style.border = `${light} 4px solid`;
  menuItem[i].style.color = light;
  
}
const menuPrice = document.querySelectorAll(".price");
for (let i = 0; i < menuPrice.length; i++) {
  menuPrice[i].style.color = greenChalk;
}

// pizza forms
// size div
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

// changes add to cart submits to green chalk on mouseover/out
const addToCart = document.querySelectorAll(".addToCart");
for (let i = 0; i < addToCart.length; i++) {
  buttonInputStyle(addToCart);
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
    }

    // changes button highlight on mouse over
    const checkoutButtons = document.querySelectorAll(".checkout-div button");
    buttonInputStyle(checkoutButtons);
    for (let i = 0; i < checkoutButtons.length; i++) {
      if (checkoutButtons[i].id == "checkout") {
        hoverGreen(checkoutButtons[i]);
        checkoutButtons[i].addEventListener("click", () => {
          checkoutStyleDiv();
        });
      } else {
        hoverPink(checkoutButtons[i]);
      }
    }
    // shopping cart icon
    const cartIcon=document.querySelector(".fa-shopping-cart");
    cartIcon.addEventListener("click",()=>{
      checkoutStyleDiv();
    })
  });
}

// checkout screen
const checkoutStyleDiv = () => {
  const table = document.querySelector(".checkout-div table");
  const caption = document.querySelector("caption");
  const tableHeading = table.childNodes[1];
  tableHeading.style.fontSize = "120%";
  const lastTr = tableHeading.lastChild;
  lastTr.style.color = pinkChalk;
  caption.style.color = pinkChalk;
  caption.style.fontFamily = headingFont;
  const removeButtons = document.querySelectorAll(".removeButton");
  buttonInputStyle(removeButtons);
  for (let i = 0; i < removeButtons.length; i++) {
    hoverPink(removeButtons[i]);
  }

  const cartButtons = document.querySelectorAll(".cart-btn");
  buttonInputStyle(cartButtons);

  // targets subtotal class
  const subtotalTr = document.querySelector(".subtotal");
  subtotalTr.style.color = greenChalk;
  const totalTr = document.querySelector(".totalPrice");
  totalTr.style.color = pinkChalk;
  const addMore = cartButtons[0];
  hoverPink(addMore);
  const next = cartButtons[1];
  next.addEventListener("click", () => {
    tipDivStyling();
  });
  hoverGreen(next);
};

// tip div styling
const tipDivStyling = () => {
  const tipHeader = document.querySelector(".tipHeader");
  tipHeader.style.color = pinkChalk;
  tipHeader.style.fontFamily = headingFont;
  tipHeader.fontSize = "120%";
  tipHeader.style.textAlign="center";
  const tipDiv = document.querySelector(".tip-div");
  addBorder(tipDiv);
  tipDiv.style.margin="auto";
  const tipButtonDiv=document.querySelector(".tipBtnDiv");
  const CustomButtonDiv=document.querySelector(".custTipDiv");
  tipButtonDiv.style.width="90%";
  tipButtonDiv.style.display="flex";  
  tipButtonDiv.style.justifyContent="space-between";  
  tipButtonDiv.style.margin="auto";  
  CustomButtonDiv.style.width="90%";
  CustomButtonDiv.style.display="flex";  
  CustomButtonDiv.style.justifyContent="space-between";  
  CustomButtonDiv.style.margin="auto";  
  const tipButtons = document.querySelectorAll(".tip-div button");
  buttonInputStyle(tipButtons);
  const tippedAmount = document.getElementById("tippedAmount");
  console.log(tippedAmount);
  tippedAmount.style.color = pinkChalk;
  tippedAmount.style.textAlign="center";
  for (let i = 0; i < tipButtons.length; i++) {
    hoverGreen(tipButtons[i]);
  }
  const nextButton = document.querySelector(".next");
  nextButton.style.width = "80%";
  nextButton.style.display = "block";
  nextButton.style.margin = "auto";
  nextButton.style.marginBottom = "1rem";

  nextButton.addEventListener("click", () => {
    customerInfoDiv();
  });
};

// customer info div
const customerInfoDiv = () => {
  const legend = document.querySelector("legend");
  legend.style.color = pinkChalk;
  legend.style.fontFamily = headingFont;
  const buttonSubmit = document.querySelectorAll(".checkout-div button[type='submit']");
  buttonInputStyle(buttonSubmit);
  hoverGreen(buttonSubmit[0])
};


/**
 * hover pink
 * @param {string} element targets the element to changed
 */
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

/**
 *  hover green
 * @param {string} element targets the element to changed
 */
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
// add white border
/**
 * 
 * @param {string} element -takes an element to add border
 */
const addBorder=(element)=>{
  element.style.border=`.25rem solid ${light}`;
  element.style.borderColor=light;  
}
const contactSubmit=document.getElementById("contactSubmit");
hoverGreen(contactSubmit);