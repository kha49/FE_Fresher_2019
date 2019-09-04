const AdaptisHeader = {
    scrollFunction: () => {
        let logoScrolled = document.querySelector('.adaptis-header__brand');
        let menubarClicked = document.querySelector('.adaptis-header__menubar-hamburger');
        let hamburgerLine1 = document.querySelector('.adaptis-header__menubar-hamburger-1');
        let hamburgerLine2 = document.querySelector('.adaptis-header__menubar-hamburger-2');
        let hamburgerLine3 = document.querySelector('.adaptis-header__menubar-hamburger-3');
        let hamburgerLine4 = document.querySelector('.adaptis-header__menubar-hamburger-4');
        let hamburgerLine5 = document.querySelector('.adaptis-header__menubar-hamburger-5');
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            if(logoScrolled) {
                logoScrolled.style.top = "-80px";
            }
        } else {
            if(logoScrolled) {
                logoScrolled.style.top = "25px";
            }
        }
        if(menubarClicked && hamburgerLine1) {
            menubarClicked.addEventListener('click', () => {
                AdaptisHeader.toggleClass();
            })
        }
    },
    toggleClass: () => {
        menubarClicked.classList.toggle("toggleLine");
    }
};
export default AdaptisHeader;