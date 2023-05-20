import {
  YMap,
  // YMapDefaultMarker,
  // YMapDefaultMarkersLayer,
  YMapDefaultSchemeLayer,
} from "ymaps3";

export function showMap(element, location) {
  // main();

  // async function main() {
  //   await ymaps3.ready;

  //   const {
  //     // YMapMarker,
  //     // YMapControls,
  //     // YMapDefaultMarker,
  //     // YMapDefaultFeaturesLayer
  // } = ymaps3;

  // const { YMapDefaultMarker, YMapDefaultMarkersLayer } = ymaps3.import(
  //     "@yandex/ymaps3-markers@0.0.1"
  //   );
  // const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

  const mapNode = element.querySelector("#map");
  const LOCATION = {
    center: [location.latitude, location.longitude],
    zoom: 10,
  };
  // const NEW_LOCATION = {
  //   center: [37.623082, 55.75254],
  //   zoom: 10,
  // };

  const map = new YMap(
    mapNode,
    { location: LOCATION }
    // [new YMapDefaultSchemeLayer()]
  );
  // });
  map.addChild(new YMapDefaultSchemeLayer());
  console.log("center", map.center);
  // map.addChild(new YMapDefaultMarkersLayer());
  // map.addChild(
  //   new YMapDefaultMarker({
  //     coordinates: [location.latitude, location.longitude],
  //   })
  // );
  // map.addChild(new YMapDefaultFeaturesLayer({id: 'features'}));

  console.log("map", map);
  // console.log("location", location);
  // map.setLocation([37.623082, 55.75254]);
  // console.log("center", map.center);
  //   const newCoordinates = [59.9386300, 30.3141300]; // New coordinates (St. Petersburg)
  // //   map.setCenter(newCoordinates);
  // }
}
