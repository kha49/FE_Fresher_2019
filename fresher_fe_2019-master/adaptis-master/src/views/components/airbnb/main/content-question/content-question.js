const Modal = {
    init: () => {
        let modal = document.querySelector('.form-login');
        let form = document.querySelector('.form-login__content');
        let btnLogin = document.querySelector('#btnLogin');
        let closebtn = document.querySelector('#closeBtn');

        btnLogin.addEventListener('click', () => {
           modal.style.display = 'block';  
           form.style.display = 'block'; 
        });
        closebtn.addEventListener('click', () =>{
            modal.style.display = 'none';  
            form.style.display = 'none';
        });
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }

        let modalContent = [
            {
                idBtn: "1",
                idClose:"closeBtn1",
                content: 'modal1'
            },
            {
                idBtn: "2",
                idClose:"closeBtn2",
                content: 'modal2'
            },
            {
                idBtn: "3",
                idClose:"closeBtn3",
                content: 'modal3'
            },
            {
                idBtn: "4",
                idClose:"closeBtn4",
                content: 'modal4'
            },
            {
                idBtn: "5",
                idClose:"closeBtn5",
                content: 'modal5'
            },
            {
                idBtn: "6",
                idClose:"closeBtn6",
                content: 'modal6'
            }
        ];
        modalContent.forEach(modal => {
            const itemQuestion = document.getElementById(modal.idBtn);
            const itemQuestionClose = document.getElementById(modal.idClose);
            const itemQuestionModal = document.getElementById(modal.content);
            if (itemQuestion) {
                Modal.showModal(itemQuestion, itemQuestionModal, itemQuestionClose);
            }
        });
    },
    showModal: (itemQuestion, itemQuestionModal,  itemQuestionClose) => {
        let modalContentQuestion = document.getElementById('question-modal');
        itemQuestion.addEventListener('click', () => {
            if (itemQuestionClose) {
                itemQuestionClose.style.display = "block";
            }
            if (modalContentQuestion) {
                modalContentQuestion.style.display = "block";
            }
            if (itemQuestionModal) {
                itemQuestionModal.style.display = "block";
            }
        });
    }
}
export default Modal;