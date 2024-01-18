new Swiper("#swiper-1", {
    effect: "fade",
    pagination: {
        el: "#swiper-1 .swiper-pagination",
        clickable: true
    }
});

new Swiper("#swiper-2", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});