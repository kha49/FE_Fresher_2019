const Modal = {
    init: () => {
        let modalLogin = document.getElementById('btnLogin');
        let modalLogin1 = document.getElementById('btnLogin1');
        let close = document.getElementById('close1');
        let modal = document.getElementById('modalLogin');
        $('#Language').click(function () {
            let modal = document.getElementById('modal6');
            modal.style.display = "block";
        });
        $('#Currency').click(function () {
            let modal = document.getElementById('modal7');
            modal.style.display = "block";
        });
        $('.modaltext').click(function () {
            let modal = document.getElementById('modal' + this.id);
            modal.style.display = "block";
        });
        $('.close').click(function () {
            let modal = document.getElementById('modal' + this.id);
            modal.style.display = "none";
        });
        if (close) {
            close.addEventListener('click', () => {
                let modal = document.getElementById('modalLogin');
                modal.style.display = "none";
            });
        }
        if (modalLogin || modalLogin1) {
            modalLogin.addEventListener("click", () => {
                Modal.showModal();
            });
            modalLogin1.addEventListener("click", () => {
                Modal.showModal();
            });
        };
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    },
    showModal: () => {
        let modal = document.getElementById('modalLogin');
        modal.style.display = "block";
    }
};

export default Modal;