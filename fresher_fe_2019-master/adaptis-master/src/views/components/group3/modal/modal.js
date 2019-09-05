const Modal = {
    init: () => {
        let modalTrending = document.querySelectorAll('.ModalTrending');
        let modalHotsale = document.querySelectorAll(".modalHotsale");
        const modals = [];

        modalTrending.forEach((val,index) => {
            modals.push(
                {
                    modalBtn: "modalBtn" + index,
                    modal: "modalContent" + index,
                    closerBtn: "closeBtn" + index,
                    addToCard: "addToCard" + index
                }
            );
        });

        modalHotsale.forEach((val,index) => {
            modals.push(
                {
                    modalBtn: "modalHotsaleBtn" + index,
                    modal: "modalHotsaleContent" + index,
                    closerBtn: "closeHotsaleBtn" + index,
                    addToCard: "addToCarda" + index
                }
            );
        });

        modals.forEach(items => {
            const modalBtn = document.getElementById(items.modalBtn);
            const modalContent = document.getElementById(items.modal);
            const closerBtn = document.getElementById(items.closerBtn);
            const addToCard = document.getElementById(items.addToCard);

            if (modalBtn) {
                Modal.showModal(modalBtn, modalContent);
                Modal.closeModal(closerBtn, modalContent);
            }
        });
    },
    showModal: (modalBtn, modalContent) => {
        let modal = document.getElementsByClassName("add-modal");
        modalBtn.addEventListener('click', () => {
            modal[0].style.display = "block";
            modalContent.style.display = "block";
        });
    },
    closeModal: (closerBtn, modalContent) => {
        let modal = document.getElementsByClassName("add-modal");
        closerBtn.addEventListener('click', () => {
            modal[0].style.display = "none";
            modalContent.style.display = "none";
        });
        window.addEventListener('click', (e) => {
            if (e.target == modal[0]) {
                modal[0].style.display = "none";
                modalContent.style.display = "none";
            }
        });
    }
}

export default Modal;