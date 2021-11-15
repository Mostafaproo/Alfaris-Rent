$(document).ready(function () {



    var swiper = new Swiper(".swiperHome", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        speed: 400,
        spaceBetween: 0,
      
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      
        // And if we need scrollbar
      });
});


