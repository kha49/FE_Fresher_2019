const Slick = {
    init: () => {
        const myResponsive = [
            Slick.breakpoints(480, 1, 1),
            Slick.breakpoints(768, 2, 1),
            Slick.breakpoints(992, 3, 1),
            Slick.breakpoints(1200, 4, 1),
        ];

        Slick.slide(".multiple-items", myResponsive)
    },
    slide: (className, myResponsive) => {
        $(className).slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: myResponsive
        });
    },
    breakpoints: (breakpoint=0, slidesShow=1, slidesScroll=1, dotss = false, infinitee = true) => {
        let responsive = {};
        responsive.breakpoint = breakpoint;
        responsive.settings = {
            slidesToShow: slidesShow,
            slidesToScroll: slidesScroll,
            infinite: infinitee,
            dots: dotss
        }
        return responsive;
    }
}

export default Slick;