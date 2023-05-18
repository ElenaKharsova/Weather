import { getCurrentLocation } from "./getLocation";
import { getWeather } from "./getWeather";
import { createWeatherUI } from "./weatherUI";

export function createWeatherApp(mainElement) {
  console.log("createWeatherApp function");
  const currentLocationPromise = getCurrentLocation();
  currentLocationPromise
    .then((currentLocation) => {
      console.log("getCurrentLocation pomise success", currentLocation);
      const weather = getWeather(currentLocation);
      weather.then((currentLocation) => {
        console.log("getLocationName pomise success", currentLocation);
        createWeatherUI(mainElement, currentLocation);
      });
    })
    .catch((error) => {
      createWeatherUI(mainElement, error);
    });
}
