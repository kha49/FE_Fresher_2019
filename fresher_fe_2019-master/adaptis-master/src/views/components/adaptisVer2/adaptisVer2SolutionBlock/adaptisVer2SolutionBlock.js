const load = {
    init: () => {
        window.onscroll = function() {myFunction()};
        let adaptisSolutionAnimate = document.querySelectorAll('.adaptis-solution-container-items__item');
        let adaptisClientAnimate = document.querySelectorAll('.adaptis-clients-container-grid-item');
        let adaptisRelativeBlockAnimate = document.querySelectorAll('.adaptis-relative-block-container-items__item');
        let footerItemAnimation = document.querySelectorAll('.adaptis-footer-item');
        load.clock();
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
    },
    clock:() => {
        setInterval(function(){
            var date = new Date();
            updateTime(date);
            updateClock(date);
          }, 1000);
          
          function updateClock(date){
            var secHand = document.getElementById("sec-hand").style;
            var minHand = document.getElementById("min-hand").style;
            var hrHand = document.getElementById("hr-hand").style;
            
            secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
            minHand.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
            hrHand.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
          }
          
          function updateTime(date){
          }
    }
}

export default load;