export async function getWeather(location) {
  console.log("getweather function");
  console.log("location", location);
  const apiKey = "20e031b2d73df17283a8750e66d1228e";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}`
  );
  const json = await response.json();
  console.log("json", json);
  location.name = json.name;
  location.temperature = Math.round(json.main.temp - 273.15);
  location.weather = json.weather[0].main;
  console.log("location weather", location);
  return location;
}
