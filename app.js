const menu = document.querySelector(".menu-insert");
const pizzaMenuButton = document.querySelector(".pizzaMenuButton");
const appsMenuButton = document.querySelector(".appsMenuButton")
const pizzaForm = document.createElement("form");
const appForm = document.createElement("form")
const appSubmit=document.querySelector("#appetizersSubmit")

const appetizers=[ 
  {
  "id":1,
  "name": "Garlic Knots",
  "price":"4.99"
},
{
  "id":2,
  "name": "Bread Sticks",
  "price":"3.99"
}
]

const toppings = ["Pepperoni", "Sausage", "Olives", "Pineapple", "Bacon"];
toppings.sort();

// sets menus to display none
pizzaForm.style.display="none";
appForm.style.display="none"
// menu buttons
pizzaMenuButton.addEventListener("click", () => {
    pizzaForm.style.display="block";
    appForm.style.display="none";
  });
appsMenuButton.addEventListener("click", () => { 
    pizzaForm.style.display="none";
    appForm.style.display="block";
  });
  
  //appetizers
  appForm.action="index.html";
  appForm.method="post";

const appetizersMenu=()=>{
  for(let i = 0; i<appetizers.length; i++){
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent=appetizers[i].name;
    const p = document.createElement("p");
    p.textContent="$" + appetizers[i].price;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name="appCheckbox";
    checkbox.className="appCheckbox";
    checkbox.id=appetizers[i].name;
    checkbox.value=appetizers[i].price;
    div.append(h3,p, checkbox);
    appForm.append(div); 
  }
  const input = document.createElement("input");
  input.type="submit";
  input.textContent="Add to order";
  input.id="appetizersSubmit";
  input.value="submit"; 
  appForm.append(input); 
  menu.append(appForm);
}
appetizersMenu()

appetizersSubmit.addEventListener("click",(e)=>{
  let selectedApps=[];
  const checkboxes=document.querySelectorAll("input[type='checkbox'].appCheckbox")
  e.preventDefault();
  for(checkbox of checkboxes){
    if(checkbox.checked){
      const orderedApp={name:checkbox.id, price:checkbox.value}
      selectedApps.push(orderedApp);
    }
  }
  console.log(selectedApps)
} )
// pizza menu
pizzaForm.action="index.html";
pizzaForm.method="post";


const PizzaSize = () => {
  const small = document.createElement("input");
  small.type = "radio";
  small.value = 10.99;
  small.name = "size";
  const smLabel = document.createElement("label");
  smLabel.textContent = `Small 10" $10.99`;
  
  const med = document.createElement("input");
  med.type = "radio";
  med.value = 12.99;
  med.name = "size";
  const medLabel = document.createElement("label");
  medLabel.textContent = `Medium 14" $12.99`;
  
  const lg = document.createElement("input");
  lg.type = "radio";
  lg.value = 14.99;
  lg.name = "size";
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
  input.min = "1";
  input.value = "1";
  const label = document.createElement("label");
  label.textContent = "Number of Pies";
  label.style.display="block"
  pizzaForm.append(label, input);
  specialDirections();
};

const specialDirections = () => {
  const input = document.createElement("input");
  input.type = "textarea";
  const label = document.createElement("label");
  label.textContent = "Special Directions: ";
  label.style.display = "block";
  pizzaForm.append(label, input);
  addPizzaSubmit();
};
const addPizzaSubmit=()=>{
  const input = document.createElement("input");
  input.type="submit";
  input.value="submit";
  input.textContent="Add to order";
  input.id="pizzaSubmit";
  input.style.display="block";
  pizzaForm.append(input);
}
PizzaSize();

