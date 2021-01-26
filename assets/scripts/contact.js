const contactSec = document.getElementById("contact");
// creates wrapper
const contactWrapper=document.createElement("div");
contactWrapper.className="wrapper";
contactWrapper.style.border=`.25rem solid ${light}`;
// creates store phone number
const phoneNumberDiv=document.createElement("div");
const phoneHeading=document.createElement("h3");
phoneHeading.textContent="Give us a Call";
const phoneNumberA=document.createElement("a")
phoneNumberA.textContent="201-293-7500";
phoneNumberA.href="tel:";
phoneNumberA.style.color=light;
phoneNumberDiv.append(phoneHeading, phoneNumberA);
// creates location div
const locationDiv=document.createElement("div");
const locationH3=document.createElement("h3");
locationH3.textContent="Located at:"
const locationP= document.createElement("p");
locationP.textContent="257 23nd St, NYC";
locationDiv.append(locationH3, locationP);
// creates email div
const emailDiv=document.createElement("div");
const emailH3=document.createElement("h3");
emailH3.textContent="Email us at:"
const emailP= document.createElement("p");
emailP.textContent="contact@nypizzeria.com";
emailDiv.append(emailH3, emailP);
// creates a contact form
const contactForm=document.createElement("form");
// creates first name for contact form
const fNameLabel=document.createElement("label")
fNameLabel.textContent="First Name";
fNameLabel.for="fNameContact";
fNameLabel.style.display="block";
fNameInput=document.createElement("input");
fNameInput.type="text";
fNameInput.id="fNameContact";
fNameInput.maxLength="30";
fNameInput.style.width="80%";
// creates last name for contact form
const lNameLabel=document.createElement("label")
lNameLabel.textContent="Last Name";
lNameLabel.for="lNameContact";
lNameLabel.style.display="block";
lNameInput=document.createElement("input");
lNameInput.type="text";
lNameInput.id="lNameContact";
lNameInput.maxLength="30";
lNameInput.style.width="80%";
// creates email  for contact form
const emailLabel=document.createElement("label")
emailLabel.textContent="Your Email";
emailLabel.for="emailContact";
emailLabel.style.display="block";
emailInput=document.createElement("input");
emailInput.type="email";
emailInput.id="emailContact";
emailInput.maxLength="50";
emailInput.style.width="80%";
// creates message textarea
const messageLabel=document.createElement("label")
messageLabel.textContent="Your message:"
messageLabel.style.display="block";
messageInput=document.createElement("textarea");
messageInput.name="message";
messageInput.id="contactMessage";
messageInput.style.width="80%";
messageInput.style.height="250px";
messageInput.maxLength="500";
// creates submit button
const submitButton=document.createElement("button");
submitButton.type="submit";
submitButton.textContent="Submit";
submitButton.id="contactSubmit";
submitButton.style.display="block";
submitButton.style.margin="1rem auto";
submitButton.style.width="80%";
// appends all to form
contactForm.append(fNameLabel, fNameInput, lNameLabel, lNameInput, emailLabel, emailInput, messageLabel, messageInput, submitButton)
// creates a contact wrapper
contactWrapper.append(phoneNumberDiv, locationDiv, emailDiv, contactForm);
contactSec.appendChild(contactWrapper);
// submits contact form
submitButton.addEventListener("click", (e)=>{
    e.preventDefault()
    const firstName=fNameInput.value.trim();
    const lastName=lNameInput.value.trim();
    const email=emailInput.value.trim();
    const message=messageInput.value.trim();
    // validates form
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
    // resets form
    fNameInput.value=""
    lNameInput.value=""
    emailInput.value=""
    messageInput.value=""    
})

