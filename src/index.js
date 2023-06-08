import "./styles/styles.css";
import { getCurrentLocation } from "./location";
import { getWeather } from "./weather";
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
    showWeather(mainElement, currentLocation);
  }

  function currentLocationFail() {
    const location = {
      error: true,
      latitude: 55.755864,
      longitude: 37.617698,
    };
    showWeather(mainElement, location);

    // getWeather(location)
    //   .then((location) => {
    //     //console.log("promise FAIL getWeather createWeatherUI", location);
    //     createWeatherUI(mainElement, location);
    //     //   console.log("result", location);
    //     // })
    //     // .then((location) => {
    //     //   console.log("result", location);
    //     //   console.log("promise FAIL getWeather showMap", location);
    //     showMap(mainElement, location);
    //   })
    //   .catch((error) => {
    //     console.log("Errrrrrrrrrrrrrooooor!!!");
    //     alert(error.message);
    //     // reject(new Error("Your location is hidden"));
    //   });
  }
}

export function showWeather(mainElement, location) {
  getWeather(location)
    .then((location) => {
      createWeatherUI(mainElement, location);
      showMap(mainElement, location);
    })
    .catch((error) => {
      console.log("Errrrrrrrrrrrrrooooor!!!");
      alert(error.message);
      // reject(new Error("Your location is hidden"));
    });
}

createWeatherApp(document.querySelector("#weatherApp"));
