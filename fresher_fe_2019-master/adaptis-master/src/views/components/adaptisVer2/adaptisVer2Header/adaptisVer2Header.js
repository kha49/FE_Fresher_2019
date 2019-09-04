const adaptisHeaderLogo = {
    init: () => {
        let adaptisHamburger = document.querySelector('#hamburger');
        let adaptismenuBar = document.querySelector('#menuBar');
        if(adaptisHamburger || adaptismenuBar) {
            adaptisHeaderLogo.showHamburger(adaptisHamburger, adaptismenuBar);
        }
    },scrollFunction: () => {
        let adaptisScroll = document.querySelector('.adaptisVer2Header-logo');
        let firstItem = document.querySelector('#firstChildItem');
        let hamburger = document.querySelector('.hamburgerOpen');
        // let menuBarIsOpened = document.querySelector('.menu-bar-isOpened');
        if($(window).scrollTop() > 80 || document.documentElement.scrollTop > 80) {
            if(adaptisScroll) {
                adaptisScroll.style.top = "-25px";
            }
            if(firstItem && hamburger) {
                firstItem.style.display = "block";
            }
        } else {
            if(adaptisScroll) {
                adaptisScroll.style.top = "25px";
            }
            if(firstItem && hamburger) {
                firstItem.style.display= "none";
            }
        }
    },
    showHamburger: (className, menuBarName) => {
        className.addEventListener('click', () => {
            className.classList.toggle("hamburgerOpen");
            menuBarName.classList.toggle("menu-bar-isOpened");
        });
    },
    
}

export default adaptisHeaderLogo;