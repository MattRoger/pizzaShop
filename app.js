const mainMenu = document.querySelector("#menu");
const menu = document.querySelector(".menu-insert");
const pizzaMenuButton = document.querySelector(".pizzaMenuButton");
const appsMenuButton = document.querySelector(".appsMenuButton");
const entreeMenuButton = document.querySelector(".entreeMenuButton");
const dessertMenuButton = document.querySelector(".dessertMenuButton");
const pizzaForm = document.createElement("form");
const appForm = document.createElement("form");
const entForm = document.createElement("form");
const dessertForm = document.createElement("form");
// const appSubmit = document.querySelector("#appetizersSubmit");
const modal = document.querySelector(".cart-modal");
const buttons = document.getElementsByTagName("BUTTON");

// color pallet

const light = "#F8FAF0";
const dark = "#12130F";
const greenHight = "#40750A";
const sectionBackground = "#534D56";
const pinkChalk = "#F786AA";
const greenChalk = "#99F7AB";

let order = [];
let total = 0;
let subtotal = 0;
let tip = 1;
const appetizers = [
  {
    id: 1,
    name: "Garlic Knots",
    description: "Four savory garlic knots, with our amazing marinara sauce",
    price: "4.99",
  },
  {
    id: 2,
    name: "Bread Sticks",
    description:
      "Four of our pizza crust breadsticks, with our amazing marinara sauce",
    price: "3.99",
  },
  {
    id: 3,
    name: "Hot Buffalo Wings",
    description: "A Dozen of our hot buffalo wings!",
    price: "8.99",
  },
  {
    id: 4,
    name: "Mild Buffalo Wings",
    description: "A Dozen of our mild buffalo wings!",
    price: "8.99",
  },
  {
    id: 4,
    name: "Sweet and Savory Buffalo Wings",
    description: "A Dozen of our Sweet and Savory buffalo wings!",
    price: "8.99",
  },
];
const entrees = [
  {
    id: 1,
    name: "Baked Ziti",
    description: "A serving of our world famous baked ziti",
    price: "9.99",
  },
  {
    id: 2,
    name: "House Salad",
    description:
      "Four of our pizza crust breadsticks, with our amazing marinara sauce",
    price: "6.99",
  },
  {
    id: 3,
    name: "Cheesy Calzone",
    description: "A Dozen of our hot buffalo wings!",
    price: "8.99",
  },
  {
    id: 4,
    name: "Veggie Calzone",
    description: "A Dozen of our mild buffalo wings!",
    price: "8.99",
  },
  {
    id: 4,
    name: "Meaty Calzone",
    description: "A Dozen of our Sweet and Savory buffalo wings!",
    price: "8.99",
  },
  {
    id: 5,
    name: "Chicken Parm Sandwich",
    description: "A Dozen of our Sweet and Savory buffalo wings!",
    price: "9.99",
  },
];
const desserts = [
  {
    id: 1,
    name: "Brownies",
    description: "A double chocolate brownie",
    price: "4.99",
  },
  {
    id: 2,
    name: "Fried Zeppoles",
    description: "A dozen fried zeppoles with powdered sugar",
    price: "6.99",
  },
  {
    id: 3,
    name: "Cheese cake",
    description: "A Slice of N.Y. Cheesecake",
    price: "8.99",
  },
  {
    id: 4,
    name: "Doughnut sticks",
    description: "A Dozen doughnut sticks with raspberry sauce",
    price: "6.99",
  },
];

const toppings = [
  "Pepperoni",
  "Sausage",
  "Olives",
  "Pineapple",
  "Bacon",
  "Mushrooms",
  "Jalapeño",
  "Onions",
  "Extra Cheese",
  "Green Peppers",
  "Cherry Tomatoes",
  "Spinach",
  "BBQ Chicken",
];
toppings.sort();

