const boxContent = {
    init: () => {
        let loginBtn = document.getElementById("loginBtn");
        let modalLogin = document.getElementById("modalLogin");
        let cartBtn = document.getElementById("cartBtn");
        let modalCart = document.getElementById("modalCart");

        if (loginBtn && modalLogin) {
            loginBtn.addEventListener('click', () => {
                modalLogin.classList.toggle("show");
            });
        }
        window.addEventListener('click', (e) => {
            if (!e.target.matches('#loginBtn')) {
                let modalLogin = document.getElementById("modalLogin");
                if (modalLogin.classList.contains('show')) {
                    modalLogin.classList.remove('show');
                }
            }
        });
        if (cartBtn && modalCart) {
            cartBtn.addEventListener('click', () => {
                cartBtn.addEventListener('click', () => {
                    modalCart.classList.toggle("show");
                });
            });
        }
        window.addEventListener('click', (e) => {
            if (!e.target.matches('#cartBtn')) {
                let modalCart = document.getElementById("modalCart");
                if (modalCart.classList.contains('show')) {
                    modalCart.classList.remove('show');
                }
            }
        });
    }
}

export default boxContent;