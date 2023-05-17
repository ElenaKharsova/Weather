import * as images from "./imagesImports";

export function createWeatherUI(mainElement, location) {
  let currentLocation;
  let currentlocationLink;
  console.log(location);
  if (location.error) {
    currentLocation = "Your location is hidden";
    currentlocationLink = "#";
  } else {
    currentLocation = location.name;
    currentlocationLink = `https://www.openstreetmap.org/export/embed.html?bbox=${location.longitude}%2C${location.latitude}&amp;layer=mapnik`;
    // `https://www.openstreetmap.org/#map=18/${location.latitude}/${location.longitude}`;
  }
  // typeof location === Error ? "Your location is hidden" : location;

  mainElement.innerHTML = `
  <header class = "header">
    <div class = "location">
      <img src = ${images.location} alt ="images location" 
        class = "img-location"/> 
      <p>${currentLocation}</p>
    </div>
    <div class = "block data">
      <img src = ${images.sunCloud} alt ="images weather" 
        class = "img-weather"/> 
      <p class = "temperature" >31</p>
    </div>
    <div class = "block">
        <img src= ${currentlocationLink}/>
    </div>
  </header>
  <nav class = "block cities">
    <div>
      <input></input>
      <button>Enter</button>
    </div>
    <ul>    
    </ul>
  </nav>
  `;
  if (!location.error) {
    const ul = mainElement.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = currentLocation;
    ul.appendChild(li);
  }
}

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
