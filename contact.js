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


contactWrapper.append(phoneNumberDiv, locationDiv, emailDiv);
contactSec.appendChild(contactWrapper)