// sets menus to display none
pizzaForm.style.display = "none";
appForm.style.display = "none";
entForm.style.display = "none";
dessertForm.style.display = "none";
// menu buttons
pizzaMenuButton.addEventListener("click", () => {
  pizzaForm.style.display = "block";
  appForm.style.display = "none";
  entForm.style.display = "none";
  dessertForm.style.display = "none";
});
appsMenuButton.addEventListener("click", () => {
  appForm.style.display = "flex";
  pizzaForm.style.display = "none";
  entForm.style.display = "none";
  dessertForm.style.display = "none";
});
entreeMenuButton.addEventListener("click", () => {
  entForm.style.display = "flex";
  pizzaForm.style.display = "none";
  appForm.style.display = "none";
  dessertForm.style.display = "none";
});
dessertMenuButton.addEventListener("click", () => {
  dessertForm.style.display = "flex";
  pizzaForm.style.display = "none";
  appForm.style.display = "none";
  entForm.style.display = "none";
});

// function creates the menu for ordering,
// params are the menulist needed, and id as a string, and the form needed

const renderMenu = (menuList, id, form) => {
  for (let i = 0; i < menuList.length; i++) {
    const div = document.createElement("div");
    div.className = "menu-item";
    const name = document.createElement("h3");
    // changes first letter to capital and color"
    const words = menuList[i].name;
    let wordBank = words.split(" ");
    for (let i = 0; i < wordBank.length; i++) {
      let word = wordBank[i];
      const firstLetterSpan = document.createElement("span");
      const endSpan = document.createElement("span");
      let firsLetter = word[0];
      firsLetter = firsLetter.toUpperCase();
      firstLetterSpan.textContent = firsLetter;
      firstLetterSpan.style.color = greenChalk;
      firstLetterSpan.style.fontSize = "115%";
      let endWord = "";
      for (let i = 1; i < word.length; i++) {
        endWord += word[i];
      }
      endSpan.textContent = endWord;
      endSpan.style.textDecoration = "underline";
      endSpan.style.textDecorationColor = greenChalk;
      endSpan.style.color = pinkChalk;

      name.append(firstLetterSpan, endSpan, "  ");
    }

    const description = document.createElement("p");
    description.textContent = menuList[i].description;
    const price = document.createElement("p");
    price.textContent = "$" + menuList[i].price;
    price.className = "price";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "appCheckbox";
    checkbox.className = "checkbox";
    checkbox.id = menuList[i].name;
    checkbox.value = menuList[i].price;
    const label = document.createElement("label");
    label.textContent = "Add to order! ";

    div.append(name, description, price, checkbox, label);
    form.append(div);
  }
  const input = document.createElement("input");
  input.type = "submit";
  input.textContent = "Add to order";
  input.id = id;
  input.className = "addToCart";
  input.value = "submit";
  form.append(input);
  menu.append(form);
};

//appetizers
appForm.action = "index.html";
appForm.method = "post";
appForm.className = "order-form";

renderMenu(appetizers, "appetizersSubmit", appForm);

//entrees
entForm.action = "index.html";
entForm.method = "post";
entForm.className = "order-form";
renderMenu(entrees, "entSubmit", entForm);

//dessert
dessertForm.action = "index.html";
dessertForm.method = "post";
dessertForm.className = "order-form";
renderMenu(desserts, "dessertSubmit", dessertForm);

// 
const addToOrder = () => {
  mainMenu.style.display = "none";
  dessertForm.style.display = "none";
  pizzaForm.style.display = "none";
  appForm.style.display = "none";
  entForm.style.display = "none";
  let selectedApps = [];
  let notice = [];
  const checkboxes = document.querySelectorAll(
    "input[type='checkbox'].checkbox"
    );
    for (checkbox of checkboxes) {
      if (checkbox.checked) {
      const price = parseFloat(checkbox.value);
      const orderedApp = { name: checkbox.id, price: price };
      selectedApps.push(orderedApp);
      checkbox.checked = false;
    }
  }
  order.push(selectedApps);
  for (i = 0; i < selectedApps.length; i++) {
    const string = `${selectedApps[i].name}...$${selectedApps[i].price}`;
    notice.push(string);
  }
  alertOrderWindow(notice);
  checkCart();
};

// pizza menu
pizzaForm.action = "index.html";
pizzaForm.method = "post";
pizzaForm.className = "menu-item";

