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

const swiperImage = new Swiper('.swiper-image', {
   // Optional parameters
   // direction: 'vertical',
   direction: 'horizontal',
  //  slidesPerView: 1,
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination__image',
     type: 'bullets',
     clickable: 'true',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-image-next',
     prevEl: '.swiper-image-prev',
     clickable: 'true',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });

 const swiperVideo = new Swiper('.swiper-video', {
  // Optional parameters
  // direction: 'vertical',
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  // slidesPerGroup: 3,
   spaceBetween:30,
  // centeredSlides: true,
  // containerModifierClass: 'swipervideo-',
  // wrapperClass: 'swipervideo-wrapper',
  // slideClass: 'swipervideo-slide',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination__video',
    type: 'bullets',
    clickable: 'true',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-videobutton-next',
    prevEl: '.swiper-videobutton-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
 
 