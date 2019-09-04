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
};

export default footerModal;