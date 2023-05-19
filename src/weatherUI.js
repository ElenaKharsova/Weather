import * as images from "./imagesImports";
// import {ymaps, ymaps3} from "yandex-maps"

async function showMap(element, location) {
  // ymaps3 = window.ymaps3;
  const mapNode = element.querySelector("#map");
  mapNode.innerHTML = "";
  await ymaps3.ready;
  console.log("init function", location.latitude, location.longitude);
  const map = new ymaps3.YMap(mapNode, {
    location: {
      center: [location.latitude, location.longitude],
      zoom: 7,
    },
  });
  const layer = new YMapDefaultSchemeLayer();
  mapNode.addChild(layer);
  console.log("map", map);
  //   return map;
}

// ymaps3.ready.then(init);
// function init() {
//   console.log("init function", location.latitude, location.longitude);
//   const map = new ymaps3.YMap(mapNode, {
//     location: {
//       center: [location.latitude, location.longitude],
//       zoom: 7,
//     },
//   });
//   console.log("map", map);
//   return map;
// }
// const divMap = document.querySelector("#map");
// divMap.innerHTML = "";
// ymaps.ready(() => {
//   const map = new ymaps.Map("map", {
//     center: [location.latitude, location.longitude],
//     zoom: 10,
//   });
//   return map;
// });
// }

export function createWeatherUI(mainElement, location) {
  const locationTemperature = location.temperature;
  const locationWeatherIcon = location.weather;
  const currentLocation = location.name;

  // let currentlocationLink;
  console.log("create weatherUI", location);
  // if (location.error) {
  // currentLocation = "Your location is hidden";

  // locationTemperature = "-";

  // locationWeatherIcon = images.Clouds;
  // currentlocationLink = "#";
  // } else {
  // locationWeatherIcon = location.weather;

  // currentlocationLink = "https://geocode-maps.yandex.ru/1.x?geocode=";
  // `https://www.openstreetmap.org/export/embed.html?bbox=${location.longitude}%2C${location.latitude}&amp;layer=mapnik`;
  // `https://www.openstreetmap.org/#map=18/${location.latitude}/${location.longitude}`;
  // }

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
      <div id="map" style="width: 450px; height: 350px;"></div>
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
  // if (!location.error) {
  const ul = mainElement.querySelector("ul");
  const li = document.createElement("li");
  li.innerHTML = currentLocation;
  ul.appendChild(li);
  // }
  showMap(mainElement, location);
}
