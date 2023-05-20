import {
  YMap,
  YMapDefaultMarker,
  YMapDefaultMarkersLayer,
  YMapDefaultSchemeLayer,
} from "ymaps3";

export function showMap(element, location) {
  const mapNode = element.querySelector("#map");

  const map = new YMap(
    mapNode,
    {
      location: {
        center: [location.latitude, location.longitude],
        zoom: 7,
      },
    },
    [
      new YMapDefaultSchemeLayer(),
      new YMapDefaultMarkersLayer(),
      new YMapDefaultMarker({
        coordinates: [location.latitude, location.longitude],
      }),
    ]
  );
  // });
  // map.addChild(new YMapDefaultSchemeLayer());
  // map.addChild(new YMapDefaultMarkersLayer());
  // map.addChild(
  //   new YMapDefaultMarker({
  //     coordinates: [location.latitude, location.longitude],
  //   })
  // );
  console.log("map", map);
  console.log("location", location);
}
// var newCoordinates = [59.9386300, 30.3141300]; // New coordinates (St. Petersburg)
//   map.setCenter(newCoordinates);
