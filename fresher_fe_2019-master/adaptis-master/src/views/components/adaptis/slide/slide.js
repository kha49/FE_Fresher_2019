const adaptisSlider = {
    init: () => {
        let storiesArray = [".adaptis-kempinski",".adaptis-johnniewalker",".adaptis-burberry"];
        let slideIndex = 1;
        showDivs(slideIndex);
        storiesArray.forEach(function(item, index){
            if(slideIndex === index) {
                document.querySelector(item).style.display = "block";
                console.log(item);
            }
        })
    },

    plusDivs: (n) => {
        showDivs(slideIndex += n);
    },

    showDivs: (n) => {
        let x = document.querySelector(".mySlides");
        if(n > x.length) {slideIndex = 1}
        if(n < 1) {slideIndex = x.length}
        for(let i = 0; i < x.length; i++) {
            x[i].classList.add("slideOut");
        }
        x[slideIndex - 1].classList.add("slideIn");
    }
    // nextSlide: () => {
    //     let storiesArray = [".adaptis-kempinski",".adaptis-johnniewalker",".adaptis-burberry"];
    //     let rightButtonCount = 0;
    //     for(let i = 0; i < storiesArray.length; i++) {
    //         document.querySelector(storiesArray[i]).classList.add();
    //     }
    // },
    // prevSlide: () => {

    // }
};

export default adaptisSlider;