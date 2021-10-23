const time = document.querySelector('.time');
const dateDoc = document.querySelector('.date');
// const options = { weekday: 'long', month: 'long', day: 'numeric' };
const options = {month: 'long', day: 'numeric', hour: '2-digit', minute: 'numeric', timeZone: 'UTC'};
const optionsTime = {hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Europe/Moscow'};
options.timeZone = 'UTC';

function showDate() {
  const date = new Date();
  const currentDate = date.toLocaleDateString('ru-RU', options);
  dateDoc.textContent = currentDate;
}


function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString('ru-RU', optionsTime);
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
}


showTime();