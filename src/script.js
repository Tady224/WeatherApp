
function displayTemp(response) {
let cityElement =document.querySelector ("city");
let conditionsElement= document.querySelector("conditions");
let temperatureElement = document.querySelector ("temperature");
temperatureElement.innerHTML = response.data.main.temp;
cityElement.innerHTML = response.data.name;
conditionsElement=response.data.weather[0].discription;

}
let apiKey = "5625fc4e2f1e1a9677dec96db881138a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);

