import { YMap, YMapDefaultSchemeLayer } from "ymaps3";

export function showMap(element, location) {
  console.log("show map function");
  console.log("location", location);

  const mapNode = element.querySelector("#map");
  if (mapNode.innerHTML) {
    mapNode.innerHTML = "";
  }
  const LOCATION = {
    center: [location.longitude, location.latitude],
    zoom: 10,
  };

  const map = new YMap(mapNode, { location: LOCATION });
  console.log("MAPA", map);
  map.addChild(new YMapDefaultSchemeLayer());
  console.log(map.center);
}
