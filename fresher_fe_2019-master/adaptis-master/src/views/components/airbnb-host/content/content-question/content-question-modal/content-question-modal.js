// import { type } from "os";
const ContentQuestionModal = {
    init: () =>{
        let closeBtn1 = document.getElementById('closeBtn1');
        let closeBtn2 = document.getElementById('closeBtn2');
        let closeBtn3 = document.getElementById('closeBtn3');
        let closeBtn4 = document.getElementById('closeBtn4');
        let closeBtn5 = document.getElementById('closeBtn5');
        let closeBtn6 = document.getElementById('closeBtn6');
        
        if (closeBtn1) {
            closeBtn1.addEventListener('click', () => {
                ContentQuestionModal.hideModalQuestion1();
            });
        }
        if (closeBtn2) {
            closeBtn2.addEventListener('click', () => {
                ContentQuestionModal.hideModalQuestion2();
            });
        }if (closeBtn3) {
            closeBtn3.addEventListener('click', () => {
                ContentQuestionModal.hideModalQuestion3();
            });
        }if (closeBtn4) {
            closeBtn4.addEventListener('click', () => {
                ContentQuestionModal.hideModalQuestion4();
            });
        }if (closeBtn5) {
            closeBtn5.addEventListener('click', () => {
                ContentQuestionModal.hideModalQuestion5();
            });
        }if (closeBtn6) {
            closeBtn6.addEventListener('click', () => {
                ContentQuestionModal.hideModalQuestion6();
            });
        }
    },
    hideModalQuestion1: () => {
        
        let modalQuestion = document.getElementById('modalContentQuestion');

        if (modalQuestion) {
            modalQuestion.style.display = "none";
        }
    },
    hideModalQuestion2: () => {
        
        let modalQuestion = document.getElementById('modalContentQuestion');

        if (modalQuestion) {
            modalQuestion.style.display = "none";
        }
    },
    hideModalQuestion3: () => {
        
        let modalQuestion = document.getElementById('modalContentQuestion');

        if (modalQuestion) {
            modalQuestion.style.display = "none";
        }
    },
    hideModalQuestion4: () => {
        
        let modalQuestion = document.getElementById('modalContentQuestion');

        if (modalQuestion) {
            modalQuestion.style.display = "none";
        }
    },
    hideModalQuestion5: () => {
        
        let modalQuestion = document.getElementById('modalContentQuestion');

        if (modalQuestion) {
            modalQuestion.style.display = "none";
        }
    },
    hideModalQuestion6: () => {
        
        let modalQuestion = document.getElementById('modalContentQuestion');

        if (modalQuestion) {
            modalQuestion.style.display = "none";
        }
    }
};

export default ContentQuestionModal;