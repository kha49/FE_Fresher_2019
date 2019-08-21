// import { type } from "os";
const FooterModal = {
    init: () =>{

        let closeBtnFooter1 = document.getElementById('closeBtnFooter1');
        let closeBtnFooter2 = document.getElementById('closeBtnFooter2');
        let modalFooter = document.getElementById('modalFooter');

        
        if (closeBtnFooter1) {
            closeBtnFooter1.addEventListener('click', () => {
                FooterModal.hideModalLanguage();
            });
        }

        window.addEventListener('click', (event) => {
            if (event.target == modalFooter) {
                modalFooter.style.display = "none";
            }
        });

        if (closeBtnFooter2) {
            closeBtnFooter2.addEventListener('click', () => {
                FooterModal.hideModalMoney();
            });
        }      
    },
    hideModalLanguage: () => {
        let modalFooter = document.getElementById('modalFooter');

        if (modalFooter) {
            modalFooter.style.display = "none";
        }

        
    },
    hideModalMoney: () => {
        let modalFooter = document.getElementById('modalFooter');

        if (modalFooter) {
            modalFooter.style.display = "none";
        }
    },
};

export default FooterModal;