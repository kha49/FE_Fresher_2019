const Modal = {
    init: () => {
        // Theo a thì mình nên tạo ra mảng cấc đối tượng modal gồm các trường như là idBtn, idmodal, idContent, idCloseBtn
        // B1: Tạo một mảng đối tượng các modal
        const Modals = [
            {
                idBtn: "btnLogin",
                idModal: "modalLogin",
                idContent: "modalContentLogin",
                idCloseModal: "closeBtn"
            },
            {
                idBtn: "1",
                idModal: "question-modal",
                idContent: "modal1",
                idCloseModal: "modal01"
            },
            {
                idBtn: "1",
                idModal: "question-modal",
                idContent: "modal1",
                idCloseModal: "modal01"
            },
            {
                idBtn: "2",
                idModal: "question-modal",
                idContent: "modal2",
                idCloseModal: "modal02"
            },
            {
                idBtn: "3",
                idModal: "question-modal",
                idContent: "modal3",
                idCloseModal: "modal03"
            },
            {
                idBtn: "4",
                idModal: "question-modal",
                idContent: "modal4",
                idCloseModal: "modal04"
            },
            {
                idBtn: "5",
                idModal: "question-modal",
                idContent: "modal5",
                idCloseModal: "modal05"
            },
            {
                idBtn: "6",
                idModal: "question-modal",
                idContent: "modal6",
                idCloseModal: "modal06"
            }
        ]
        //  B2: Duyệt mảng các đối tượng để chọn.
        Modals.forEach(modal => {
            const idBtn = document.getElementById(modal.idBtn);
            const idModal = document.getElementById(modal.idModal);
            const idContent = document.getElementById(modal.idContent);
            const idCloseModal = document.getElementById(modal.idCloseModal);
            // Kiểm tra null 
            if (idContent) {
                // Gọi hàm hiển thị modal cho từng modal
                Modal.showModal(idBtn, idModal, idContent);
                // Gọi hàm đóng modal cho từng modal
                Modal.closeModal(idCloseModal, idModal, idContent);
            }
        });

    },
    // Hàm hiển thị modal
    showModal: (idBtn, idModal, idContent) => {
        idBtn.addEventListener('click', () => {
            idModal.style.display = "block";
            idContent.style.display = "block";
        });
    },
    // Hàm đóng modal
    closeModal: (idCloseModal, idModal, idContent) => {
        idCloseModal.addEventListener('click', () => {
            idModal.style.display = "none";
            idContent.style.display = "none";
        });
        window.addEventListener('click', (e) => {
            if (e.target == idModal) {
                idModal.style.display = "none";
                idContent.style.display = "none";
            }
        });
    }
}
export default Modal;
