export async function getCurrentLocation() {
  console.log("getCurrentLocation");
  // const response = await fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=c768bc4e962d2a69c28ba404045dc96c`
  //   //`https://get.geojs.io/v1/ip/geo.json`
  //   );
  // console.log("response.status", response);
  // const json = await response.json();
  // console.log(json.name);
  // return json.name;

  const options = {
    enableHighAccuracy: true,
    maximumAge: 1000,
    timeout: 3600,
  };
  console.log(navigator.geolocation);

  let locationTimeout;

  function geolocSuccess(position) {
    clearTimeout(locationTimeout);
    console.log("position", position);

    const { latitude, longitude } = position.coords;
    console.log("coords:", latitude, longitude);
  }

  function geolocFail() {
    clearTimeout(locationTimeout);
    console.error("Your current location is hidden");
  }

  if (navigator.geolocation) {
    locationTimeout = setTimeout(geolocFail(), 5000);
    navigator.geolocation.getCurrentPosition(
      geolocSuccess,
      geolocFail,
      options
    );
  } else {
    console.log("!navigator.geo");
    geolocFail();
  }
}
