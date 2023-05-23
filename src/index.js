import "./styles/styles.css";
import { getCurrentLocation } from "./getLocation";
import { getWeather } from "./getWeather";
import { createWeatherUI } from "./weatherUI";
import { showMap } from "./map";

function createWeatherApp(mainElement) {
  console.log("createWeatherApp function");
  getCurrentLocation()
    .then(currentLocationSuccess, currentLocationFail)
    .catch((error) => {
      createWeatherUI(mainElement, error);
    });

  function currentLocationSuccess(currentLocation) {
    getWeather(currentLocation).then((currentLocation) => {
      console.log("promise success getWeather createWeatherUI");
      createWeatherUI(mainElement, currentLocation);
      // })
      // .then((currentLocation) => {
      //   console.log("promise success getWeather showMap");
      showMap(mainElement, currentLocation);
    });
  }

  function currentLocationFail() {
    const location = {
      error: true,
      latitude: 39.4455415,
      longitude: -0.3737121,
    };
    getWeather(location)
      .then((location) => {
        console.log("promise FAIL getWeather createWeatherUI", location);
        createWeatherUI(mainElement, location);
        //   console.log("result", location);
        // })
        // .then((location) => {
        //   console.log("result", location);
        //   console.log("promise FAIL getWeather showMap", location);
        showMap(mainElement, location);
      })
      .catch((error) => {
        console.log("Errrrrrrrrrrrrrooooor!!!");
        alert(error.message);
        // reject(new Error("Your location is hidden"));
      });
  }
}

createWeatherApp(document.querySelector("#weatherApp"));
