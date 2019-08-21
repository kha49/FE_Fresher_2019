const HeaderAirBnb = {
    scrollFunction: () => {
        const headerSticky = document.querySelector('.airbnbUpdate-header-sticky__bottom');
        if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            if(headerSticky) {
                headerSticky.style.bottom = "0";
            }
        }
        else {
            if(document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
                if(headerSticky) {
                    headerSticky.style.bottom = "-60px";
                }
            }
            else {
                if(headerSticky) {
                    headerSticky.style.bottom = "-60px";
                }
            }
        }
    }
};

export default HeaderAirBnb;