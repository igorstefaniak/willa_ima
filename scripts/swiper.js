const swiper = new Swiper(
    ".swiper",{
        speed: 500,
        loop:true,
        effect: 'fade',
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-scrollbar',
            type: "progressbar"
          },
        autoplay: {
            delay: 4000,
          },
});