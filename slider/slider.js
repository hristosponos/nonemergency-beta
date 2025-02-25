
var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20, // Adjust for partial visibility
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});