const PizzaSize = () => {
  const h3 = document.createElement("h3");
  h3.textContent = "Choose Size";
  const small = document.createElement("input");
  const smDiv = document.createElement("div");
  smDiv.className = "size-div";
  small.type = "radio";
  small.value = 10.99;
  small.name = "size";
  small.attr = "small";
  small.checked = true;
  const smLabel = document.createElement("label");
  smLabel.textContent = `Small 10" $10.99`;
  smDiv.append(small, smLabel);
  
  const med = document.createElement("input");
  const mdDiv = document.createElement("div");
  mdDiv.className = "size-div";
  med.type = "radio";
  med.value = 12.99;
  med.name = "size";
  med.attr = "medium";
  const medLabel = document.createElement("label");
  medLabel.textContent = `Medium 14" $12.99`;
  mdDiv.append(med, medLabel);
  
  const lg = document.createElement("input");
  const lgDiv = document.createElement("div");
  lgDiv.className = "size-div";
  lg.type = "radio";
  lg.value = 14.99;
  lg.name = "size";
  lg.attr = "large";
  const lgLabel = document.createElement("label");
  lgLabel.textContent = `Large 16" $14.99`;
  lgDiv.append(lg, lgLabel);
  pizzaForm.append(h3, smDiv, mdDiv, lgDiv);
  menu.append(pizzaForm);
  chooseToppings();
};

const chooseToppings = () => {
  const div = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = "Choose your Toppings.";
  const priceTitle = document.createElement("h4");
  priceTitle.textContent = "$1 each";
  
  div.append(title, priceTitle);
  const toppingDiv = document.createElement("div");
  toppingDiv.className = "topping-div";
  for (let i = 0; i < toppings.length; i++) {
    const tDiv = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "topping";
    checkbox.id = toppings[i];
    checkbox.value = 1;
    checkbox.className = "toppings";
    const label = document.createElement("label");
    label.textContent = toppings[i];
    tDiv.append(checkbox, label);
    toppingDiv.appendChild(tDiv);
  }
  div.appendChild(toppingDiv);
  pizzaForm.append(div);
  pizzaQuantity();
};

const pizzaQuantity = () => {
  const input = document.createElement("input");
  input.type = "number";
  input.name = "pizzaQuantity";
  input.min = "1";
  input.value = "1";
  input.className = "pizzaQuantity";
  const label = document.createElement("label");
  label.textContent = "Number of Pies";
  label.style.display = "block";
  pizzaForm.append(label, input);
  specialDirections();
};

const specialDirections = () => {
  const input = document.createElement("input");
  input.type = "textarea";
  input.className = "pizzaSpecialDirections";
  input.name = "specialDirections";
  const label = document.createElement("label");
  label.textContent = "Special Directions: ";
  label.style.display = "block";
  pizzaForm.append(label, input);
  addPizzaSubmit();
};
const addPizzaSubmit = () => {
  const input = document.createElement("input");
  input.type = "submit";
  input.value = "submit";
  input.style.width = "30vh";
  input.style.marginTop = "1rem";
  input.textContent = "Add to order";
  input.id = "pizzaSubmit";
  input.style.display = "block";
  pizzaForm.append(input);
};
PizzaSize();

pizzaSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  pizzaForm.style.display = "none";
  let toppings = [];
  let quantity = 1;
  let pizzaOrders = [];
  let notice = [];
  const radios = document.querySelectorAll("input[type='radio']");
  for (radio of radios) {
    if (radio.checked) {
      size = radio.attr;
      basePrice = radio.value;
      basePrice = parseFloat(basePrice);
    }
  }
  const checkboxes = document.querySelectorAll(
    "input[type='checkbox'].toppings"
    );
    for (checkbox of checkboxes) {
      if (checkbox.checked) {
        toppings.push(checkbox.id);
        checkbox.checked = false;
      }
    }
    const quantitySelector = document.querySelector(".pizzaQuantity");
    quantity = quantitySelector.value;
    quantity = parseInt(quantity);
    quantitySelector.value = 1;
    
    const specialDirectionsInput = document.querySelector(
    ".pizzaSpecialDirections"
    );
  const specialDirections = specialDirectionsInput.value;

  let name = `${quantity}x ${size} pizza`;
  if (toppings.length > 0) {
    name += " with ";
    for (i = 0; i < toppings.length; i++) {
      if (i < toppings.length - 1) {
        name += `${toppings[i]}, `;
      } else {
        name += `${toppings[i]}. `;
      }
    }
  } else {
    name += ".";
  }
  
  let toppingPrice = parseFloat(toppings.length);
  toppingPrice.toFixed(2);
  let price = basePrice + toppingPrice;
  price = price.toFixed(2);
  price = price * quantity;
  
  let pizzaOrder = {
    name,
    price,
    size,
    basePrice,
    toppings,
    toppingsTotal: toppings.length,
    quantity,
    specialDirections,
  };
  pizzaOrders.push(pizzaOrder);
  order.push(pizzaOrders);
  
  // creates string for alertNotice()
  let string = name;
  let specialString = "";
  if (pizzaOrder.specialDirections != "") {
    specialString += `Special Directions: ${pizzaOrder.specialDirections}.`;
  }
  const total = `...$${price}`;
  notice.push(string, specialString, total);
  alertOrderWindow(notice);
  checkCart();
  scrollToTop()
});
  

