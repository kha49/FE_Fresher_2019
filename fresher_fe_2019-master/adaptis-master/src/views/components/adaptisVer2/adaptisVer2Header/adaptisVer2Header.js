const adaptisHeaderLogo = {
    init: () => {
        let adaptisHamburger = document.querySelector('#hamburger');
        let adaptismenuBar = document.querySelector('#menuBar');
        if(adaptisHamburger || adaptismenuBar) {
            adaptisHeaderLogo.showHamburger(adaptisHamburger, adaptismenuBar);
        }
    },
    scrollFunction: () => {
        let adaptisLogo = document.querySelector('.adaptisVer2Header-logo');
        let checkWidth = window.innerWidth;
        let hamburger = document.querySelector('#hamburger');
        let hamburgerOpen = document.querySelector('.hamburgerOpen');
        let firstItem = document.querySelector('#firstChildItem');
        let adaptismenuBar = document.querySelector('#menuBar');
        let adaptismenuBarOpen = document.querySelector('.menu-bar-isOpened');
        if($(window).scrollTop() > 80 || document.documentElement.scrollTop > 80) {
            if(adaptisLogo) {
                adaptisLogo.style.top = "-25px";
            }
            if (firstItem && checkWidth < 768) {
                firstItem.style.display = "block";
            }
            if(checkWidth > 768) {
                adaptismenuBar.classList.remove("menu-bar-isOpened");
                hamburger.classList.remove("hamburgerOpen");
            }
        } else {
            if(adaptisLogo) {
                adaptisLogo.style.top = "25px";
            }
            if(firstItem) {
                firstItem.style.display = "none";
            }
            if(checkWidth > 768) {
                adaptismenuBar.classList.add("menu-bar-isOpened");
                hamburger.classList.add("hamburgerOpen");
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