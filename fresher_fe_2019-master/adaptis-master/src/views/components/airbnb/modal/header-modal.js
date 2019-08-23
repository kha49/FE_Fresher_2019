const Modal = {
    init: () => {
        let modal = [
            {
                idBtn : 'btnLogin',
                modalContent: 'formLgogin',
                modalCha: 'header-modal',
                closeBtn: 'icon-close'
            },
            {
                idBtn : '1',
                modalContent: 'modalQs1',
                modalCha: 'contentAnswerQuestions',
                closeBtn: 'close2'
            },
            {
                idBtn : '2',
                modalContent: 'modalQs2',
                modalCha: 'contentAnswerQuestions',
                closeBtn: 'close3'
            },
            {
                idBtn : '3',
                modalContent: 'modalQs3',
                modalCha: 'contentAnswerQuestions',
                closeBtn: 'close4'
            },
            {
                idBtn : '4',
                modalContent: 'modalQs4',
                modalCha: 'contentAnswerQuestions',
                closeBtn: 'close5'
            },
            {
                idBtn : '5',
                modalContent: 'modalQs5',
                modalCha: 'contentAnswerQuestions',
                closeBtn: 'close6'
            },
            {
                idBtn : '6',
                modalContent: 'modalQs6',
                modalCha: 'contentAnswerQuestions',
                closeBtn: 'close7'
            }
        ];
        
        modal.forEach( val => {
            const btn = document.getElementById(val.idBtn);
            const modalBig = document.getElementById(val.modalContent);
            const modalCha = document.getElementById(val.modalCha);
            const close = document.getElementById(val.closeBtn);
            if (btn) {
                Modal.showModal(btn,modalBig,modalCha);
                Modal.closeModal(close,modalBig,modalCha);
            }
        });
    },
    showModal: (btn,modalBig,modalCha)=>{
        btn.addEventListener('click', () => {
            modalCha.style.display='block';
            modalBig.style.display='block';
        });
    },
    
    
}

export default Modal;