import { getCurrentLocation, getLocationName } from "./getWeather";
import { createWeatherUI } from "./weatherUI";

export async function createWeatherApp(mainElement) {
  console.log("createWeatherApp function");
  const currentLocationPromise = await getCurrentLocation();
  currentLocationPromise
    .then((currentLocation) => {
      console.log("getCurrentLocation pomise success", currentLocation);
      getLocationName(currentLocation);
    })
    .then((currentLocation) => {
      console.log("getLocationName pomise success", currentLocation);
      createWeatherUI(mainElement, currentLocation);
    })
    .catch((error) => {
      createWeatherUI(mainElement, error);
    });
}
