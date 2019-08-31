const search = {
    init: () =>{

        let kemSearch = document.getElementById('kemSearch');
        let formSecond = document.getElementById("formSecond");


        if (kemSearch) {
            kemSearch.addEventListener('click', () => {
                search.showHideKemSearch();
            });
        }

        // window.onclick = function(event) {
        //     if (event.target == formSecond) {
        //         formSecond.style.display = "none";
        //     }
        // }
    },

    showHideKemSearch: () => {
        let formSecond = document.getElementById("formSecond");
        let formPrimaryPeople = document.getElementById("formPrimaryPeople");

        if (formPrimaryPeople) {
            formPrimaryPeople.style.display = "unset";    
        }

        if (formSecond) {
            formSecond.style.display = "flex"; 
        }
    }
};

export default search;