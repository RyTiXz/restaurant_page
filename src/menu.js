// Querry Selector
const contentSelector = document.querySelector("#content")

// Imports
import buffaloImage from "../img/buffaloBanner2.png"

const img = document.createElement("img");
img.src= buffaloImage;
img.alt="Picture of a buffalo"
img.id="buffaloBanner"

const menuHeader = document.createElement("h1")
menuHeader.textContent = "Menu"

const menuOne = document.createElement("h2")
menuOne.textContent = "Lentil Bolognese"

const menuOneDescription = document.createElement("p")
menuOneDescription.className = "menuDescription"
menuOneDescription.textContent = "A hearty, plant-based take on the Italian classic"

const menuTwo = document.createElement("h2")
menuTwo.textContent = "Butternut Squash Risotto"
menuTwo
const menuTwoDescription = document.createElement("p")
menuTwoDescription.className = "menuDescription"
menuTwoDescription.textContent = "A creamy, comforting dish"

const menuThree = document.createElement("h2")
menuThree.textContent = "Miso Tofu Wrap"

const menuThreeDescription = document.createElement("p")
menuThreeDescription.className = "menuDescription"
menuThreeDescription.textContent = "A flavorful and filling wrap"


// Exports
export function menuScreen() {
    contentSelector.appendChild(img);
    contentSelector.appendChild(menuHeader);
    menuHeader.appendChild(menuOne);
    menuOne.appendChild(menuOneDescription);
    menuHeader.appendChild(menuTwo);
    menuTwo.appendChild(menuTwoDescription);
    menuHeader.appendChild(menuThree);
    menuThree.appendChild(menuThreeDescription);
}