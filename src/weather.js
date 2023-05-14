export function createWeatherApp(mainElement) {
  mainElement.innerHTML = `<header class = "header">
        <img class="icon" alt="pin" src="./src/images/location2.png"/>
        <p>Your location</p>
    </header>
    <nav class ="cities">
        <ul>
            <li>First city</li>
        </ul>
    </nav>
    `;
}
