let order = [
  [
    { name: "Garlic Knots", price: 4.99 },
    { name: "Bread Sticks", price: 3.99 },
  ],
  [
    {
      name: "1x small pizza with Pepperoni, Spinach. ",
      price: 12.99,
      size: "small",
      basePrice: 10.99,
    },
  ],
  [
    { name: "Baked Ziti", price: 9.99 },
    { name: "House Salad", price: 6.99 },
  ],
];
const modal = document.querySelector(".cart-modal");

let subtotal = 0;
let total = 0;

// creates a table to display the order
const shoppingCart = () => {
  console.log("shopping cart");
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
      console.log(subtotal);
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
        // subtotalCalc();

        console.log(subtotal);
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

shoppingCart();
