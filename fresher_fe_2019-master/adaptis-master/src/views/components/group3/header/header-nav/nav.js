const Nav = {
    init: () => {
        let navSticky = document.querySelector(".header-nav");
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
                if (navSticky) {
                    navSticky.style.position = "fixed";
                    navSticky.style.top = "0";
                }
            } else {
                if (navSticky) {
                    navSticky.style.position = "relative";
                }
            }
        });
    }
}

export default Nav;