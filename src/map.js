import { YMap, YMapDefaultSchemeLayer } from "ymaps3";

export function showMap(element, location) {
  const mapNode = element.querySelector("#map");
  const LOCATION = {
    center: [location.longitude, location.latitude],
    zoom: 15,
  };

  const map = new YMap(mapNode, { location: LOCATION });
  map.addChild(new YMapDefaultSchemeLayer());
  console.log("center", map.center);
}
