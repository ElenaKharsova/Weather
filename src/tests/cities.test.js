import { addCity, drawList } from "../cities";
import { createWeatherUI } from "../weatherUI";
import { saveCities, readCities } from "../store";

const setLocalStorage = (data) => {
  window.localStorage.setItem("cities", JSON.stringify(data));
};
describe("Testing cities", () => {
  let cities = beforeEach(() => {
    cities = ["Moscow", "Tver", "Valencia"];
  });
  it("New city is added correctly", () => {
    const newCity = "Omsk";
    const newCityList = addCity(cities, newCity);
    cities.unshift(newCity);
    expect(JSON.stringify(newCityList)).toBe(JSON.stringify(cities));
  });

  it("Add the existing city", () => {
    const newCity = "Tver";
    const deletedCityIndex = cities.indexOf(newCity);
    cities.splice(deletedCityIndex, 1);

    const returnedCities = addCity(cities, newCity);
    cities.unshift(newCity);
    expect(JSON.stringify(returnedCities)).toBe(JSON.stringify(cities));
  });

  it("The cities is more than 10", () => {
    let newCityList = cities.slice();
    for (let i = 0; i < 10; i++) {
      newCityList = addCity(newCityList, i.toString());
      cities.unshift(i.toString());
    }
    for (let i = 0; i < 3; i++) {
      cities.pop();
    }
    expect(JSON.stringify(newCityList)).toBe(JSON.stringify(cities));
  });
});

describe("Testing drawing cities", () => {
  const mainApp = document.createElement("div");
  let location = {};
  let mockJson = {};
  beforeEach(() => {
    location = {
      name: "Tver",
      temperature: "25",
      weather: "Thunderstorm",
    };

    createWeatherUI(mainApp, location);
    mockJson = ["Tver", "Moscow", "Valencia"];

    const mockSaveLocalStorage = jest.fn(saveCities);
    mockSaveLocalStorage.mockImplementation(setLocalStorage);
  });
  afterEach(() => {
    localStorage.clear();
  });
  it("The cities list are empty", () => {
    drawList(mainApp);
    expect(mainApp.querySelector("nav > ul > li")).toBeFalsy();
  });
  it("The cities list aren't empty", () => {
    saveCities(mockJson);
    drawList(mainApp);
    const allLI = mainApp.querySelectorAll("nav > ul > li");

    expect(mainApp.querySelector("nav > ul > li")).toBeTruthy();
    for (let i = 0; i < mockJson.length; i++) {
      expect(allLI[i].innerHTML).toBe(mockJson[i]);
    }
  });
});
