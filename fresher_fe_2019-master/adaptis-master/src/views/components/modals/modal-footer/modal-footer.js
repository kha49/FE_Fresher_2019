const footerModal = {
    init: () =>{

        let btnClose = document.getElementById('btnClose');

        if (btnClose) {
            btnClose.addEventListener('click', () => {
                footerModal.hideModalFooter();
            });
        }

        window.onclick = function(event) {
            if (event.target == modalFooter) {
                modalFooter.style.display = "none";
            }
        }
    },

    hideModalFooter: () => {
        let modalFooter = document.getElementById('modalFooter');
        
        if (modalFooter) {
            modalFooter.style.display = "none";
        }
    
    },
    validate: () => {
        const btnSubmitform = document.querySelector('#btnSubscribeModal');
        let email = document.querySelector('#email');
        const _regEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2,6}|com|vn|net)$/;
        
        if(btnSubmitform) {
            btnSubmitform.addEventListener('click', () => {
                if (email.value == "") {
                    document.querySelector('#message').innerHTML = "This is required";
                    document.querySelector('#message').style.color = "red";
                    return false;
                }
            })
        }
        if(email) {
            email.addEventListener('blur', () => {
                if(!_regEmail.test(email.value)) {
                    document.querySelector('#message').innerHTML = "Please enter a valid email address.";
                    document.querySelector('#message').style.color = "red";
                    return false;
                }
                else {
                    document.querySelector('#message').innerHTML = "";
                    return true;
                }
            } )
        }
    }
};

export default footerModal;