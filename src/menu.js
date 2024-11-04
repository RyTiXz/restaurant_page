// Querry Selector
const contentSelector = document.querySelector("#content")

// Imports
import buffaloImage from "../img/buffaloBanner2.png"

const img = document.createElement("img");
img.src= buffaloImage;
img.alt="Picture of a buffalo"
img.id="buffaloBanner"



// Exports
export function menuScreen() {
    contentSelector.appendChild(img)

}