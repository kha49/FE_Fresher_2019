const adaptisSlide = {
    init: () => {
        let adaptisSlides = document.querySelector('.single-item');
        if(adaptisSlides) {
            $('.single-item').slick({
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        } 
        // let adaptisSlideArea = document.querySelector('.slick-active');
        // if(adaptisSlideArea) {
        //     adaptisSlide.showCaption();
        // }
    }
    // showCaption: () => {
    //     let adaptisSlideCaption = document.querySelector('.adaptisVer2Slide__caption');
    //     if(adaptisSlideCaption) {
    //         adaptisSlideCaption.style.opacity = "1";
    //         adaptisSlideCaption.style.transform = "translate(0, 30px)";
    //     } else {
    //         if(adaptisSideCaption) {
    //             adaptisSlideCaption.style.opacity = "0";
    //             adaptisSlideCaption.style.transform = "translate(-100px, 30px)";
    //         }
    //     }
    // }
    // isDisabled: () => {
    //     let slickDisabled = document.querySelector('slick-disable');
    //     if(slickDisabled) {
    //         slickDisabled.style.opacity = "0";
    //     }
    // }
}

export default adaptisSlide;