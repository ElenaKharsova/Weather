import * as images from "./imagesImports";
import { showMap } from "./map";
import { getWeather } from "./weather";
import { saveCities, readCities } from "./store";
import { addCity, drawList } from "./cities";

export function createWeatherUI(mainElement, location) {
  let currentLocation;
  let items = readCities();
  if (location instanceof Error) {
    currentLocation = "Hidden location";
  } else {
    currentLocation = location.name;
  }
  const locationTemperature = location.temperature;
  const locationWeatherIcon = location.weather;
  console.log("create weatherUI", location);
  mainElement.innerHTML = `
  <header class = "header">
    <div class = "location">
      <img src = ${images.location} alt ="images location" 
        class = "img-location"/> 
      <p>${currentLocation}</p>
    </div>
    <div class = "block data">
      <img src = ${images[locationWeatherIcon]} alt ="images weather" 
        class = "img-weather"/> 
      <p class = "temperature">${locationTemperature}</p>
    </div>
    <div class = "block">
      <div id="map"></div>
    </div>
  </header>
  <nav class = "block cities">
    <div>
      <input></input>
      <button>Enter</button>
    </div>
    <ul>    
    </ul>
  </nav>
  `;
  items = addCity(items, currentLocation);
  saveCities(items);
  drawList(mainElement);

  mainElement.querySelector("input").addEventListener("keypress", searchCity);
  mainElement.querySelector("button").addEventListener("click", searchCity);
  mainElement.querySelector("ul").addEventListener("click", updateCity);

  async function searchCity(target) {
    if (target.key !== "Enter" && target.type !== "click") {
      return;
    }
    const input = mainElement.querySelector("input");
    const inputCity = input.value;
    if (inputCity) {
      const location = { name: inputCity };
      getWeather(location).then((location) => {
        showMap(mainElement, location);
        updateWeatherUI(mainElement, location);
        items = addCity(items, location.name);
        saveCities(items);
        drawList(mainElement);
      });
      input.value = "";
    }
  }

  function updateCity(element) {
    const target = element.target.closest("li");
    location.name = target.innerHTML;
    getWeather(location).then((location) => {
      showMap(mainElement, location);
      updateWeatherUI(mainElement, location);
    });
  }

  return location;
}

export function updateWeatherUI(mainElement, location) {
  const currentLocation = location.name;
  const locationTemperature = location.temperature;
  const locationWeatherIcon = location.weather;
  mainElement.querySelector(".location p").innerHTML = `${currentLocation}`;
  mainElement.querySelector(
    ".temperature"
  ).innerHTML = `${locationTemperature}`;
  mainElement.querySelector(
    ".img-weather"
  ).attributes.src.value = `${images[locationWeatherIcon]}`;
}
