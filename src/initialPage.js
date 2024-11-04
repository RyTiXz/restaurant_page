// Querry Selector
const contentSelector = document.querySelector("#content")

// Imports
import buffaloImage from "../img/buffaloBanner2.png"

// Creations
const img = document.createElement("img");
img.src= buffaloImage;
img.alt="Picture of a buffalo"
img.id="buffaloBanner"
contentSelector.appendChild(img)

const headerOne = document.createElement("h1");
headerOne.textContent = "Restaurant to the Grazing Buffalo"
contentSelector.appendChild(headerOne)


const recommendation = document.createElement("div")
recommendation.className = "recommendation"
contentSelector.appendChild(recommendation)

const recommendationText = document.createElement("p")
recommendationText.textContent = "\"The Grazing Buffolo has without doubt the best vegan dishes I have ever eaten. I cannot recomment enough to give this beautiful restaurant a chance!\""
recommendation.appendChild(recommendationText)


const hours = document.createElement("div")
hours.className = "hours"
contentSelector.appendChild(hours)

const openingHoursHeader = document.createElement("h2")
openingHoursHeader.textContent = "Opening Hours"
hours.appendChild(openingHoursHeader)

const monday = document.createElement("p")
monday.textContent = "Monday: 6am - 6pm"
hours.appendChild(monday)

const thuesday = document.createElement("p")
thuesday.textContent = "Thuesday: 6am - 6pm"
hours.appendChild(thuesday)

const thursday = document.createElement("p")
thursday.textContent = "Thursday: 6am - 10pm"
hours.appendChild(thursday)

const friday = document.createElement("p")
friday.textContent = "Friday: 6am - 10pm"
hours.appendChild(friday)

const saturday = document.createElement("p")
saturday.textContent = "Saturday: 8am - 10pm"
hours.appendChild(saturday)

const sunday = document.createElement("p")
sunday.textContent = "Sunday: 8am - 8pm"
hours.appendChild(sunday)


const location = document.createElement("div")
location.className = "location"
contentSelector.appendChild(location)

const locationHeader = document.createElement("h2")
locationHeader.textContent = "Location:"
location.appendChild(locationHeader)

const locationText = document.createElement("p")
locationText.textContent = "Thisstreet 5, 12345 Example Town, Wonderland"
location.appendChild(locationText)