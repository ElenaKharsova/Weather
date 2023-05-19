import { getCurrentLocation } from "./getLocation";
import { getWeather } from "./getWeather";
import { createWeatherUI } from "./weatherUI";

export function createWeatherApp(mainElement) {
  console.log("createWeatherApp function");
  getCurrentLocation()
    .then(currentLocationSuccess, currentLocationFail)
    .catch((error) => {
      createWeatherUI(mainElement, error);
    });

  function currentLocationSuccess(currentLocation) {
    getWeather(currentLocation).then((currentLocation) => {
      createWeatherUI(mainElement, currentLocation);
    });
  }

  function currentLocationFail() {
    const location = {
      error: true,
      latitude: 39.4455415,
      longitude: -0.3737121,
    };
    const weather = getWeather(location);
    weather.then((currentLocation) => {
      createWeatherUI(mainElement, currentLocation);
    });
  }
}
