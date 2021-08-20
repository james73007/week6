"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  }
});
//# sourceMappingURL=all.js.map
