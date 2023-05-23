import * as images from "./imagesImports";
// import { searchCity } from "./weatherAPP";

export function createWeatherUI(mainElement, location) {
  let currentLocation;
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
  const ul = mainElement.querySelector("ul");
  const li = document.createElement("li");
  li.innerHTML = currentLocation;
  ul.appendChild(li);
  console.log("return loc UI", location);

  mainElement.querySelector("button").addEventListener("click", searchCity);

  async function searchCity() {
    const apiKey = "20e031b2d73df17283a8750e66d1228e";

    const inputCity = mainElement.querySelector("input").value;
    if (inputCity) {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&lang=ru`
      )
        .then((json) => {
          console.log("json", json);
          // location.name = json.name;
          // location.temperature = Math.round(json.main.temp - 273.15);
          // location.weather = json.weather[0].main;
          // const newlocation = [30.2642,59.8944];
          // changeCenter(map, location);
        })
        .catch((error) => {
          console.log("inputCity Error!!!");
          alert(error.message);
          // reject(new Error("Your location is hidden"));
        });
    }
  }

  return location;
}
