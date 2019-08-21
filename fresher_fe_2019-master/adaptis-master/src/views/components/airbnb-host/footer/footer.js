// import { type } from "os";
const Footer = {
    init: () =>{

        let showLanguage = document.getElementById('showLanguage');
        let showMoney = document.getElementById('showMoney');
        
        if (showLanguage) {
            showLanguage.addEventListener('click', () => {
                Footer.showModalLanguage();
            });
        }
        if (showMoney) {
            showMoney.addEventListener('click', () => {
                Footer.showModalMoney();
            });
        }
    },
    showModalLanguage: () => {
        let modalLanguage = document.getElementById('modalLanguage');
        let modalFooter = document.getElementById('modalFooter');

        if (modalLanguage) {
            modalLanguage.style.display = "block";
        }

        if (modalFooter) {
            modalFooter.style.display = "block";
            modalFooter.style.height = "100%";
            modalFooter.style.position = "fixed";
        }
    },
    showModalMoney: () => {
        let modalFooter = document.getElementById('modalFooter');
        let modalMoney = document.getElementById('modalMoney');

        if (modalMoney) {
            modalMoney.style.display = "block";
        }

        if (modalFooter) {
            modalFooter.style.display = "block";
            modalFooter.style.height = "100%";
            modalFooter.style.position = "fixed";
        }
    },
};

export default Footer;