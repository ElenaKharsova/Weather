import { getCurrentLocation } from "../location";

describe("Get current location", () => {
  let location = {};
  it("Location is defined", () => {
    const coords = {
      latitude: 51.1,
      longitude: 45.3,
    };
    getCurrentLocation().then((location) => {
      expect(location).toStrictEqual(coords);
    });
  });
});
