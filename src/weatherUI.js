import * as images from "./imagesImports";

function showMap(element) {
  ymaps3.ready.then(() => {
    new ymaps3.YMap(element.getElementById("YMapsID"), {
      location: {
        center: [37.64, 55.76],
        zoom: 10,
      },
    });
  });
}

export function createWeatherUI(mainElement, location) {
  let currentLocation;
  let locationTemperature;
  let locationWeatherIcon;
  // let currentlocationLink;
  console.log("create weatherUI", location);
  if (location.error) {
    currentLocation = "Your location is hidden";
    locationTemperature = "-";
    locationWeatherIcon = images.Clouds;
    // currentlocationLink = "#";
  } else {
    locationWeatherIcon = location.weather;
    currentLocation = location.name;
    locationTemperature = location.temperature;
    // currentlocationLink = "https://geocode-maps.yandex.ru/1.x?geocode=";
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
      <div id="YMapsID" style="width: 450px; height: 350px;"></div>
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
  showMap(mainElement);
}
