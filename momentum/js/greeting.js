const greeting = document.querySelector('.greeting');
const date = new Date();
const hours = date.getHours();
const nameGreeting = document.querySelector('.name');
const timeOfDay = getTimeOfDay();
const greetingText = `Good ${timeOfDay}`;
greeting.textContent = greetingText;

let user = {name:''};



// возвращающую время суток (morning, day, evening, night)
//  в зависимости от текущего времени в часах
function getTimeOfDay() {
  let result;
  let numberSwitch = hours / 6 - 0.01;
  setTimeout(showTime, 60000);

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
    result = 'afternoon';
    return result;
  }else
  {
    result = 'evening';
    return result;
  }
}

// Записываем имя в локальное хранилище из user.name
function setLocalStorage() {
  localStorage.setItem('name', user.name);
}

// Получаем имя из локального хранилища в user.name
function getLocalStorage() {
  if(localStorage.getItem('name')) {
    user.name = localStorage.getItem('name');
  }
}

function inputName() {
  user.name = nameGreeting.value;
  setLocalStorage();
}

// Вызываем обработчик события перед и после перезагрузки страницы
window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);

// Получаем имя из хранилища, отслеживаем поле input и заноим
// имя в поле input
getLocalStorage();
nameGreeting.addEventListener('input', inputName);
nameGreeting.value = user.name;

