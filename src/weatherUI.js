import * as images from "./imagesImports";
import { showMap } from "./map";

export function createWeatherUI(mainElement, location) {
  const locationTemperature = location.temperature;
  const locationWeatherIcon = location.weather;
  const currentLocation = location.name;

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
  const ul = mainElement.querySelector("ul");
  const li = document.createElement("li");
  li.innerHTML = currentLocation;
  ul.appendChild(li);
  showMap(mainElement, location);
}
