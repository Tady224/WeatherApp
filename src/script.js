
function displayTemp(response) {
let temperatureElement = document.querySelector ("temperature");
temperatureElement.innerHTML = response.data.main.temp;
}
let apiKey = "5625fc4e2f1e1a9677dec96db881138a";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=Hamburg&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);

