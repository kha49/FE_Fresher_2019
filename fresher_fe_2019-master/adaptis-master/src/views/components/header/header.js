const header = {
    init: () =>{

        let lang = document.getElementById('lang');
        let account = document.getElementById('account');

        if (lang) {
            lang.addEventListener('click', () => {
                header.modalHeaderLang();
            });
        }

        if (account) {
            account.addEventListener('click', () => {
                header.modalHeaderAccount();
            });
        }
    },

    modalHeaderLang: () => {
        let langList = document.getElementById("langList");

        if (langList) {
            langList.classList.toggle("open");    
        }
    },
    
    modalHeaderAccount: () => {
        let account = document.getElementById('accountContainer');

        if (account) {
            account.classList.toggle("open");    
        }
    },
};

export default header;