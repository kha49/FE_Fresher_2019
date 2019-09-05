const load = {
    init: () => {
        window.onscroll = function() {myFunction()};
        let adaptisSolutionAnimate = document.querySelectorAll('.adaptis-solution-container-items__item');
        let adaptisClientAnimate = document.querySelectorAll('.adaptis-clients-container-grid-item');
        let adaptisRelativeBlockAnimate = document.querySelectorAll('.adaptis-relative-block-container-items__item');
        let footerItemAnimation = document.querySelectorAll('.adaptis-footer-item');
        function myFunction() {
            if ($(window).scrollTop() > 2800 || document.documentElement.scrollTop > 2800) {
                if(adaptisSolutionAnimate ) {
                    adaptisSolutionAnimate .forEach(val => {
                        val.classList.add('animated');
                    }); 
                }
            } 
            if ($(window).scrollTop() > 3300 || document.documentElement.scrollTop > 3300) {
                if(adaptisClientAnimate ) {
                    adaptisClientAnimate .forEach(val => {
                        val.classList.add('animated');
                    }); 
                }
            } 
            if ($(window).scrollTop() > 4000 || document.documentElement.scrollTop > 4000) {
                if(adaptisRelativeBlockAnimate) {
                    adaptisRelativeBlockAnimate.forEach(val => {
                        val.classList.add('item-animate');
                    }); 
                }
            } 
            if ($(window).scrollTop() > 4600 || document.documentElement.scrollTop > 4600) {
                if(footerItemAnimation) {
                    footerItemAnimation.forEach(val => {
                        val.classList.add('animated');
                    }); 
                }
            } 
            
        }
    }
}

export default load;