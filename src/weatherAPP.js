import { getCurrentLocation } from "./getWeather";
import { createWeatherUI } from "./weatherUI";

export function createWeatherApp(mainElement) {
  let currentLocation = null;
  const currentLocationPromise = getCurrentLocation();
  currentLocationPromise
    .then((result) => {
      console.log("result", result);
      currentLocation = result;
      createWeatherUI(mainElement, currentLocation);
    })
    .catch((error) => {
      createWeatherUI(mainElement, error);
    });

  console.log("currentLocation", currentLocation);
}
