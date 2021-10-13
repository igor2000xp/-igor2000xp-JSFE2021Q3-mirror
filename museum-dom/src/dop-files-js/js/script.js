// new Swipper('.image-slider', {
//    // arrows
//    navigation: {
//       nextEl: 'swiper-button-next',
//       prevEl: 'swiper-button-prev'
//    },
//    // bullets
//    pagination: {
//       el: 'swiper-pagination',
//       clicable: 'true',
//    }

// });

// const swiper = new Swiper('.swiper', {
//    // Optional parameters
//    direction: 'vertical',
//    loop: true,
 
//    // If we need pagination
//    pagination: {
//      el: '.swiper-pagination',
//    },
 
//    // Navigation arrows
//    navigation: {
//      nextEl: '.swiper-button-next',
//      prevEl: '.swiper-button-prev',
//    },
 
//    // And if we need scrollbar
//    scrollbar: {
//      el: '.swiper-scrollbar',
//    },
//  });

const swiper = new Swiper('.swiper', {
   // Optional parameters
   // direction: 'vertical',
   direction: 'horizontal',
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     type: 'bullets',
     clickable: 'true',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });
 
 