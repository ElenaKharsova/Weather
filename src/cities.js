import { readCities } from "./store";

export function addCity(items, item) {
  const cities = items.filter(
    (city) => city.toLowerCase() !== item.toLowerCase()
  );
  cities.unshift(item);
  if (cities.length > 10) {
    cities.pop();
  }
  return cities;
}

export function drawList(element) {
  const cities = readCities();
  const citiesList = element.querySelector("ul");
  citiesList.innerHTML = `${cities.map((city) => `<li>${city}</li>`).join("")}`;
}
