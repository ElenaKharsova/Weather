import * as images from "./imagesImports";

export function createWeatherApp(mainElement) {
  mainElement.innerHTML = `
  <header class = "header">
    <div class = "location">
      <img src = ${images.location} alt ="images location" 
        class = "img-location"/> 
      <p>Your location</p>
    </div>
    <div class = "block data">
      <img src = ${images.sunCloud} alt ="images weather" 
        class = "img-weather"/> 
      <p class = "temperature" >31</p>
    </div>
    <p class = "block">Mapa</p>
  </header>
  <nav class = "block cities">
    <div>
      <input></input>
      <button>Enter</button>
    </div>
    <ul>
      <li>First city</li>
    </ul>
  </nav>
  `;
  // const header = document.createElement("header");
  // header.classList.add("header");
  // const imgLocation = document.createElement("img");
  // imgLocation.setAttribute("src", images.location);
  // imgLocation.classList.add("img-location");
  // const p = document.createElement("p");
  // p.innerHTML = "Your location";
  // header.appendChild(imgLocation);
  // header.appendChild(p);
  // mainElement.appendChild(header);
  // const imgWeather = document.createElement("img");
  // imgWeather.setAttribute("src", images.sunCloud);
  // imgWeather.classList.add("img-weather");
  // mainElement.appendChild(imgWeather);
  // const ul = document.createElement("ul");
  // const lengthCitiesList = 10;
  // let li = document.createElement("li");
  // li.innerHTML = "First city";
  // ul.appendChild(li);
  // for (let i = 1; i < lengthCitiesList; i++) {
  //   li = document.createElement("li");
  //   ul.appendChild(li);
  // }
  // const nav = document.createElement("nav");
  // nav.classList.add("cities");
  // nav.appendChild(ul);
  // mainElement.appendChild(nav);
}
