const ModalLogin = {
    init: () => {

    },
    showModalLogin: () => {
        const showModalLogin = document.querySelectorAll('.showModalLogin');
        const boxModalLogin = document.querySelector('.air-modal-login');
        const modalLoginContent = document.querySelector('.air-modal-login__content');
        if(showModalLogin) {
            showModalLogin.forEach((item) => {
                item.addEventListener('click', () => {
                    boxModalLogin.classList.add('show-modal');
                    modalLoginContent.classList.add('show-modal');
                });
            });
        }
    },
    closedModalLogin: () => {
        const btnClosedLogin = document.querySelector('#btnClosedLogin');
        const boxModalLogin = document.querySelector('.air-modal-login');
        const modalLoginContent = document.querySelector('.air-modal-login__content');
        if(btnClosedLogin) {
            btnClosedLogin.addEventListener('click', () => {
                boxModalLogin.classList.remove('show-modal');
                modalLoginContent.classList.remove('show-modal');
            });
        }
        if (boxModalLogin) {
            boxModalLogin.addEventListener("click", (event) => {
                if (!event.target.closest(".air-modal-login__content")) {
                    // console.log(event);
                    boxModalLogin.classList.remove('show-modal');
                    modalLoginContent.classList.remove('show-modal');
                }
            });
        }
    }
}

export default ModalLogin;