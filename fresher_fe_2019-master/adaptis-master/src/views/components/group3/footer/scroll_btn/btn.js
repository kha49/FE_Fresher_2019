const scrollBtn = {
    init: () => {
        let scrollBtn = document.getElementById("scrollTop");
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                if (scrollBtn) {
                    scrollBtn.style.display = "block";
                }
            } else {
                if (scrollBtn) {
                    scrollBtn.style.display = "none";
                }
            }
        });
        $("#scrollTop").click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });

    }
}

export default scrollBtn;