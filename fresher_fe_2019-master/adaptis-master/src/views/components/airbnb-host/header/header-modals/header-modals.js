
const HeadersModal = {
    init: () =>{

        let btnCloseHeader = document.getElementById('btn-close-header');
        
        if (btnCloseHeader) {
            btnCloseHeader.addEventListener('click', () => {
                HeadersModal.hideModalHeaders();
            });
        }
    },
    hideModalHeaders: () => {
        let modalHeader = document.getElementById('modal-header');
        
        if (modalHeader) {
            modalHeader.style.display = "none";
        }
    }
};

export default HeadersModal;