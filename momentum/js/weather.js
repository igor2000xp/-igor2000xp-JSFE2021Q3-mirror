// const { get } = require("http");

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const cityInput = document.querySelector('.city');

const cities = {city:'Minsk'};
getLocalStorageCity();


function getCityInput() {
  cities.city = cityInput.value;
  setLocalStorageCity();
  getWeather();
}

function setLocalStorageCity() {
  localStorage.setItem('city', cities.city);
}

function getLocalStorageCity() {
  cities.city = localStorage.getItem('city');
}

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cities.city}&lang=en&appid=5984893ced67a1b978dd308411036167&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  console.log(data.weather[0].id, data.weather[0].description, data.main.temp);

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);

  let tempRound = Math.round(data.main.temp);
  temperature.textContent = `${tempRound}°C`;
  weatherDescription.textContent = data.weather[0].description;

  let windRound = Math.round(data.wind.speed);
  wind.textContent = `Wind speed: ${windRound} m/c`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;

  setTimeout(getWeather, 600000);
}


cityInput.addEventListener('change', getCityInput);
getWeather();
// console.log(cities.city);
cityInput.value = cities.city;