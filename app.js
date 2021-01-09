const menu = document.querySelector(".menu-insert");
const pizzaMenuButton = document.querySelector(".pizzaMenuButton");
const appsMenuButton = document.querySelector(".appsMenuButton");
const pizzaForm = document.createElement("form");
const appForm = document.createElement("form");
const appSubmit = document.querySelector("#appetizersSubmit");
const modal = document.querySelector(".added-modal");
const cartModal = document.querySelector(".cart-modal");
const tipModal = document.querySelector(".tip-modal");

let order = [];

const appetizers = [
  {
    id: 1,
    name: "Garlic Knots",
    price: 4.99,
  },
  {
    id: 2,
    name: "Bread Sticks",
    price: 3.99,
  },
];

const toppings = ["Pepperoni", "Sausage", "Olives", "Pineapple", "Bacon"];
toppings.sort();

// sets menus to display none
pizzaForm.style.display = "none";
appForm.style.display = "none";
// menu buttons
pizzaMenuButton.addEventListener("click", () => {
  pizzaForm.style.display = "block";
  appForm.style.display = "none";
});
appsMenuButton.addEventListener("click", () => {
  pizzaForm.style.display = "none";
  appForm.style.display = "block";
});

//appetizers
appForm.action = "index.html";
appForm.method = "post";

const appetizersMenu = () => {
  for (let i = 0; i < appetizers.length; i++) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = appetizers[i].name;
    const p = document.createElement("p");
    p.textContent = "$" + appetizers[i].price;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "appCheckbox";
    checkbox.className = "appCheckbox";
    checkbox.id = appetizers[i].name;
    checkbox.value = appetizers[i].price;
    div.append(h3, p, checkbox);
    appForm.append(div);
  }
  const input = document.createElement("input");
  input.type = "submit";
  input.textContent = "Add to order";
  input.id = "appetizersSubmit";
  input.value = "submit";
  appForm.append(input);
  menu.append(appForm);
};
appetizersMenu();

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

const PizzaSize = () => {
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

  pizzaForm.append(small, smLabel, med, medLabel, lg, lgLabel);
  menu.append(pizzaForm);
  chooseToppings();
};

const chooseToppings = () => {
  const div = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = "Choose your Toppings. $1 each";
  div.append(title);
  for (let i = 0; i < toppings.length; i++) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "topping";
    checkbox.id = toppings[i];
    checkbox.value = 1;
    checkbox.className = "toppings";
    const label = document.createElement("label");
    label.textContent = toppings[i];
    div.append(checkbox, label);
  }
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
  closeModal();
};

const closeModal = () => {
  const closeBtn = document.querySelector("#close");
  const backBtn = document.querySelector("#back");
  const checkoutBtn = document.querySelector("#checkout");

  closeBtn.addEventListener("click", () => {
    modal.removeChild(modal.childNodes[0]);
  });
  backBtn.addEventListener("click", () => {
    modal.removeChild(modal.childNodes[0]);
  });
  checkoutBtn.addEventListener("click", () => {
    modal.removeChild(modal.childNodes[0]);
    shoppingCart();
  });
};

const checkCart = () => {
  if (order.length > 0) {
    // console.log("order in cart");
    // console.log(order);
  }
};

const shoppingCart = () => {
  const div = document.createElement("div");
  const table=document.createElement("table");
  const tableCaption=document.createElement("caption");
  tableCaption.textContent="Your Order";
  table.appendChild(tableCaption);
  const tr1=document.createElement("tr");
  const th1=document.createElement("th");
  th1.textContent="Item";
  const th2=document.createElement("th");
  const th3=document.createElement("th");
  th3.textContent="Price";
  const th4=document.createElement("th");
  th4.textContent="Remove"
  tr1.append(th1, th2, th3, th4);

  table.appendChild(tr1)
 
  let subTotal = 0;
  for (i = 0; i < order.length; i++) {
    const orderI = order[i];
    for (x = 0; x < orderI.length; x++) {
      const orderX = orderI[x];
      console.log(orderX.name);
      console.log(orderX.price);
      const tr=document.createElement("tr");
      const tdName=document.createElement("td");
      tdName.textContent=orderX.name;
      const tdDots=document.createElement("td");
      tdDots.textContent="....";
      const tdPrice=document.createElement("td");
      tdPrice.textContent=orderX.price;
      const tdButton=document.createElement("td");
      const button=document.createElement("button");
      button.textContent="X";
      button.className="removeButton";
      tdButton.appendChild(button);
      tr.append(tdName, tdDots, tdPrice, tdButton);
      table.appendChild(tr);
      if (orderX.price !== NaN) {
        subTotal += orderX.price;
      }
    }
  }
  let total=subTotal*1.08;
  total=total.toFixed(2);

  const subTotalTr=document.createElement("tr");
  const td1 = document.createElement("td");
  td1.textContent="Subtotal";
  td1.colSpan=2;
  const td2 = document.createElement("td");
  td2.textContent="...."
  const td3 = document.createElement("td");
  td3.textContent=subTotal;
  subTotalTr.append(td1, td2, td3);

  const totalTr=document.createElement("tr");
  const td4 = document.createElement("td");
  td4.textContent="Total";
  td4.colSpan=2;
  const td5 = document.createElement("td");
  td5.textContent="...."
  const td6 = document.createElement("td");
  td6.textContent=total;
  totalTr.append(td4, td5, td6);
  table.append(subTotalTr, totalTr);
  div.appendChild(table);

  const addMoreBtn=document.createElement("button");
  addMoreBtn.textContent="Add More!"
  addMoreBtn.addEventListener("click", ()=>{
    cartModal.removeChild(cartModal.childNodes[0]);
  })
  const addTipButton=document.createElement("button");
  addTipButton.textContent="Next"
  addTipButton.addEventListener("click", ()=>{
    cartModal.removeChild(cartModal.childNodes[0]);
  })
  div.append(addMoreBtn, addTipButton)
  cartModal.appendChild(div);

};

const tipScreen=()=>{
  const div = document.createElement("div");
  const p=document.createElement("p");
  p.textContent="Add a Tip";
  p.className="tipHeader";
  const btn10=document.createElement("button");
  btn10.textContent="10%";
  const btn15=document.createElement("button");
  btn15.textContent="15%";
  const btn15=document.createElement("button");
  btn15.textContent="20%";
  const btnCustomSubmit=document.createElement("button");
  btnCustomSubmit.textContent="Add Custom Tip";
  
}
