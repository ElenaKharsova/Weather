export function saveCities(items) {
  localStorage.setItem("cities", JSON.stringify(items));
}

export function readCities() {
  const cities = JSON.parse(localStorage.getItem("cities"));
  return cities ?? [];
}
