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


	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
  // https://www.youtube.com/watch?v=3V3roDksFaM
// 	mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvcjIwMDB4cCIsImEiOiJja3Vuem5qaDQwZHRzMnZxcmpmM3oxZTkxIn0.oOzqtXR2nTtSTASmnZqQTQ';

// const map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/light-v10',
//   center: [2.3364, 48.86091],
//   zoom: 15.75,
//   showZoom: true,
// });
// map.addControl(new mapboxgl.NavigationControl());
// const marker1 = new mapboxgl.Marker({
//     color: 'black',
//   })
//   .setLngLat([2.3364, 48.86091])
//   .addTo(map);
// const marker2 = new mapboxgl.Marker({
//     color: '#757575',
//   })
//   .setLngLat([2.3333, 48.8602])
//   .addTo(map);
// const marker3 = new mapboxgl.Marker({
//     color: '#757575',
//   })
//   .setLngLat([2.3397, 48.8607])
//   .addTo(map);
// const marker4 = new mapboxgl.Marker({
//     color: '#757575',
//   })
//   .setLngLat([2.3330, 48.8619])
//   .addTo(map);
// const marker5 = new mapboxgl.Marker({
//     color: '#757575',
//   })
//   .setLngLat([2.3365, 48.8625])
//   .addTo(map);


  // ! Swiper
  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   // direction: 'vertical',
  //   direction: 'horizontal',
  //   loop: true,
  
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: 'true',
  //   },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });
  
  