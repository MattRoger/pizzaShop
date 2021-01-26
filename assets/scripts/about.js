const introMessage=`N.Y. Pizzeria was founded in 1965 by the Pepperoni brothers, Saul and Dino. Two life long New Yorkers with the dream of making the best pizza in the world. After 35 years of making living their dream, the brothers retired in 2000 and handed their business to their sons. Sauls son Tony is a world class pizza chef who trained under pizza masters in Naples Italy. Dino's son Roco is the best selling author of the book `
const aboutSpan=document.createElement("span");
aboutSpan.textContent="'Know your Pizza, a Guide to the worlds best pizza'."
aboutSpan.style.fontStyle="italic";
const introMessage2="Today the two of them create amazing pies and slices that everyone will love"

const secondMessage="The paragraph above is fiction, but it could be about you and your restaurant. The following text is lorem ispum and can be replaced with any text you would like."

const lorem1="Pizza ipsum dolor amet nisi non extra sauce string cheese. Adipisicing meatball excepteur mollit et philly chicken. Ad esse white garlic, red onions ranch chicken and bacon nisi. Garlic parmesan ullamco bbq rib, est lorem spinach minim. Pepperoni ullamco occaecat do chicken NY style. Pepperoni aliqua ut, excepteur aute duis pineapple pepperoni esse laboris extra sauce pie et chicken wing. Ad adipisicing bbq sauce meat lovers."

const lorem2="Pizza nulla ullamco consequat chicken wing ad nostrud buffalo sauce ut veniam pineapple in steak peppers red onions. Dolore irure pineapple deep crust. Mayo sint ut esse reprehenderit, garlic voluptate eu laborum melted cheese pepperoni bbq rib ham garlic parmesan. Tempor ea platter, aliquip duis in melted cheese anchovies bacon & tomato hand tossed consequat. Personal pesto buffalo sauce parmesan esse labore white garlic in aliqua chicken nisi anchovies."

const aboutSec =document.getElementById("about")

const aboutWrapper=document.createElement("div"); 
aboutWrapper.className="wrapper";
aboutWrapper.style.border=`.25rem solid ${light}`;
aboutWrapper.style.padding="1rem";
const figure=document.createElement("figure");
const figcaption=document.createElement("figcaption");
figcaption.textContent="Saul making pizzas in 1970"
const aboutImage=document.createElement("img");
aboutImage.src="./assets/images/aboutImageMain.jpg";
aboutImage.alt="the pizza family";
aboutImage.style.border=`.15rem solid ${greenChalk}`;
figure.append(aboutImage,figcaption)
const introPara=document.createElement("p");
introPara.textContent=introMessage;
introPara.append(aboutSpan , introMessage2)
const secondPara=document.createElement("p");
secondPara.textContent= secondMessage + lorem1;
const thirdPara=document.createElement("p");
thirdPara.textContent=lorem2;

aboutWrapper.append(figure, introPara, secondPara, thirdPara);
aboutSec.append(aboutWrapper);
