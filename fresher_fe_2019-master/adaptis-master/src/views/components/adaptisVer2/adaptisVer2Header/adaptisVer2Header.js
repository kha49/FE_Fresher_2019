const adaptisHeaderLogo = {
    scrollFunction: () => {
        const adaptisScroll = document.querySelector('.adaptisVer2Header-logo');
        console.log($(window).scrollTop());
        if($(window).scrollTop() > 80 || document.documentElement.scrollTop > 80) {
            if(adaptisScroll) {
                adaptisScroll.style.top = "-25px";
            }
        } else {
            if(adaptisScroll) {
                adaptisScroll.style.top = "25px";
            }
        }
    },
    init: () => {
        
    }
}

export default adaptisHeaderLogo;