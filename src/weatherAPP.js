import { getCurrentLocation } from "./getWeather";
import { createWeatherUI } from "./weatherUI";

export function createWeatherApp(mainElement) {
  // const currentLocation = null;
  const currentLocationPromise = getCurrentLocation();
  currentLocationPromise
    .then((currentLocation) => {
      console.log("result", currentLocation);
      // currentLocation = result;
      createWeatherUI(mainElement, currentLocation);
    })
    .catch((error) => {
      createWeatherUI(mainElement, error);
    });

  // console.log("currentLocation", currentLocation);
}
