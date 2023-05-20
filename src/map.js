import {
  YMap,
  // YMapDefaultMarker,
  // YMapDefaultMarkersLayer,
  YMapDefaultSchemeLayer,
} from "ymaps3";

export function showMap(element, location) {
  const mapNode = element.querySelector("#map");
  // const LOCATION = {
  //   center: [location.latitude, location.longitude],
  //   zoom: 10,
  // };
  const NEW_LOCATION = {
    center: [59.93863, 30.31413],
    zoom: 10,
  };

  // const { YMapDefaultMarker, YMapDefaultMarkersLayer } = ymaps3.import(
  //   "@yandex/ymaps3-markers@0.0.1"
  // );

  const map = new YMap(mapNode, { location: NEW_LOCATION }, [
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
  // map.setLocation({
  //   ...NEW_LOCATION,
  //   duration: 1000,
  // });
  //   const newCoordinates = [59.9386300, 30.3141300]; // New coordinates (St. Petersburg)
  // //   map.setCenter(newCoordinates);
}
