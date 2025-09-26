import { createWeatherUI, updateWeatherUI } from "../weatherUI";

describe("Create weather app", () => {
  const mainApp = document.createElement("div");
  let location = {};

  beforeEach(() => {
    location = {
      name: "Tver",
      temperature: "25",
      weather: "Thunderstorm",
    };

    createWeatherUI(mainApp, location);
    // const script = document.createElement("script");
    // script.setAttribute("type", "text/javascript");
    // script.setAttribute("src", "https://api-maps.yandex.ru/3.0/?apikey=c8efdf97-cb56-4062-ac67-2f5c7b9305fe&lang=ru_RU");
    // mainApp.appendChild(script);

    // console.log(mainApp.outerHTML);
  });

  it("All components have been created", () => {
    expect(mainApp.querySelector("header.header")).toBeTruthy();
    expect(mainApp.querySelector("header > div.location")).toBeTruthy();
    expect(mainApp.querySelector("header > div.location > img")).toBeTruthy();
    expect(mainApp.querySelector("header > div.location > img")).toBeTruthy();
    expect(mainApp.querySelector("header > div.location > p")).toBeTruthy();
    expect(mainApp.querySelector("header > div.block.data")).toBeTruthy();
    expect(mainApp.querySelector("header > div.block.data > img")).toBeTruthy();
    expect(
      mainApp.querySelector("header > div.block.data > p.temperature")
    ).toBeTruthy();
    expect(mainApp.querySelector("header > div.block > div#map")).toBeTruthy();
    expect(mainApp.querySelector("nav.block.cities")).toBeTruthy();
    expect(mainApp.querySelector("nav > div > input")).toBeTruthy();
    expect(mainApp.querySelector("nav > div > button")).toBeTruthy();
    expect(mainApp.querySelector("nav > div > button").innerHTML).toBe("Enter");
    expect(mainApp.querySelector("nav > ul")).toBeTruthy();
  });

  it("The weather information is presented correctly", () => {
    expect(mainApp.querySelector(".location p").innerHTML).toBe(location.name);
    expect(mainApp.querySelector(".temperature").innerHTML).toBe(
      location.temperature
    );
    // expect(mainApp.querySelector(".img-weather").attributes.src.value)
    // .toBe(`${location.weather}`);
  });

  it("Update data", () => {
    const newLocation = {
      name: "Москва",
      temperature: "19",
      weather: "Drizzle",
    };
    updateWeatherUI(mainApp, newLocation);
    expect(mainApp.querySelector(".location p").innerHTML).toBe(
      newLocation.name
    );
    expect(mainApp.querySelector(".temperature").innerHTML).toBe(
      newLocation.temperature
    );
    // expect(mainApp.querySelector(".img-weather").attributes.src.value)
    // .toBe(`${location.weather}`);
  });
});

// mainElement.querySelector(".location p").innerHTML = `${currentLocation}`;
//   mainElement.querySelector(
//     ".temperature"
//   ).innerHTML = `${locationTemperature}`;
//   mainElement.querySelector(
//     ".img-weather"
//   ).attributes.src.value = `${images[locationWeatherIcon]}`;
