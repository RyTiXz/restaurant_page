// Querry Selector
const contentSelector = document.querySelector("#content")

// Imports
import buffaloImage from "../img/buffaloBanner2.png"

// Creations
const img = document.createElement("img");
img.src= buffaloImage;
img.alt="Picture of a buffalo"
img.id="buffaloBanner"

const headerOne = document.createElement("h1");
headerOne.textContent = "Restaurant to the Grazing Buffalo"

const recommendation = document.createElement("div")
recommendation.className = "recommendation"

const recommendationText = document.createElement("p")
recommendationText.textContent = "\"The Grazing Buffolo has without doubt the best vegan dishes I have ever eaten. I cannot recomment enough to give this beautiful restaurant a chance!\""

const hours = document.createElement("div")
hours.className = "hours"

const openingHoursHeader = document.createElement("h2")
openingHoursHeader.textContent = "Opening Hours"

const monday = document.createElement("p")
monday.textContent = "Monday: 6am - 6pm"

const thuesday = document.createElement("p")
thuesday.textContent = "Thuesday: 6am - 6pm"

const thursday = document.createElement("p")
thursday.textContent = "Thursday: 6am - 10pm"

const friday = document.createElement("p")
friday.textContent = "Friday: 6am - 10pm"

const saturday = document.createElement("p")
saturday.textContent = "Saturday: 8am - 10pm"

const sunday = document.createElement("p")
sunday.textContent = "Sunday: 8am - 8pm"

const location = document.createElement("div")
location.className = "location"

const locationHeader = document.createElement("h2")
locationHeader.textContent = "Location:"

const locationText = document.createElement("p")
locationText.textContent = "Thisstreet 5, 12345 Example Town, Wonderland"

// Export Function
export function homeScreen() {
    contentSelector.appendChild(img)
    contentSelector.appendChild(headerOne)
    contentSelector.appendChild(recommendation)
    recommendation.appendChild(recommendationText)
    contentSelector.appendChild(hours)
    hours.appendChild(openingHoursHeader)
    hours.appendChild(monday)
    hours.appendChild(thuesday)
    hours.appendChild(thursday)
    hours.appendChild(friday)
    hours.appendChild(saturday)
    hours.appendChild(sunday)
    contentSelector.appendChild(location)
    location.appendChild(locationHeader)
    location.appendChild(locationText)
}