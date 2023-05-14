export function createWeatherApp(mainElement) {
  const header = document.createElement("header");
  header.classList.add("header");
  const img = document.createElement("img");
  img.setAttribute("src", "./src/images/location2.png");
  const p = document.createElement("p");
  p.innerHTML = "Your location";
  header.appendChild(img);
  header.appendChild(p);
  mainElement.appendChild(header);
  const imgWeather = document.createElement("img");
  imgWeather.setAttribute("src", "./src/images/Sun_Cloud.svg.png");
  mainElement.appendChild(imgWeather);
  const ul = document.createElement("ul");
  const lengthCitiesList = 10;
  let li = document.createElement("li");
  li.innerHTML = "First city";
  ul.appendChild(li);
  for (let i = 1; i < lengthCitiesList; i++) {
    li = document.createElement("li");
    ul.appendChild(li);
  }
  const nav = document.createElement("nav");
  nav.classList.add("cities");
  nav.appendChild(ul);
  mainElement.appendChild(nav);
}
