const load = {
    init: () => {
        window.onscroll = function() {myFunction()};
        let item = document.querySelectorAll('.adaptis-solution-container-items__item');
        let item2 = document.querySelectorAll('.adaptis-clients-container-grid-item');
        function myFunction() {
            if ($(window).scrollTop() > 2800 || document.documentElement.scrollTop > 2800) {
                if(item) {
                    item.forEach(val => {
                        val.classList.add('animated');
                    }); 
                    //  alert('a');
                }
            } 
            if ($(window).scrollTop() > 3300 || document.documentElement.scrollTop > 3300) {
                if(item2) {
                    item2.forEach(val => {
                        val.classList.add('animated');
                    }); 
                    //  alert('a');
                }
            } 
        }
    }
}

export default load;