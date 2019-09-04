const destinationPlace = {
    init: () =>{
        const filterArr = [
            {
                idBtn: 'idBtn1',
                listFilter: 'listFilter1'
            },
            {
                idBtn: 'idBtn2',
                listFilter: 'listFilter2'
            },
            {
                idBtn: 'idBtn3',
                listFilter: 'listFilter3'
            },
            {
                idBtn: 'idBtn4',
                listFilter: 'listFilter4'
            }
        ]

        filterArr.forEach(filterItem => {
            const filterBtn = document.querySelector(`#${filterItem.idBtn}`);
            const filterList = document.querySelector(`#${filterItem.listFilter}`);
            if (filterBtn) {
                destinationPlace.showFilterList(filterBtn, filterList);
            }
        });
    },

    showFilterList: (filterBtn, filterList) => {
        filterBtn.addEventListener('click', () => {
            if (filterList) {
                filterList.classList.toggle("show-list-filter");
            }
        });
    },

    filter: () => {
            // external js: isotope.pkgd.js
        // $(window).trigger('load', function(){
            // jQuery( function() {
            // init Isotope
        $(document).ready(function() {
            var $area = $('.kem-destination-place__area').isotope({
                itemSelector: '.kem-destination-place__area__item'
            });
            
            // store filter for each group
            var filters = {};
            
            $('.filters').on( 'click', '.kem-destination-place__btn-block__item', function( event ) {
                var $button = $( event.currentTarget );
                // get group key
                var $buttonGroup = $button.parents('.kem-destination-place__btn-block__list');
                var filterGroup = $buttonGroup.attr('data-filter-group');
                // set filter for group
                filters[ filterGroup ] = $button.attr('data-filter');
                // combine filters
                var filterValue = concatValues( filters );
                // set filter for Isotope
                $area.isotope({ filter: filterValue });
            });
            
            // change is-checked class on buttons
            // $('.kem-destination-place__btn-block').each( function( i, buttonGroup ) {
            //     var $buttonGroup = $( buttonGroup );
            //     $buttonGroup.on( 'click', 'button', function( event ) {
            //     $buttonGroup.find('.is-checked').removeClass('is-checked');
            //     var $button = $( event.currentTarget );
            //     $button.addClass('is-checked');
            //     });
            // });
                
            // flatten object by concatting values
            function concatValues( obj ) {
                var value = '';
                for ( var prop in obj ) {
                value += obj[ prop ];
                }
                return value;
            }
        });
    }
};

export default destinationPlace;