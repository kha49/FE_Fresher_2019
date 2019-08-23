const ModalFooter = {
    init: () => {
        const arrModal = [
            {
                buttonModal: 'language',
                modalFooter: 'modalLanguage'
            },
            {
                buttonModal: 'currency',
                modalFooter: 'modalCurrency'
            }
        ]
        arrModal.forEach((modal) => {
            const buttonModal = document.querySelector(`#${modal.buttonModal}`);
            const modalFooter = document.querySelector(`#${modal.modalFooter}`);
            if(buttonModal) {
                ModalFooter.showModal(buttonModal, modalFooter);
                ModalFooter.closedModal(modalFooter);
            }
        })
        
    },
    showModal: (buttonModal, modalFooter) => {
        const modalBox = document.querySelector('.modal-footer');
        if(buttonModal) {
            buttonModal.addEventListener('click', () => {
                modalFooter.classList.add('show-modal');
                modalBox.classList.add('show-modal');
            });
        }
    },
    closedModal: (modalFooter) => {
        const btnClosed = document.querySelectorAll(".btn-closed");
        const modalBox = document.querySelector('.modal-footer');
        if(btnClosed) {
            btnClosed.forEach((item) => {
                item.addEventListener('click', () => {
                    modalFooter.classList.remove('show-modal');
                    modalBox.classList.remove('show-modal');
                });
            });
        }
        if(modalBox) {
            modalBox.addEventListener('click', (event) => {
                if(!event.target.closest('.modal-footer__content')) {
                    modalFooter.classList.remove('show-modal');
                    modalBox.classList.remove('show-modal');
                }
            });
        }
    }
}

export default ModalFooter;
