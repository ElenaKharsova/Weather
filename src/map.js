import { YMap, YMapDefaultSchemeLayer } from "ymaps3";

export function showMap(element, location) {
  console.log("show map function");
  console.log("location", location);

  const mapNode = element.querySelector("#map");
  const LOCATION = {
    center: [location.longitude, location.latitude],
    zoom: 12,
  };

  const map = new YMap(mapNode, { location: LOCATION });
  map.addChild(new YMapDefaultSchemeLayer());
}

export function changeCenter(map, newLocation) {
  map.update({
    location: {
      center: newLocation,
      zoom: 12,
    },
  });
}
