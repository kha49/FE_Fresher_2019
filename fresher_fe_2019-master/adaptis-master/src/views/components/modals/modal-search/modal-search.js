const searchModal = {
    init: () =>{

        let closeSearchModalMobile = document.getElementById('closeSearchModalMobile');
        let btnCloseSearchModal = document.getElementById('btnCloseSearchModal')

        if (closeSearchModalMobile) {
            closeSearchModalMobile.addEventListener('click', () => {
                searchModal.hideSeachModalMobile();
            });
        }

        if (btnCloseSearchModal) {
            btnCloseSearchModal.addEventListener('click', () => {
                searchModal.hideModalSearchDesktop();
            });
        }

        window.onclick = function(event) {
            if (event.target == modalSearch) {
                modalSearch.style.display = "none";
            }
          }
    },

    hideSeachModalMobile: () => {
        let searchBlockModal = document.getElementById("searchBlockModal");
        let headerNavToggle = document.getElementsByClassName('header-nav-toggle');
        let toggleBlock = document.getElementsByClassName('toggle-block');

        if (searchBlockModal) {
            searchBlockModal.style.display = "none";    
        }

        if (headerNavToggle) {
            for (let i = 0; i < headerNavToggle.length; i++) {
                headerNavToggle[i].style.display = "block";   
            }    
        }

        if (headerNavToggle) {
            for (let j = 0; j < toggleBlock.length; j++) {
                toggleBlock[j].style.display = "unset";   
            }    
        }
    },

    hideModalSearchDesktop: () => {
        let modalSearch = document.getElementById('modalSearch')

        if (modalSearch) {
            modalSearch.style.display = "none";    
        }
    }
};

export default searchModal;