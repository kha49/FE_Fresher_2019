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
        
        let region = [
            {id: 0, number: ""},
            {id: 1, number: 0},
            {id: 2, number: 1},
            {id: 3, number: 2},
            {id: 4, number: 3}    
        ];

        let country = [
            {id: 0},
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4},
            {id: 5},
            {id: 6},
            {id: 7},
            {id: 8},
            {id: 9},
            {id: 10},
            {id: 11},
            {id: 12},
            {id: 13},
            {id: 14},
            {id: 15},
            {id: 16},
            {id: 17},
            {id: 18},
            {id: 19},
            {id: 20},
            {id: 21},
            {id: 22},
            {id: 23},
            {id: 24},
            {id: 25},
            {id: 26},
            {id: 27},
            {id: 28}        
        ];

        let experience = [
            {id: 0},
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4},
            {id: 5},
            {id: 6}
        ];

        region.forEach(item => {
            $("#r"+item.id).click(function () {
                if (item.id > 0) {
                    $(".kem-destination-place__area__item").filter(function (index) {
                        return index == item.number;
                    }).css("opacity", 1);
                    $(".kem-destination-place__area__item:not(.r"+item.id+")").css("opacity", 0.2);    
                } 
                if(item.id <= 0){
                    $(".kem-destination-place__area__item").css("opacity", 1);
                }
            }); 
        }); 

        country.forEach(itemLv2 => {
            $("#c"+itemLv2.id).click(function () {
                if (itemLv2.id > 0) {
                    $(".kem-destination-place__area__itemLv2").filter(".c"+itemLv2.id).css("opacity", 1);
                    $(".kem-destination-place__area__itemLv2:not(.c"+itemLv2.id+")").css("opacity", 0.2);    
                } 
                if(itemLv2.id <= 0){
                    $(".kem-destination-place__area__itemLv2").css("opacity", 1);
                }
            }); 
        });
        
        experience.forEach(itemLv3 => {
            $("#e"+itemLv3.id).click(function () {
                if (itemLv3.id > 0) {
                    $(".kem-destination-place__area__itemLv3").filter(".e"+itemLv3.id).css("opacity", 1);
                    $(".kem-destination-place__area__itemLv3:not(.e"+itemLv3.id+")").css("opacity", 0.2);    
                } 
                if(itemLv3.id <= 0){
                    $(".kem-destination-place__area__itemLv3").css("opacity", 1);
                }
            }); 
        }); 
    },

    showFilterList: (filterBtn, filterList) => {
        filterBtn.addEventListener('click', () => {
            if (filterList) {
                filterList.classList.toggle("show-list-filter");
            }
        });
    },
};

export default destinationPlace;