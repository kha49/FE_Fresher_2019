const ModalLogin = {
    init: () => {

    },
    showModalLogin: () => {
        const showModalLogin = document.querySelectorAll('.showModalLogin');
        const boxModalLogin = document.querySelector('.air-modal-login');
        const modalLoginContent = document.querySelector('.air-modal-login__content');
        const airBody = document.querySelector('body');
        if(showModalLogin) {
            showModalLogin.forEach((item) => {
                item.addEventListener('click', () => {
                    boxModalLogin.classList.add('show-modal');
                    modalLoginContent.classList.add('show-modal');
                    airBody.classList.add('is-noscroll');
                });
            });
        }
    },
    closedModalLogin: () => {
        const btnClosedLogin = document.querySelector('#btnClosedLogin');
        const boxModalLogin = document.querySelector('.air-modal-login');
        const modalLoginContent = document.querySelector('.air-modal-login__content');
        const airBody = document.querySelector('body');
        if(btnClosedLogin) {
            btnClosedLogin.addEventListener('click', () => {
                boxModalLogin.classList.remove('show-modal');
                modalLoginContent.classList.remove('show-modal');
                airBody.classList.remove('is-noscroll');
            });
        }
        if (boxModalLogin) {
            boxModalLogin.addEventListener("click", (event) => {
                if (!event.target.closest(".air-modal-login__content")) {
                    // console.log(event);
                    boxModalLogin.classList.remove('show-modal');
                    modalLoginContent.classList.remove('show-modal');
                    airBody.classList.remove('is-noscroll');
                }
            });
        }
    }
}

export default ModalLogin;