// cart submits
appetizersSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  addToOrder();
  scrollToTop()
});

entSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  addToOrder();
  scrollToTop()
});
dessertSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  addToOrder();
  scrollToTop()
});

const scrollToTop=()=>{
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'auto'
  });
}

// alerts user if something is added to the cart
// param added takes a string
const alertOrderWindow = (added) => {
  const xBtn = document.createElement("button");
  const checkoutBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const div = document.createElement("div");
  div.className = "checkout-div";
  xBtn.textContent = "x";
  xBtn.id = "close";
  checkoutBtn.textContent = "Place Order";
  checkoutBtn.id = "checkout";
  checkoutBtn.style.display = "inline";
  backBtn.textContent = "Continue shopping";
  backBtn.id = "back";
  backBtn.style.display = "inline";
  div.appendChild(xBtn);
  for (i = 0; i < added.length; i++) {
    const p = document.createElement("p");
    p.textContent = `${added[i]} \n`;
    div.appendChild(p);
  }
  const p = document.createElement("p");
  p.textContent = "Were added to your order";
  div.appendChild(p);
  const btnDiv = document.createElement("div");
  div.append(backBtn, checkoutBtn);
  div.appendChild(btnDiv);
  modal.appendChild(div);
  modal.style.display = "block";
  closeModal();
};

const closeModal = () => {
  const closeBtn = document.querySelector("#close");
  const backBtn = document.querySelector("#back");
  const checkoutBtn = document.querySelector("#checkout");
  
  closeBtn.addEventListener("click", () => {
    modal.removeChild(modal.childNodes[0]);
    modal.style.display = "none";
    mainMenu.style.display = "block";
  });
  backBtn.addEventListener("click", () => {
    modal.removeChild(modal.childNodes[0]);
    modal.style.display = "none";
    mainMenu.style.display = "block";
  });
  checkoutBtn.addEventListener("click", () => {
    modal.removeChild(modal.childNodes[0]);
    shoppingCart();
  });
};


// checks if items in shopping cart
const checkCart = () => {
  const cartIcon=document.querySelector(".fa-shopping-cart");
  const cartNumber=document.querySelector(".items-in-cart");
  if (order.length > 0) {
    cartIcon.style.color="#F8FAF0";
    // cartNumber.textContent=1;   
    cartNumber.textContent=order.length;
  }else{
    cartIcon.style.color="#5d5e5a"; 
    cartNumber.textContent=order.length;   
  }
};
checkCart()

// creates a table to display the order
const shoppingCart = () => {
  const div = document.createElement("div");
  div.className = "checkout-div";
  const table = document.createElement("table");
  const tableCaption = document.createElement("caption");
  tableCaption.textContent = "Your Order";
  table.appendChild(tableCaption);
  const tr1 = document.createElement("tr");
  const th1 = document.createElement("th");
  th1.textContent = "Item";
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  th3.textContent = "Price";
  const th4 = document.createElement("th");
  th4.textContent = "Remove";
  tr1.append(th1, th2, th3, th4);
  table.appendChild(tr1);
  subtotalCalc();
  
  shoppingCartRows(table);
  totalRows(table, div);
  tableButtons(div);
};
// calculates subtotal
const subtotalCalc = () => {
  // calculates subtotal
  for (i = 0; i < order.length; i++) {
    const orderI = order[i];
    for (x = 0; x < orderI.length; x++) {
      const orderX = orderI[x];
      subtotal += orderX.price;
    }
  }
  totalCalc();
};
// calculates total
const totalCalc = () => {
  total = subtotal * 1.08;
  total = total.toFixed(2);
  return total;
};


