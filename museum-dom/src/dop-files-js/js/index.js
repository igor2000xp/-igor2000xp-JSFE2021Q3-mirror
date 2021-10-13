/* burger menu script */


const iconMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu-list');
const welList = document.querySelector('.welcome__article');
const navLink = document.querySelectorAll('.menu-list__link');


navLink.forEach(n => n.addEventListener("click", closeMenu));
iconMenu.addEventListener("click", showMenu);

function showMenu() {
   document.body.classList.toggle("_lock")
   iconMenu.classList.toggle("active");
   navMenu.classList.toggle("active");
   welList.classList.toggle("passive");
}

function closeMenu() {
   document.body.classList.remove("_lock")
   iconMenu.classList.remove("active");
   navMenu.classList.remove("active");
   welList.classList.remove("passive");
}


/* form scripts */

let buttonBuy = document.querySelectorAll('.button-buy'),
   ticketsForm = document.getElementById('ticketsForm'),
   closeButton = document.querySelectorAll('.close');
   closeOverlay = document.querySelectorAll('.overlay');
   
   
   
   buttonBuy.forEach((element) => {
      element.addEventListener("click", buyScript);
    });

    closeButton.forEach((element) => {
       element.addEventListener("click", closeForm);
    });

   closeOverlay.forEach((element) =>   {
      element.addEventListener("click", closeForm);
   });
    

function buyScript(){
   ticketsForm.classList.add("show");
}

function closeForm(){
   ticketsForm.classList.remove("show");
}

/* image scripts */

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }

let firstList = document.querySelectorAll('.random_picture img');
var index = 0, length = firstList.length;
for ( ; index < length; index++) {   
   firstList[index].style.order = getRandomInt(100);   
}

console.log('1. Слайдер в секции Welcome +22' +
  '\n9. Интерактивная карта в секции Contacts +12\n' +
  'Слайдер в секции Video +20\n' +
  'при клике по самому слайду или кнопке Play в центре слайда, внутри слайда проигрывается видео ' +
  'с YouTube. Никакие изменения с основным видео при этом не происходят +2\n' +
  'если видео с YouTube проигрывается, клик по кнопке Pause останавливает его проигрывание. ' +
  'Также проигрывание видео останавливается, если кликнуть по другому слайду или кнопке Play в ' +
  'центре другого слайда. В указанной ситуации другое видео должно запуститься, а текущее ' +
  'остановиться. Невозможно проигрывание нескольких YouTube видео одновременно +2\n' +
  'если внутри слайда проигрывается видео с YouTube, клик по стрелке перелистывания слайдов ' +
  'или клик по буллету останавливает проигрывание видео +2\n' +
  'есть возможность перелистывания слайдов влево и вправо кликами по стрелкам. ' +
  'Слайды перелистываются по одному, при этом также меняется основное видео +2\n' +
  'есть возможность перелистывания слайдов кликами по буллетам (кружочки внизу слайдера), ' +
  'при этом также меняется основное видео +2\n' +
  'слайды перелистываются плавно с анимацией смещения вправо или влево (для смены основного ' +
  'видео анимация смещения не требуется и не проверяется) +2\n' +
  'перелистывание слайдов бесконечное (зацикленное) +2\n' +
  'при перелистывании слайдов буллет активного слайда подсвечивается (выделяется стилем) +2\n' +
  'если основное видео проигрывалось при перелистывании слайдера, проигрывание видео останавливается,' +
  'прогресс бар сдвигается к началу, иконки "Play" на панели управления и по центру видео меняются ' +
  'на первоначальные +2\n' +
  'даже при частых кликах или свайпах нет ситуации, когда слайд после перелистывания находится ' +
  'не по центру, нет ситуации, когда видны одновременно два слайда +2\n' +
  'Итого: +54'
);