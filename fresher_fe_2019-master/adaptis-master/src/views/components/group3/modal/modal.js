const Modal = {
    init: () => {
        // let modalTrending = document.getElementsByClassName("ModalTrending");
        let modalTrending = document.querySelectorAll('.ModalTrending');
        let modalHotsale = document.getElementsByClassName("modalHotsale");
        const modals = [];
        for (let i = 0; i < modalTrending.length; i++) {
            modals.push(
                {
                    modalBtn: "modalBtn" + i,
                    modal: "modalContent" + i,
                    closerBtn: "closeBtn" + i,
                    addToCard: "addToCard" + i
                }
            );

        }
        modalTrending.forEach(element => {
            console.log(modalTrending);
        });
        for (let i = 0; i < modalHotsale.length; i++) {
            modals.push(
                {
                    modalBtn: "modalHotsaleBtn" + i,
                    modal: "modalHotsaleContent" + i,
                    closerBtn: "closeHotsaleBtn" + i,
                    addToCard: "addToCarda" + i
                }
            );

        }
        modals.forEach(items => {
            const modalBtn = document.getElementById(items.modalBtn);
            const modalContent = document.getElementById(items.modal);
            const closerBtn = document.getElementById(items.closerBtn);
            const addToCard = document.getElementById(items.addToCard);

            if (modalBtn) {
                Modal.showModal(modalBtn, modalContent);
                Modal.closeModal(closerBtn, modalContent);
                Modal.addToCard(addToCard,modalContent);
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
    },
    addToCard:(addToCard,modalContent)=>{
        console.log(modalContent);
    }
}

export default Modal;