// function creates table rows for each item and adds button to remove items.
// param table targets the table row
const shoppingCartRows = (table) => {
  for (i = 0; i < order.length; i++) {
    const orderI = order[i];
    for (x = 0; x < orderI.length; x++) {
      const orderX = orderI[x];
      const tr = document.createElement("tr");
      const tdName = document.createElement("td");
      tdName.textContent = orderX.name;
      const tdDots = document.createElement("td");
      tdDots.textContent = "....";
      const tdPrice = document.createElement("td");
      tdPrice.textContent = orderX.price;
      const tdButton = document.createElement("td");
      const button = document.createElement("button");
      button.textContent = "X";
      button.className = "removeButton";
      button.attr = i;
      button.value = x;
      button.addEventListener("click", () => {
        const subtotalTd = document.querySelector(".subtotal");
        const totalTd = document.querySelector(".totalPrice");
        delete order[button.attr][button.value];
        subtotal -= orderX.price;
        subtotal=subtotal.toFixed(2);
        table.removeChild(tr);
        // totalRows(table, div);
        subtotalTd.textContent = subtotal;
        totalCalc();
        totalTd.textContent= total;
      });
      tdButton.appendChild(button);
      tr.append(tdName, tdDots, tdPrice, tdButton);
      table.appendChild(tr);
    }
  }
};

//creates table rows to show subtotal and total

const totalRows = (table, div) => {
  const subtotalTr = document.createElement("tr");
  subtotalTr.className = "subtotalTr";
  const td1 = document.createElement("td");
  td1.textContent = "subtotal";
  td1.colSpan = 2;
  const td2 = document.createElement("td");
  td2.textContent = "....";
  const td3 = document.createElement("td");
  td3.textContent = subtotal;
  td3.className = "subtotal";
  subtotalTr.append(td1, td2, td3);
  
  const totalTr = document.createElement("tr");
  totalTr.className = "totalTr";
  const td4 = document.createElement("td");
  td4.textContent = "Total";
  td4.colSpan = 2;
  const td5 = document.createElement("td");
  td5.textContent = "....";
  const td6 = document.createElement("td");
  td6.textContent = total;
  td6.className = "price";
  td6.className = "totalPrice";
  totalTr.append(td4, td5, td6);
  table.append(subtotalTr, totalTr);
  div.appendChild(table);
};


// creates buttons to add more or proceed to next screen and appends them to the div
const tableButtons = (div) => {
  const addMoreBtn = document.createElement("button");
  addMoreBtn.textContent = "Add More!";
  addMoreBtn.className = "cart-btn";
  addMoreBtn.addEventListener("click", () => {
    modal.removeChild(modal.childNodes[0]);
    modal.style.display = "none";
    mainMenu.style.display = "block";
  });
  const addTipButton = document.createElement("button");
  addTipButton.textContent = "Next";
  addTipButton.className = "cart-btn";
  addTipButton.addEventListener("click", () => {
    modal.removeChild(modal.childNodes[0]);
    tipScreen();
  });
  div.append(addMoreBtn, addTipButton);
  modal.appendChild(div);
};



