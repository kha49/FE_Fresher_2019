// import { parseExpression } from "../../../../../../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/@types/babylon";

const HeaderAirBnb = {
    scrollFunction: () => {
        const headerSticky = document.querySelector('.airbnbUpdate-header-sticky__bottom');
        if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            if(headerSticky) {
                headerSticky.style.bottom = "0";
            }
        } else {
            if(headerSticky) {
                headerSticky.style.bottom = "-60px";
            }
        }
    },

    init: () => {
        let typeRoom = document.querySelector('#room-type');
        let numberGuests = document.querySelector('#guests-number');
        if(typeRoom && numberGuests) {
            typeRoom.addEventListener('change', () => {
                HeaderAirBnb.roomChange(typeRoom);
            });
            numberGuests.addEventListener('change', () => {
                HeaderAirBnb.guestsChange(numberGuests);
            });
        }
    },

    roomChange: (typeRoom) => {
        let valueGuests = document.querySelector('#guests-number').value;
        let cost = ['#total', '#title-total', '#form-total-cost'];
        for(let i = 0; i < cost.length; i++)
            document.querySelector(cost[i]).innerHTML = "$" + parseInt(typeRoom.value) * parseInt(valueGuests);
    },

    guestsChange: (numberGuests) => {
        let valueRoom = document.querySelector('#room-type').value;
        let cost = ['#total', '#title-total', '#form-total-cost'];
        for(let i = 0; i < cost.length; i++)
            document.querySelector(cost[i]).innerHTML = "$" + parseInt(numberGuests.value) * parseInt(valueRoom);
    },

    modal: () => {
        let btn = document.querySelector('#getStarted');
        let modalForm = document.querySelector('#modal-form');
        let closeButton = document.querySelector('#close');
        btn.addEventListener('click', () => {
            modalForm.style.display = "block";
        }),
        closeButton.addEventListener('click', () => {
            modalForm.style.display = "none";
        }),
        window.addEventListener('click', (event) => {
            if(event.target == modalForm) {
                modalForm.style.display = "none";
            }
        })
    }
};

export default HeaderAirBnb;