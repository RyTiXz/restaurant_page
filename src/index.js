import "./styles.css"
import { homeScreen } from "./Home"
import { menuScreen } from "./menu"
import { aboutScreen } from "./about"

const HomeButtonSelector = document.querySelector(".home")
const menuButtonSelector = document.querySelector(".menu")
const aboutButtonSelector = document.querySelector(".about")
const contentSelector = document.querySelector("#content")

function empty(element) {
    while(element.firstElementChild) {
        element.firstElementChild.remove();
    }
}

HomeButtonSelector.addEventListener("click", () => {
    empty(contentSelector)
    homeScreen();
});

menuButtonSelector.addEventListener("click", () => {
    empty(contentSelector)
    menuScreen();
});

aboutButtonSelector.addEventListener("click", () => {
    empty(contentSelector)
    aboutScreen();
});

homeScreen();