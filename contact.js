const contactSec = document.getElementById("contact");

const contactWrapper=document.createElement("div");
contactWrapper.className="wrapper";
contactWrapper.style.border=`.25rem solid ${light}`;

const phoneNumberDiv=document.createElement("div");
const phoneHeading=document.createElement("h3");
phoneHeading.textContent="Give us a Call";
const phoneNumberA=document.createElement("a")
phoneNumberA.textContent="201-293-7500";
phoneNumberA.href="tel:";
phoneNumberA.style.color=light;
phoneNumberDiv.append(phoneHeading, phoneNumberA);

const locationDiv=document.createElement("div");
const locationH3=document.createElement("h3");
locationH3.textContent="Located at:"
const locationP= document.createElement("p");
locationP.textContent="257 23nd St, NYC";
locationDiv.append(locationH3, locationP);

const emailDiv=document.createElement("div");
const emailH3=document.createElement("h3");
emailH3.textContent="Email us at:"
const emailP= document.createElement("p");
emailP.textContent="contact@nypizzeria.com";
emailDiv.append(emailH3, emailP);

const contactForm=document.createElement("form");

const fNameLabel=document.createElement("label")
fNameLabel.textContent="First Name";
fNameLabel.for="fNameContact";
fNameLabel.style.display="block";
fNameInput=document.createElement("input");
fNameInput.type="text";
fNameInput.id="fNameContact";
fNameInput.maxLength="30";
fNameInput.style.width="80%";

const lNameLabel=document.createElement("label")
lNameLabel.textContent="Last Name";
lNameLabel.for="lNameContact";
lNameLabel.style.display="block";
lNameInput=document.createElement("input");
lNameInput.type="text";
lNameInput.id="lNameContact";
lNameInput.maxLength="30";
lNameInput.style.width="80%";

const emailLabel=document.createElement("label")
emailLabel.textContent="Your Email";
emailLabel.for="emailContact";
emailLabel.style.display="block";
emailInput=document.createElement("input");
emailInput.type="email";
emailInput.id="emailContact";
emailInput.maxLength="50";
emailInput.style.width="80%";

const messageLabel=document.createElement("label")
messageLabel.textContent="Your message:"
messageLabel.style.display="block";
messageInput=document.createElement("textarea");
messageInput.name="message";
messageInput.id="contactMessage";
messageInput.style.width="80%";
messageInput.style.height="250px";
messageInput.maxLength="500";

const submitButton=document.createElement("button");
submitButton.type="submit";
submitButton.textContent="Submit";
submitButton.id="contactSubmit";
submitButton.style.display="block";
submitButton.style.margin="1rem auto";
submitButton.style.width="80%";

contactForm.append(fNameLabel, fNameInput, lNameLabel, lNameInput, emailLabel, emailInput, messageLabel, messageInput, submitButton)

contactWrapper.append(phoneNumberDiv, locationDiv, emailDiv, contactForm);
contactSec.appendChild(contactWrapper);

submitButton.addEventListener("click", (e)=>{
    e.preventDefault()
    const firstName=fNameInput.value.trim();
    const lastName=lNameInput.value.trim();
    const email=emailInput.value.trim();
    const message=messageInput.value.trim();
    if(firstName==""){
        alert("Please Enter your first name");
        return false;
    }
    if(lastName==""){
        alert("Please Enter your last name");
        return false;
    }
    if(email==""){
        alert("Please Enter your email");
        return false;
    }
    if(!email.includes("@")){
        alert("please enter a valid email");
        return false;
    }
    if(message==""){
        alert("Please Enter a message");
        return false;
    }
    alert(`Message to customer:
    Thanks ${firstName}, we will get back to you ASAP!`);
    alert(`Message to owner:
    ${firstName} ${lastName} at ${email} sent a message.
    ${message}`);
    firstName.value=""
    lastName.value=""
    email.value=""
    message.value=""    
})

