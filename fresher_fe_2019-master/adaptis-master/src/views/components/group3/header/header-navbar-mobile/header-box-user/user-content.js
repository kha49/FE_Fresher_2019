const user = {
    init: () => {
        let userBtn = document.getElementById("nav-userBtn");
        let userModal = document.querySelector(`.nav-user__content`)
        if (userBtn) {
            userBtn.addEventListener("click", () => {
                if (userModal.style.display == "none") {
                    userModal.style.display = "block";
                }else{
                    userModal.style.display = "none";
                }
            });
        }
    }
}


export default user;