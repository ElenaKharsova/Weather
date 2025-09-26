import "./styles/styles.css";
import { getCurrentLocation } from "./location";
import { getWeather } from "./weather";
import { createWeatherUI } from "./weatherUI";
import { showMap } from "./map";
import { addCity, drawList } from "./cities";
import { saveCities, readCities } from "./store";

function createWeatherApp(mainElement) {
  getCurrentLocation()
    .then(
      (currentLocation) => currentLocationSuccess(currentLocation),
      currentLocationFail(mainElement)
    )
    .catch(() => {
      throw new Error("Your location is hidden");
    });

  function currentLocationSuccess(currentLocation) {
    showWeather(mainElement, currentLocation);
  }

  function currentLocationFail(mainElement) {
    const location = {
      error: true,
      latitude: 55.755864,
      longitude: 37.617698,
    };
    showWeather(mainElement, location);
  }
}

function showWeather(mainElement, location) {
  getWeather(location)
    .then((location) => createWeatherUI(mainElement, location))
    .then((location) => showMap(mainElement, location))
    .then((location) => {
      let items = readCities();
      items = addCity(items, location.name);
      saveCities(items);
      drawList(mainElement);
    })
    .catch((error) => {
      throw error;
    });
}

createWeatherApp(document.querySelector("#weatherApp"));
