const search = {
    init: () =>{

        let kemSearch = document.getElementById('kemSearch');
        let formSecond = document.getElementById("formSecond");
        let btnSearchNotDesktop = document.getElementById('btnSearchNotDesktop');
        let closeFormSearch = document.getElementById('closeFormSearch');
        let partnerDestinations = document.getElementById('partnerDestinations')

        if (kemSearch) {
            kemSearch.addEventListener('click', () => {
                search.showHideKemSearch();
            });
        }

        if (btnSearchNotDesktop) {
            btnSearchNotDesktop.addEventListener('click', () => {
                search.ShowSearchModalNotDesktop();
            });
        }

        if (closeFormSearch) {
            closeFormSearch.addEventListener('click', () => {
                search.HideKemSearch();
            });
        }

        if (partnerDestinations) {
            partnerDestinations.addEventListener('click', () => {
                search.showModalSearchDesktop();
            });
        }

        $(document).ready(function() {
			$("#input").change(function(event) {
				/* Act on the event */
				var select = $(this).select().val();
				console.log(select);
				// $("#test").empty();
				var strings = '';
				// var tmpString = '<div>';
				for (var i = 0; i < select; i++) {
					var string = '<select id="color'+(i+1)+'" class="color color'+(i+1)+' form-control-static">'
						+'<option>1</option>'
						+'<option>2</option>'
						+'<option>3</option>'
						+'<option>4</option>'+
						'</select>';
						strings += string;
				};
				// tmpString += strings + '</div>';
				$("#test").html(strings);
			});
		});
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
    },

    HideKemSearch: () => {
        let formSecond = document.getElementById("formSecond");
        let formPrimaryPeople = document.getElementById("formPrimaryPeople");

        if (formPrimaryPeople) {
            formPrimaryPeople.style.display = "none";    
        }

        if (formSecond) {
            formSecond.style.display = "none"; 
        }
    },

    ShowSearchModalNotDesktop: () => {
        let searchBlockModal = document.getElementById("searchBlockModal");
        let headerNavToggle = document.getElementsByClassName('header-nav-toggle');
        let toggleBlock = document.getElementsByClassName('toggle-block');

        if (searchBlockModal) {
            searchBlockModal.style.display = "unset";    
        }

        if (headerNavToggle) {
            for (let i = 0; i < headerNavToggle.length; i++) {
                headerNavToggle[i].style.display = "none";   
            }    
        }

        if (headerNavToggle) {
            for (let j = 0; j < toggleBlock.length; j++) {
                toggleBlock[j].style.display = "none";   
            }    
        }
    },

    showModalSearchDesktop: () => {
        let modalSearch = document.getElementById('modalSearch')

        if (modalSearch) {
            modalSearch.style.display = "unset";    
        }
    },
};

export default search;