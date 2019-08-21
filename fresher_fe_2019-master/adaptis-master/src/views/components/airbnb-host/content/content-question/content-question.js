const ContentQuestion = {
    init: () =>{
        const arrQuestion = [
            {
                questionId: 'question1',
                modalQuestionId: 'modalQuestion1'
            },
            {
                questionId: 'question2',
                modalQuestionId: 'modalQuestion2'
            },
            {
                questionId: 'question3',
                modalQuestionId: 'modalQuestion3'
            },
            {
                questionId: 'question4',
                modalQuestionId: 'modalQuestion4'
            },
            {
                questionId: 'question5',
                modalQuestionId: 'modalQuestion5'
            },
            {
                questionId: 'question6',
                modalQuestionId: 'modalQuestion6'
            },
        ]
        arrQuestion.forEach(question => {
            const itemQuestion = document.querySelector(`#${question.questionId}`);
            const itemQuestionModal = document.querySelector(`#${question.modalQuestionId}`);
            if (itemQuestion) {
                ContentQuestion.showModalQuestion(itemQuestion, itemQuestionModal);
            }
        });
    },
    showModalQuestion: (itemQuestion, modalQuestion) => {
        let modalContentQuestion = document.getElementById('modalContentQuestion');
        itemQuestion.addEventListener('click', () => {
            if (modalQuestion) {
                modalQuestion.style.display = "block";
            }
            if (modalContentQuestion) {
                modalContentQuestion.style.display = "block";
            }
        });

    }
};

export default ContentQuestion;