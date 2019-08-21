// import { type } from "os";
const Headers = {
    init: () =>{

        let btnHeaders = document.getElementById('btn-header');
        let btnHeadersBrand = document.getElementById('btn-header-brand');
        let typeRoom = document.getElementById('room-type');
        let numberPeople = document.getElementById('people-number');

        
        if (btnHeaders) {
            btnHeaders.addEventListener('click', () => {
                Headers.showModalHeaders();
            });
        }
        if (btnHeadersBrand) {
            btnHeadersBrand.addEventListener('click', () => {
                Headers.showModalHeaders();
            });
        }
        if (typeRoom && numberPeople) {
            typeRoom.addEventListener('change', () => {
                Headers.priceChange(typeRoom);
            });
            numberPeople.addEventListener('change', () => {
                Headers.peopleChange(numberPeople);
            });
        }
    },
    showModalHeaders: () => {
        let modalHeaders = document.getElementById('modal-header');
        
        if (modalHeaders) {
            modalHeaders.style.display = "block";
            modalHeaders.style.position = "fixed";
        }
    },
    priceChange: (typeRoom) => {
        // debugger;
        let valueRoom = typeRoom.value;
        let valuePeole = document.getElementById('people-number').value;
        let message = document.getElementById('price-number');
        let messageBrand = document.getElementById('priceBrandNumber')
        
        message.innerHTML = "$" + parseInt(valueRoom) * (parseInt(valuePeole)+1);
        messageBrand.innerHTML = message.innerHTML;
    },

    peopleChange: (numberPeople) => {
        // debugger;
        let valueRoom = document.getElementById('room-type').value;
        let valuePeole = numberPeople.value;
        let message = document.getElementById('price-number');
        let messageBrand = document.getElementById('priceBrandNumber')
        
        message.innerHTML = "$" + parseInt(valueRoom) * (parseInt(valuePeole)+1);
        messageBrand.innerHTML = message.innerHTML;
     }
};

export default Headers;