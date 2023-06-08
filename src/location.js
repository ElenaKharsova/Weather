export async function getCurrentLocation() {
  console.log("getCurrentLocation function");

  let locationTimeout;
  const options = {
    enableHighAccuracy: true,
    maximumAge: 1000,
    timeout: 3600,
  };
  const location = {};

  function getCoordinates() {
    clearTimeout(locationTimeout);
    return new Promise((resolve, geolocFail) => {
      navigator.geolocation.getCurrentPosition(resolve, geolocFail, options);
    });
  }

  function geolocFail() {
    clearTimeout(locationTimeout);
    reject(new Error("Your location is hidden"));
  }

  if (navigator.geolocation) {
    locationTimeout = setTimeout(geolocFail, 10000);
    const position = await getCoordinates();
    location.latitude = position.coords.latitude;
    location.longitude = position.coords.longitude;
  } else {
    geolocFail();
  }
  return location;
}
