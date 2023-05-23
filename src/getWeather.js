export async function getWeather(location) {
  const apiKey = "20e031b2d73df17283a8750e66d1228e";

  console.log("getweather function");
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&lang=ru`
  );
  const json = await response.json();
  location.name = json.name;
  console.log("json first", json);
  location.temperature = Math.round(json.main.temp - 273.15);
  location.weather = json.weather[0].main;
  return location;
}
