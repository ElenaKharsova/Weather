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

  function getCoordinates() {
    return new Promise((resolve, geolocFail) => {
      navigator.geolocation.getCurrentPosition(resolve, geolocFail, options);
    });
  }

  function geolocFail() {
    clearTimeout(locationTimeout);
    location.error = true;
  }

  if (navigator.geolocation) {
    locationTimeout = setTimeout(geolocFail, 10000);
    const position = await getCoordinates();
    console.log("position", position);
    location.latitude = position.coords.latitude;
    location.longitude = position.coords.longitude;
  } else {
    geolocFail();
    location.error = true;
  }
  return location;
}

export async function getLocationName(location) {
  console.log("getLocationName function");
  const apiKey = "20e031b2d73df17283a8750e66d1228e";

  function getName() {
    return new Promise((location) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}`
      );
    });
  }
  const responseName = await getName(location);
  console.log("responseName", responseName);
  const json = await responseName.json();
  console.log("json", json);
  location.name = json.name;
  console.log("location.name", location.name);
  // getLocationName(apiKey);
  return location;
}
