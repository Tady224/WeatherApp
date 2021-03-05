
function showWeather(response) {

let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round(celsiusTemperature);  
let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.name;
let conditionsElement = document.querySelector("#conditions");
conditionsElement.innerHTML = response.data.weather[0].description;
let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML = response.data.main.humidity; 
let windElement = document.querySelector("#wind");
windElement.innerHTML = Math.round(response.data.wind.speed) 
celsiusTemperature = response.data.main.temp;

 

}
let apiKey = "5625fc4e2f1e1a9677dec96db881138a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Hamburg&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showWeather);

