const menu = document.querySelector(".menu-insert");
const pizzaMenuButton = document.querySelector(".pizzaMenuButton");
const appsMenuButton = document.querySelector(".appsMenuButton");
const entreeMenuButton = document.querySelector(".entreeMenuButton");
const pizzaForm = document.createElement("form");
const appForm = document.createElement("form");
const entForm = document.createElement("form");
const appSubmit = document.querySelector("#appetizersSubmit");
const modal = document.querySelector(".cart-modal");
const buttons = document.getElementsByTagName("BUTTON");

let order = [];
let total = 0;
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
// menu buttons
pizzaMenuButton.addEventListener("click", () => {
  pizzaForm.style.display = "block";
  appForm.style.display = "none";
  entForm.style.display = "none";
});
appsMenuButton.addEventListener("click", () => {
  appForm.style.display = "block";
  pizzaForm.style.display = "none";
  entForm.style.display = "none";
});
entreeMenuButton.addEventListener("click", () => {
  entForm.style.display = "block";
  pizzaForm.style.display = "none";
  appForm.style.display = "none";
});

// function creates the menu for ordering,
// params are the menulist needed, and id as a string, and the form needed

const renderMenu = (menuList, id, form) => {
  for (let i = 0; i < menuList.length; i++) {
    const div = document.createElement("div");
    div.className = "menu-item";
    const h3 = document.createElement("h3");
    h3.textContent = menuList[i].name;
    const description = document.createElement("p");
    description.textContent = menuList[i].description;
    const price = document.createElement("p");
    price.textContent = "$" + menuList[i].price;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "appCheckbox";
    checkbox.className = "appCheckbox";
    checkbox.id = menuList[i].name;
    checkbox.value = menuList[i].price;
    const label = document.createElement("label");
    label.textContent = "Add to order! ";
    div.append(h3, description, price, checkbox, label);
    form.append(div);
  }
  const input = document.createElement("input");
  input.type = "submit";
  input.textContent = "Add to order";
  input.id = id;
  input.value = "submit";
  form.append(input);
  menu.append(form);
};

//appetizers
appForm.action = "index.html";
appForm.method = "post";
appForm.className = "appetizer-form";

renderMenu(appetizers,"appetizersSubmit",appForm);

//entrees
entForm.action = "index.html";
entForm.method = "post";
entForm.className = "appetizer-form";
renderMenu(entrees,"entSubmit",entForm);

console.log(entrees)

appetizersSubmit.addEventListener("click", (e) => {
  let selectedApps = [];
  let notice = [];
  const checkboxes = document.querySelectorAll(
    "input[type='checkbox'].appCheckbox"
  );
  e.preventDefault();
  for (checkbox of checkboxes) {
    if (checkbox.checked) {
      const price = parseFloat(checkbox.value);
      const orderedApp = { name: checkbox.id, price: price };
      selectedApps.push(orderedApp);
      checkbox.checked = false;
    }
  }
  console.log(selectedApps);
  order.push(selectedApps);
  for (i = 0; i < selectedApps.length; i++) {
    const string = `${selectedApps[i].name}...${selectedApps[i].price}`;
    notice.push(string);
  }
  console.log(notice);
  alertOrderWindow(notice);
  checkCart();
});

// pizza menu
pizzaForm.action = "index.html";
pizzaForm.method = "post";
pizzaForm.className = "menu-item";

const PizzaSize = () => {
  const h3 = document.createElement("h3");
  h3.textContent = "Choose Size";
  const small = document.createElement("input");
  small.type = "radio";
  small.value = 10.99;
  small.name = "size";
  small.attr = "small";
  small.checked = true;
  const smLabel = document.createElement("label");
  smLabel.textContent = `Small 10" $10.99`;

  const med = document.createElement("input");
  med.type = "radio";
  med.value = 12.99;
  med.name = "size";
  med.attr = "medium";
  const medLabel = document.createElement("label");
  medLabel.textContent = `Medium 14" $12.99`;

  const lg = document.createElement("input");
  lg.type = "radio";
  lg.value = 14.99;
  lg.name = "size";
  lg.attr = "large";
  const lgLabel = document.createElement("label");
  lgLabel.textContent = `Larger 16" $14.99`;

  pizzaForm.append(h3, small, smLabel, med, medLabel, lg, lgLabel);
  menu.append(pizzaForm);
  chooseToppings();
};

const chooseToppings = () => {
  const div = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = "Choose your Toppings. $1 each";
  div.append(title);
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
  input.textContent = "Add to order";
  input.id = "pizzaSubmit";
  input.style.display = "block";
  pizzaForm.append(input);
};
PizzaSize();

pizzaSubmit.addEventListener("click", (e) => {
  e.preventDefault();
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

  let toppingPrice = parseInt(toppings.length);
  let price = (basePrice + toppingPrice) * quantity;

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
});

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
  });
  backBtn.addEventListener("click", () => {
    modal.removeChild(modal.childNodes[0]);
    modal.style.display = "none";
  });
  checkoutBtn.addEventListener("click", () => {
    modal.removeChild(modal.childNodes[0]);
    shoppingCart();
  });
};

// Checkout code

// checks if items in shopping cart.
const checkCart = () => {
  if (order.length > 0) {
    // console.log("order in cart");
    // console.log(order);
  }
};

// renders shopping cart
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
  // calculates subtotal
  let subTotal = 0;
  for (i = 0; i < order.length; i++) {
    const orderI = order[i];
    for (x = 0; x < orderI.length; x++) {
      const orderX = orderI[x];
      console.log(orderX.name);
      console.log(orderX.price);
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
      tdButton.appendChild(button);
      tr.append(tdName, tdDots, tdPrice, tdButton);
      table.appendChild(tr);
      if (orderX.price !== NaN) {
        subTotal += orderX.price;
      }
    }
  }
  // calculates total with tax
  total = subTotal * 1.08;
  total = total.toFixed(2);

  const subTotalTr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.textContent = "Subtotal";
  td1.colSpan = 2;
  const td2 = document.createElement("td");
  td2.textContent = "....";
  const td3 = document.createElement("td");
  td3.textContent = subTotal;
  subTotalTr.append(td1, td2, td3);

  const totalTr = document.createElement("tr");
  const td4 = document.createElement("td");
  td4.textContent = "Total";
  td4.colSpan = 2;
  const td5 = document.createElement("td");
  td5.textContent = "....";
  const td6 = document.createElement("td");
  td6.textContent = total;
  totalTr.append(td4, td5, td6);
  table.append(subTotalTr, totalTr);
  div.appendChild(table);

  // buttons to add more or proceed to next screen
  const addMoreBtn = document.createElement("button");
  addMoreBtn.textContent = "Add More!";
  addMoreBtn.addEventListener("click", () => {
    modal.removeChild(modal.childNodes[0]);
    modal.style.display = "none";
  });
  const addTipButton = document.createElement("button");
  addTipButton.textContent = "Next";
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
  const btnCustomSubmit = document.createElement("button");
  btnCustomSubmit.textContent = "Add Custom Tip";
  btnCustomSubmit.type = "submit";
  btnCustomSubmit.className = "customTipSubmit";
  const customTipInput = document.createElement("input");
  customTipInput.type = "number";
  customTipInput.name = "customTip";
  customTipInput.id = "customTip";
  customTipInput.limit = 100;
  custDiv.append(customTipInput, btnCustomSubmit);
  div.append(h3, btn0, btn10, btn15, btn20, custDiv, totalWTip);
  modal.appendChild(div);
  tipCalc();
  next = document.createElement("button");
  next.textContent = "Next";
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
