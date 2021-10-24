const time = document.querySelector('.time');
const dateDoc = document.querySelector('.date');
// const options = { weekday: 'long', month: 'long', day: 'numeric' };
const optionsDate = {localeMatcher: 'lookup', weekday: 'long', month: 'long', day: 'numeric', timeZone: 'Europe/Moscow'};
const optionsTime = {hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Europe/Moscow'};
// options.timeZone = 'UTC';


function showDate() {
  const date = new Date();
  const currentDate = date.toLocaleDateString('ru', optionsDate);
  // const currentDate = date.toLocaleString('ru-RU');
  // toLocaleString()
  dateDoc.textContent = currentDate;
  // dateDoc.textContent = 'среда';
}


function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString('ru', optionsTime);
  time.textContent = currentTime;
  showDate();
  setTimeout(showTime, 1000);
}


showTime();
