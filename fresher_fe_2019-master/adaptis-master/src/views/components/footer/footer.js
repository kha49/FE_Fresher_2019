const footer = {
    init: () =>{

        let btnSubscribe = document.getElementById('btnSubscribe');

        if (btnSubscribe) {
            btnSubscribe.addEventListener('click', () => {
                footer.showModalFooter();
            });
        }
    },

    showModalFooter: () => {
        let modalFooter = document.getElementById('modalFooter');
        
        if (modalFooter) {
            modalFooter.style.display = "block";
        }
    }
};

export default footer;