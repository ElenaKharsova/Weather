import {
  YMap,
  // YMapDefaultMarker,
  // YMapDefaultMarkersLayer,
  YMapDefaultSchemeLayer,
} from "ymaps3";

export function showMap(element, location) {
  const mapNode = element.querySelector("#map");
  const LOCATION = {
    center: [location.latitude, location.longitude],
    zoom: 10,
  };
  // const NEW_LOCATION = {
  //   center: [37.623082, 55.75254],
  //   zoom: 10,
  // };

  // const { YMapDefaultMarker, YMapDefaultMarkersLayer } = ymaps3.import(
  //   "@yandex/ymaps3-markers@0.0.1"
  // );

  const map = new YMap(mapNode, { location: LOCATION }, [
    new YMapDefaultSchemeLayer(),
  ]);
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
  map.setLocation([37.623082, 55.75254]);
  //   const newCoordinates = [59.9386300, 30.3141300]; // New coordinates (St. Petersburg)
  // //   map.setCenter(newCoordinates);
}
