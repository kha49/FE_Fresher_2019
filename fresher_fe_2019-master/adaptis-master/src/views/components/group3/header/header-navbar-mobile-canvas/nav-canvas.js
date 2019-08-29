const nav_canvas = {
    init: () => {
        let header = document.getElementById("header");
        let navBtn = document.getElementById("nav-canvasBtn");
        let nav = document.getElementById("nav-canvas");
        if (navBtn) {
            navBtn.addEventListener('click', () => {
                if (nav.style.width == "0px") {
                    nav.style.width = "50%";
                    header.style.marginLeft = "50%";
                }else{
                    nav.style.width = "0px";
                    header.style.marginLeft = "0";
                }
            });
        }

        $('#drop1').click(()=>{
            $('#dropp1').toggle();
        });
    }
}

export default nav_canvas;