// Querry Selector
const contentSelector = document.querySelector("#content")

// Imports
import buffaloImage from "../img/buffaloBanner2.png"

const img = document.createElement("img");
img.src= buffaloImage;
img.alt="Picture of a buffalo"
img.id="buffaloBanner"

const aboutHeader = document.createElement("h1")
aboutHeader.textContent = "Contact Us"

const HeaderDiv = document.createElement("div")
HeaderDiv.className = "contactDetails"

const contactDetailsName = document.createElement("h2")
contactDetailsName.textContent = "Grazing Ryan"

const contactDetailsEmployment = document.createElement("p")
contactDetailsEmployment.textContent = "Chef"

const contactDetailsPhone = document.createElement("p")
contactDetailsPhone.textContent = "+49 123 12345678"

const contactDetailsMail = document.createElement("p")
contactDetailsMail.textContent = "FakeMail@dontFallForIt.com"

// Exports
export function aboutScreen() {
    contentSelector.appendChild(img)
    contentSelector.appendChild(aboutHeader)
    contentSelector.appendChild(HeaderDiv)
    HeaderDiv.appendChild(contactDetailsName)
    HeaderDiv.appendChild(contactDetailsEmployment)
    HeaderDiv.appendChild(contactDetailsPhone)
    HeaderDiv.appendChild(contactDetailsMail)
}