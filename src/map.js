import { YMap, YMapDefaultSchemeLayer } from "ymaps3";

export async function showMap(element, location) {
  const mapNode = element.querySelector("#map");
  if (mapNode.innerHTML) {
    mapNode.innerHTML = "";
  }
  const LOCATION = {
    center: [location.longitude, location.latitude],
    zoom: 10,
  };

  const map = new YMap(mapNode, { location: LOCATION });
  map.addChild(new YMapDefaultSchemeLayer());
  return location;
}
