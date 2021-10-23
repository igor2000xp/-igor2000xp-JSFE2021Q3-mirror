const time = document.querySelector('.time');
const dateDoc = document.querySelector('.date');
// const options = { weekday: 'long', month: 'long', day: 'numeric' };
const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'};

function showDate() {
  const date = new Date();
  const currentDate = date.toLocaleDateString('en-US', options);
  dateDoc.textContent = currentDate;
}


function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
}


showTime();