// allows user to add tip
const tipScreen = () => {
  const div = document.createElement("div");
  div.className = "checkout-div";
  const totalWTip = document.createElement("p");
  totalWTip.textContent = `Your total is $${total}`;
  totalWTip.id = "tippedAmount";
  const h3 = document.createElement("h3");
  h3.textContent = "Add a Tip";
  h3.className = "tipHeader";
  const btn0 = document.createElement("button");
  btn0.textContent = "No Tip";
  btn0.value = 1;
  btn0.className = "noTip";
  const btn10 = document.createElement("button");
  btn10.textContent = "10%";
  btn10.value = 1.1;
  btn10.className = "tip10";
  const btn15 = document.createElement("button");
  btn15.textContent = "15%";
  btn15.value = 1.15;
  btn15.className = "tip15";
  const btn20 = document.createElement("button");
  btn20.textContent = "20%";
  btn20.value = 1.2;
  btn20.className = "tip20";
  const custDiv = document.createElement("div");
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "tipBtnDiv";
  custDiv.className = "custTipDiv";
  const btnCustomSubmit = document.createElement("button");
  btnCustomSubmit.textContent = "Add Custom Tip";
  btnCustomSubmit.type = "submit";
  btnCustomSubmit.className = "customTipSubmit";
  const customTipInput = document.createElement("input");
  customTipInput.type = "number";
  customTipInput.name = "customTip";
  customTipInput.id = "customTip";
  customTipInput.min = 0;
  customTipInput.limit = 100;
  custDiv.append(customTipInput, btnCustomSubmit);
  buttonDiv.append(btn0, btn10, btn15, btn20);
  div.append(h3, buttonDiv, custDiv, totalWTip);
  div.className = "tip-div";
  modal.appendChild(div);
  tipCalc();
  next = document.createElement("button");
  next.textContent = "Next";
  next.className = "next";
  div.appendChild(next);
  next.addEventListener("click", () => {
    modal.removeChild(div);
    customerInfo();
  });

};


// calculates total with tip
const tipCalc = () => {
  for (i = 0; i < buttons.length; i++) {
    const tipMessage = document.getElementById("tippedAmount");
    const customTip = document.getElementById("customTip");
    buttons[i].addEventListener("click", (e) => {
      switch (e.target.className) {
        case "noTip":
          tip = e.target.value;
          break;
        case "tip10":
          tip = e.target.value;
          break;
        case "tip15":
          tip = e.target.value;
          break;
        case "tip20":
          tip = e.target.value;
          break;
        case "customTipSubmit":
          tip = `1.${customTip.value}`;
          tip = parseFloat(tip);
          break;
      }
      let tipTotal = total * tip;
      tipTotal = tipTotal.toFixed(2);
      tipMessage.textContent = `Your total is $${tipTotal}`;
      tipMessage.style.color = pinkChalk;
    });
  }
};

// gets customer info
const customerInfo = () => {
  const form = document.createElement("form");
  form.className = "checkout-div";
  const fieldSetContact = document.createElement("fieldset");
  const heading = document.createElement("legend");
  heading.textContent = "Your Contact Info: ";
  const fNameLabel = document.createElement("label");
  fNameLabel.textContent = "First Name: ";
  fNameLabel.for = "fName";
  const fName = document.createElement("input");
  fName.type = "text";
  fName.id = "fName";
  fName.name = "first_name";
  const lNameLabel = document.createElement("label");
  lNameLabel.textContent = "Last Name: ";
  lNameLabel.for = "fName";
  const lName = document.createElement("input");
  lName.type = "text";
  lName.id = "lName";
  lName.name = "last";
  const phoneLabel = document.createElement("label");
  phoneLabel.textContent = "Phone Number: ";
  phoneLabel.for = "phone";
  const phone = document.createElement("input");
  phone.type = "tel";
  phone.id = "phone";
  phone.name = "phone";
  const emailLabel = document.createElement("label");
  emailLabel.textContent = "E-Mail: ";
  emailLabel.for = "email";
  const email = document.createElement("input");
  email.type = "email";
  email.id = "email";
  email.name = "e-mail";
  fieldSetContact.append(
    heading,
    fNameLabel,
    fName,
    lNameLabel,
    lName,
    emailLabel,
    email
  );

  const contactDiv = document.createElement("div");
  contactDiv.className = "email-list";
  const contactLabel = document.createElement("label");
  contactLabel.textContent = "Sign up for some great Deals";
  const contactCheckbox = document.createElement("input");
  contactCheckbox.type = "checkbox";
  contactCheckbox.checked = true;
  contactDiv.append(contactLabel, contactCheckbox);
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Place Order";
  submitBtn.type = "submit";
  form.append(fieldSetContact, contactDiv, submitBtn);
  modal.appendChild(form);
};
