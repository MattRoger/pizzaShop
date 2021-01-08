const menu = document.querySelector(".menu-insert");
const pizzaMenuButton = document.querySelector(".pizzaMenuButton");
const appsMenuButton = document.querySelector(".appsMenuButton");
const pizzaForm = document.createElement("form");
const appForm = document.createElement("form");
const appSubmit = document.querySelector("#appetizersSubmit");
const modal = document.querySelector(".added-modal");

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
      const orderedApp = { name: checkbox.id, price: checkbox.value };
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
  // let size;
  // let basePrice;
  let toppings = [];
  let quantity = 1;
  let pizzaOrder = {};
  let notice=[]
  const radios = document.querySelectorAll("input[type='radio']");
  for (radio of radios) {
    if (radio.checked) {
      size = radio.attr;
      basePrice=radio.value;
      basePrice=parseFloat(basePrice)
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
  quantitySelector.value = 1;

  const specialDirectionsInput = document.querySelector(
    ".pizzaSpecialDirections"
  );
  const specialDirections = specialDirectionsInput.value;
  pizzaOrder = {
    size,
    basePrice,
    toppings,
    toppingsTotal: toppings.length,
    quantity,
    specialDirections,
  };

  order.push(pizzaOrder);
  console.log(pizzaOrder);
  console.log(order);
  let string =`${pizzaOrder.quantity}x ${pizzaOrder.size} `
  if(pizzaOrder.toppings.length>0){
    string += "with "
    for(i=0;i<pizzaOrder.toppings.length;i++){
      if(i<pizzaOrder.toppings.length-1){
        string += `${pizzaOrder.toppings[i]},`;
      }else{
        string += `${pizzaOrder.toppings[i]}.`;
      }
    }
  }
console.log(string)
  checkCart();
});

const alertOrderWindow = (added) => {
  const xBtn = document.createElement("button");
  const checkoutBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const div=document.createElement("div");
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
    console.log(added[i]);
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

const closeModal=()=>{
  const closeBtn = document.querySelector("#close");
  const backBtn= document.querySelector("#back");
  const checkoutBtn= document.querySelector("#checkout");

  closeBtn.addEventListener("click", () => {
    modal.removeChild(modal.childNodes[0]);
  });
  backBtn.addEventListener("click", () => {
    modal.removeChild(modal.childNodes[0]);
  });
  checkoutBtn.addEventListener("click", () => {
    modal.removeChild(modal.childNodes[0]);
  });
}

const checkCart = () => {
  if (order.length > 0) {
    console.log("order in cart");
  }
};
