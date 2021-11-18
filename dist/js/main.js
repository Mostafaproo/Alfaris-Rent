$(document).ready(function () {
  var swiper1 = new Swiper(".swiperHome", {
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

  var swiper2 = new Swiper("#swiper-categeroy", {
    direction: "horizontal",
    slidesPerView: 2.5,
    loop: true,
    speed: 400,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1.2,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },
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

// Start Scroll Counter

let numbers = document.querySelectorAll(".number");
let counterSection = document.querySelector(".counter-section");
let started =false;

window.onscroll = function () {
  if (window.scrollY >= counterSection.offsetTop -100) {
    if(!started){
      numbers.forEach((num) => {
        startCount(num);
      });

    }
    started = true
  }
};

function startCount(el) {
  let goal = el.dataset.goal;

  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// startCount(numbers[0])
