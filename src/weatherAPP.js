import { getCurrentLocation } from "./getLocation";
import { getWeather } from "./getWeather";
import { createWeatherUI } from "./weatherUI";

export function createWeatherApp(mainElement) {
  console.log("createWeatherApp function");
  const currentLocationPromise = getCurrentLocation();
  currentLocationPromise
    .then(currentLocationSuccess, currentLocationFail)
    .catch((error) => {
      console.log("location was rejected");
      createWeatherUI(mainElement, error);
    });

  function currentLocationSuccess(currentLocation) {
    console.log("getCurrentLocation pomise success", currentLocation);
    const weather = getWeather(currentLocation);
    weather.then((currentLocation) => {
      console.log("getLocationName pomise success", currentLocation);
      createWeatherUI(mainElement, currentLocation);
    });
  }

  function currentLocationFail() {
    const location = {
      error: true,
      latitude: 39.4455415,
      longitude: -0.3737121,
    };
    console.log("currentLocationFail function");
    const weather = getWeather(location);
    weather.then((currentLocation) => {
      console.log("getLocationName pomise success", currentLocation);
      createWeatherUI(mainElement, currentLocation);
    });
  }
}
