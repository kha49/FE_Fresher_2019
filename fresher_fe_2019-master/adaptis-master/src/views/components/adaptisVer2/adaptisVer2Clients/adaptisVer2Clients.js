const loadClient = {
    init: () => {
        window.onscroll = function() {myFunction()};
        let item = document.querySelectorAll('.adaptis-clients-container-grid-item');
        function myFunction() {
            if ($(window).scrollTop() > 3100 || document.documentElement.scrollTop > 3100) {
                if(item) {
                    item.forEach(val => {
                        val.classList.add('animated');
                    }); 
                    //  alert('a');
                }
            } 
        }
    }
}

export default loadClient;