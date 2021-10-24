const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');


async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=5984893ced67a1b978dd308411036167&units=metric`;
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

}
getWeather()