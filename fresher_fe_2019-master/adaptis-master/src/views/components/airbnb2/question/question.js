const ModalQuestion = {
    init: () => {
        const arrModal = [
            {
                idshowModal: 'showModal1',
                idModalQuestion: 'modalQuestion1'
            },
            {
                idshowModal: 'showModal2',
                idModalQuestion: 'modalQuestion2'
            },
            {
                idshowModal: 'showModal3',
                idModalQuestion: 'modalQuestion3'
            },
            {
                idshowModal: 'showModal4',
                idModalQuestion: 'modalQuestion4'
            },
            {
                idshowModal: 'showModal5',
                idModalQuestion: 'modalQuestion5'
            },
            {
                idshowModal: 'showModal6',
                idModalQuestion: 'modalQuestion6'
            }
        ]
        arrModal.forEach((modal) => {
            const idshowModal = document.querySelector(`#${modal.idshowModal}`);
            const idModalQuestion = document.querySelector(`#${modal.idModalQuestion}`);
            if (idshowModal) {
                ModalQuestion.showModal(idshowModal,idModalQuestion);
                ModalQuestion.closedModal(idModalQuestion);
            }
        })
    },

    showModal: (idshowModal, idModalQuestion) => {
        const modalBox = document.querySelector('.modal-question-box');
        if (idshowModal) {
            idshowModal.addEventListener('click', () => {
                idModalQuestion.classList.add('show-modal');
                modalBox.classList.add('show-modal');
            });
        }
    },

    closedModal: (idModalQuestion) => {
        const btnClosed = document.querySelectorAll(".btn-closed");
        const modalBox = document.querySelector(".modal-question-box");
        if(btnClosed) {
            btnClosed.forEach((item) => {
                item.addEventListener('click', () => {
                    idModalQuestion.classList.remove('show-modal');
                    modalBox.classList.remove('show-modal');
                });
            });
        }
        if(modalBox) {
            modalBox.addEventListener('click', (event) => {
                if(!event.target.closest('.modal-question-box__content')) {
                    idModalQuestion.classList.remove('show-modal');
                    modalBox.classList.remove('show-modal');
                }
            });
        }
    }

}

export default ModalQuestion;