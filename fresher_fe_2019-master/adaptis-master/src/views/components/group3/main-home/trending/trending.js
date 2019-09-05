const Trending = {
    init: () => {
        let breakpoints = [
            { breakpoint: 480, slidesToShow: 1, slidesToScroll: 1 },
            { breakpoint: 769, slidesToShow: 3, slidesToScroll: 1 },
            { breakpoint: 980, slidesToShow: 3, slidesToScroll: 1 },
            { breakpoint: 1200, slidesToShow: 4, slidesToScroll: 1 },
        ];

        Trending.slide(".multiple-items", breakpoints)
    },
    slide: (className, breakpoints) => {
        $(className).slick({
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        });

        console.log($(className).slick(responsive))
    }
}

export default Trending;