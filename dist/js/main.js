$(document).ready(function () {
  var swiper1  = new Swiper(".swiperHome", {
    direction: "horizontal",
    loop: true,
    speed: 400,
    spaceBetween: 0,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  var swiper2  = new Swiper("#swiper-categeroy", {
    direction: "horizontal",
    slidesPerView: 2.5,
    loop: true,
    speed: 400,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });



  var heights = [];

  $(".elementor-element").each(function () {
    heights.push($(this).height());
  });

  var maxHeight = Math.max.apply(null, heights);

  $(".elementor-element").height(maxHeight);



});


// Get the navbar
var navbar = document.getElementById("navigation");

// Get the offset position of the navbar
var sticky = navbar.offsetTop + 50;

window.onscroll = function () {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");
    $(".navbar-brand").css("display", "block");
  } else {
    navbar.classList.remove("sticky");
    $(".navbar-brand").css("display", "none");
  }
};
