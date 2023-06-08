export async function getWeather(location) {
  const apiKey = "20e031b2d73df17283a8750e66d1228e";
  let response = null;
  let json = null;
  console.log("getweather function");
  if (location.name) {
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location.name}&appid=${apiKey}&lang=ru`
    );
    json = await response.json();
    location.latitude = json.coord.lat;
    location.longitude = json.coord.lon;
  } else {
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&lang=ru`
    );
    json = await response.json();
    location.name = json.name;
  }

  location.temperature = Math.round(json.main.temp - 273.15);
  location.weather = json.weather[0].main;
  return location;
}
