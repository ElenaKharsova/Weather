import { saveCities, readCities } from "../store";

const setLocalStorage = (data) => {
  window.localStorage.setItem("cities", JSON.stringify(data));
};
describe("Testing the local storage", () => {
  beforeEach(() => {
    const mockSaveLocalStorage = jest.fn(saveCities);
    mockSaveLocalStorage.mockImplementation(setLocalStorage);
  });
  afterEach(() => {
    localStorage.clear();
  });
  it("data is added into the local storage", () => {
    const mockJson = {
      0: "Tver",
      1: "Moscow",
    };
    saveCities(mockJson);
    const cities = readCities();

    expect(cities).toEqual(mockJson);
  });

  it("The local storage is empty", () => {
    const cities = readCities();
    expect(cities).toEqual([]);
  });
});
