export async function getCurrentLocation() {
  const options = {
    enableHighAccuracy: true,
    maximumAge: 1000,
    timeout: 3600,
  };

  let locationTimeout;
  const location = {
    error: false,
  };

  async function geolocSuccess(position) {
    clearTimeout(locationTimeout);
    location.latitude = position.coords.latitude;
    location.longitude = position.coords.longitude;
    const apiKey = "20e031b2d73df17283a8750e66d1228e";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}`
    );
    const json = await response.json();
    location.name = json.name;
  }

  function geolocFail() {
    clearTimeout(locationTimeout);
    location.error = true;
  }

  if (navigator.geolocation) {
    locationTimeout = setTimeout(geolocFail, 10000);
    navigator.geolocation.getCurrentPosition(
      geolocSuccess,
      geolocFail,
      options
    );
  } else {
    geolocFail();
    location.error = true;
  }
  return location;
}
