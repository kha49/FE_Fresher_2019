// import { type } from "os";
const ContentQuestion = {
    init: () =>{
        let itemQuestion1 = document.getElementById('question1');
        let itemQuestion2 = document.getElementById('question2');
        let itemQuestion3 = document.getElementById('question3');
        let itemQuestion4 = document.getElementById('question4');
        let itemQuestion5 = document.getElementById('question5');
        let itemQuestion6 = document.getElementById('question6');
        
        if (itemQuestion1) {
            itemQuestion1.addEventListener('click', () => {
                ContentQuestion.showModalQuestion1();
            });
        }
        if (itemQuestion2) {
            itemQuestion2.addEventListener('click', () => {
                ContentQuestion.showModalQuestion2();
            });
        }if (itemQuestion3) {
            itemQuestion3.addEventListener('click', () => {
                ContentQuestion.showModalQuestion3();
            });
        }if (itemQuestion4) {
            itemQuestion4.addEventListener('click', () => {
                ContentQuestion.showModalQuestion4();
            });
        }if (itemQuestion5) {
            itemQuestion5.addEventListener('click', () => {
                ContentQuestion.showModalQuestion5();
            });
        }if (itemQuestion6) {
            itemQuestion6.addEventListener('click', () => {
                ContentQuestion.showModalQuestion6();
            });
        }
    },
    showModalQuestion1: () => {
        let modalQuestion1 = document.getElementById('modalQuestion1');
        
        let modalQuestion = document.getElementById('modalContentQuestion');

        if (modalQuestion1) {
            modalQuestion1.style.display = "block";
        }
        if (modalQuestion) {
            modalQuestion.style.display = "block";
        }
    },
    showModalQuestion2: () => {
        let modalQuestion2 = document.getElementById('modalQuestion2');
        
        let modalQuestion = document.getElementById('modalContentQuestion');

        if (modalQuestion2) {
            modalQuestion2.style.display = "block";
        }
        if (modalQuestion) {
            modalQuestion.style.display = "block";
        }
    },
    showModalQuestion3: () => {
        let modalQuestion3 = document.getElementById('modalQuestion3');
        
        let modalQuestion = document.getElementById('modalContentQuestion');

        if (modalQuestion3) {
            modalQuestion3.style.display = "block";
        }
        if (modalQuestion) {
            modalQuestion.style.display = "block";
        }
    },
    showModalQuestion4: () => {
        let modalQuestion4 = document.getElementById('modalQuestion4');
        
        let modalQuestion = document.getElementById('modalContentQuestion');

        if (modalQuestion4) {
            modalQuestion4.style.display = "block";
        }
        if (modalQuestion) {
            modalQuestion.style.display = "block";
        }
    },
    showModalQuestion5: () => {
        let modalQuestion5 = document.getElementById('modalQuestion5');
        
        let modalQuestion = document.getElementById('modalContentQuestion');

        if (modalQuestion5) {
            modalQuestion5.style.display = "block";
        }
        if (modalQuestion) {
            modalQuestion.style.display = "block";
        }
    },
    showModalQuestion6: () => {
        let modalQuestion6 = document.getElementById('modalQuestion6');
        
        let modalQuestion = document.getElementById('modalContentQuestion');

        if (modalQuestion6) {
            modalQuestion6.style.display = "block";
        }
        if (modalQuestion) {
            modalQuestion.style.display = "block";
        }
    }
};

export default ContentQuestion;