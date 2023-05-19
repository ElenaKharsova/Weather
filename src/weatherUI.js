import * as images from "./imagesImports";

export function createWeatherUI(mainElement, location) {
  let currentLocation;
  let locationTemperature;
  let locationWeatherIcon;
  let currentlocationLink;
  console.log("create weatherUI", location);
  if (location.error) {
    currentLocation = "Your location is hidden";
    locationTemperature = "-";
    locationWeatherIcon = images.Clouds;
    currentlocationLink = "#";
  } else {
    console.log(" location.name", location.name);
    console.log(" location.error", location.error);
    locationWeatherIcon = location.weather;
    console.log("locationWeatherIcon", locationWeatherIcon);
    console.log("images[locationWeatherIcon]", images[locationWeatherIcon]);
    currentLocation = location.name;
    locationTemperature = location.temperature;
    currentlocationLink = "https://geocode-maps.yandex.ru/1.x?geocode=";
    // `https://www.openstreetmap.org/export/embed.html?bbox=${location.longitude}%2C${location.latitude}&amp;layer=mapnik`;
    // `https://www.openstreetmap.org/#map=18/${location.latitude}/${location.longitude}`;
  }

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
        <img src= ${currentlocationLink}/>
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
  if (!location.error) {
    const ul = mainElement.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = currentLocation;
    ul.appendChild(li);
  }
}
