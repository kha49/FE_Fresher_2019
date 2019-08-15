const airbnbSlickSlider = {
    SlickSlider: (className) => {
        $(className).slick({
            arrows: false,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        dots: false,
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: true,
                        dots: false,
                        slidesToShow: 2,
                    },
                },
            ],
        });
    },
    BookedSlickSlider: () => {
        $('.bookedSlider').slick({
            arrows: false,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            // autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        dots: false,
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: true,
                        dots: false,
                        slidesToShow: 3,
                    },
                },
            ],
        });
    },
}
export default airbnbSlickSlider;