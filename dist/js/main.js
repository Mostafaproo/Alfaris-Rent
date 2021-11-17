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
