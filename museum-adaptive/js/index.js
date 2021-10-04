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

