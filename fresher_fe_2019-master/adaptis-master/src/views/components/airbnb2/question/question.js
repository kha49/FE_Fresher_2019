const ModalQuestion = {
    init: () => {
        const arrModal = [
            {
                showModal: 'showModal1',
                modalQuestion: 'modalQuestion1'
            },
            {
                showModal: 'showModal2',
                modalQuestion: 'modalQuestion2'
            },
            {
                showModal: 'showModal3',
                modalQuestion: 'modalQuestion3'
            },
            {
                showModal: 'showModal4',
                modalQuestion: 'modalQuestion4'
            },
            {
                showModal: 'showModal5',
                modalQuestion: 'modalQuestion5'
            },
            {
                showModal: 'showModal6',
                modalQuestion: 'modalQuestion6'
            }
        ]
        arrModal.forEach((modal) => {
            const showModal = document.querySelector(`#${modal.showModal}`);
            const modalQuestion = document.querySelector(`#${modal.modalQuestion}`);
            if (showModal) {
                ModalQuestion.showModal(showModal, modalQuestion);
                ModalQuestion.closedModal(modalQuestion);
            }
        })
    },

    showModal: (showModal, modalQuestion) => {
        const modalBox = document.querySelector('.modal-question-box');
        const airBody = document.querySelector('body');

        if (showModal) {
            showModal.addEventListener('click', () => {
                modalQuestion.classList.add('show-modal');
                modalBox.classList.add('show-modal');
                airBody.classList.add('is-noscroll');
            });
        }
    },

    closedModal: (modalQuestion) => {
        const btnClosed = document.querySelectorAll(".btn-closed");
        const modalBox = document.querySelector(".modal-question-box");
        const airBody = document.querySelector('body');
        if (btnClosed) {
            btnClosed.forEach((item) => {
                item.addEventListener('click', () => {
                    if (modalQuestion) {
                        modalQuestion.classList.remove('show-modal');
                    }
                    modalBox.classList.remove('show-modal');
                    airBody.classList.remove('is-noscroll');
                });
            });
        }
        if (modalBox) {
            modalBox.addEventListener('click', (event) => {
                if (!event.target.closest('.modal-question-box__content')) {
                    if (modalQuestion) {
                        modalQuestion.classList.remove('show-modal');
                    }
                    modalBox.classList.remove('show-modal');
                    airBody.classList.remove('is-noscroll');
                }
            });
        }
    }

}

export default ModalQuestion;