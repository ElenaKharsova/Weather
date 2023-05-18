export async function getCurrentLocation() {
  console.log("getCurrentLocation function");

  let locationTimeout;
  const options = {
    enableHighAccuracy: true,
    maximumAge: 1000,
    timeout: 3600,
  };
  const location = {
    error: false,
  };

  function geolocSuccess(position) {
    clearTimeout(locationTimeout);
    console.log("geolocSuccess function", location);
    location.latitude = position.coords.latitude;
    location.longitude = position.coords.longitude;
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
  // if (!location.error) {
  //     // const apiKey = "20e031b2d73df17283a8750e66d1228e";
  //     // const response = await fetch(
  //     //   `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}`
  //     // );
  //     // const json = await response.json();
  //     // location.name = json.name;
  // }
  return location;
}

export async function getLocationName(location) {
  console.log("getLocationName function");
  const apiKey = "20e031b2d73df17283a8750e66d1228e";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}`
  );
  const json = await response.json();
  console.log("json", json);
  location.name = json.name;
  console.log("location.name", location.name);
  getLocationName(apiKey);
  return location;
}
