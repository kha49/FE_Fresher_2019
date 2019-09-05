const nav_canvas = {
    init: () => {
        let header = document.querySelector(".header");
        let main = document.querySelector("#main");
        let footer = document.querySelector(".footer");
        let navBtn = document.querySelector("#nav-canvasBtn");
        let nav = document.querySelector(".nav-canvas");
        let html = document.querySelector("html");
        if (navBtn) {
            navBtn.addEventListener('click', () => {
                let navWidth = nav.style.width;
                if (navWidth == "0px") {
                    nav.style.width = "50%";
                    header.style.marginLeft = "50%";
                    main.style.marginLeft = "50%";
                    footer.style.marginLeft = "50%";
                    html.style.overflow = "hidden";
                }else{
                    nav.style.width = "0px";
                    header.style.marginLeft = "0";
                    main.style.marginLeft = "0";
                    footer.style.marginLeft = "0";
                    html.style.overflow = "auto";
                }
            });
        }

        $('#drop1').click(()=>{
            $('#dropp1').toggle();
        });
    }
}

export default nav_canvas;