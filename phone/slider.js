if (window.matchMedia("(max-width: 700px)").matches) {
  initalizedSwiper = true;
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20, // Adjust for partial visibility
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  });
}



