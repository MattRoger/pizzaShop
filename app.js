const menu= document.querySelector(".menu-insert");
const pizzaForm= document.createElement("form");
const toppings=["Pepperoni", "Sausage", "Olives", "Pineapple", "Bacon"]

const PizzaSize =()=>{
    const small = document.createElement("input");
    small.type="radio";
    small.value=10.99;
    small.name="size"
    const smLabel= document.createElement("label");
    smLabel.textContent = `Small 10" $10.99`;

    const med = document.createElement("input");
    med.type="radio";
    med.value=12.99;
    med.name="size"
    const medLabel= document.createElement("label");
    medLabel.textContent = `Medium 14" $12.99`;

    const lg = document.createElement("input");
    lg.type="radio";
    lg.value=14.99;
    lg.name="size"
    const lgLabel= document.createElement("label");
    lgLabel.textContent = `Larger 16" $14.99`;
    
    pizzaForm.append(small, smLabel, med, medLabel, lg, lgLabel);
    menu.append(pizzaForm);
    chooseToppings();
}

const chooseToppings = ()=>{
    const div= document.createElement("div");
    const title= document.createElement("h3");
    title.textContent="Choose your Toppings. $1 each";
    div.append(title)
    for(let i=0; i<toppings.length; i++){
        const checkbox= document.createElement("input");
        checkbox.type="checkbox";
        const label = document.createElement("label");
        label.textContent=toppings[i];
        div.append(checkbox, label);
    }
    pizzaForm.append(div)
    pizzaQuantity();
}
const pizzaQuantity = ()=>{
    const input = document.createElement("input");
    input.type="number";
    input.min="1";
    input.value="1"
    const label = document.createElement("label");
    label.textContent="Number of Pies"
    pizzaForm.append(input, label);
    specialDirections();
}

const specialDirections = () =>{
    const input = document.createElement("input");
    input.type="textarea";
    const label=document.createElement("label");
    label.textContent="Special Directions: ";
    label.style.display="block";
    pizzaForm.append(label, input);
}

PizzaSize();