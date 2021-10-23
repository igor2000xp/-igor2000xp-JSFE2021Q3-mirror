const greeting = document.querySelector('.greeting');
const date = new Date();
const hours = date.getHours();
console.log(hours);

// возвращающую время суток (morning, day, evening, night)
//  в зависимости от текущего времени в часах
function getTimeOfDay() {
  let result;
  let numberSwitch = hours / 6 - 0.01;

  if(numberSwitch < 1)
  {
    result = 'night';
    return result;
  }else if(numberSwitch < 2)
  {
    result = 'morning';
    return result;
  }else if(numberSwitch < 3)
  {
    result = 'after noon';
    return result;
  }else
  {
    result = 'evening';
    return result;
  }
}

const timeOfDay = getTimeOfDay();
const greetingText = `Good ${timeOfDay}`;
greeting.textContent = greetingText;
console.log(timeOfDay);
// showGreeting();