const ChangePrice = {
    init: () => {
        let roomType = document.querySelector('#roomType');
        let peopleNumber = document.querySelector('#peopleNumber');
        if(roomType && peopleNumber) {
            roomType.addEventListener('change', () => {
                ChangePrice.changeRoom(roomType);
            });
            peopleNumber.addEventListener('change', () => {
                ChangePrice.changePeople(peopleNumber);
            });   
        }
    },
    changeRoom: (roomType) => {
        let roomValue = roomType.value;
        let peopleValue = document.querySelector('#peopleNumber').value;
        let price = document.querySelector('#totalPrice');
        let priceNav = document.querySelector('#totalPriceNav');
        price.innerHTML = "$" + parseInt(roomValue) * parseInt(peopleValue);
        priceNav.innerHTML = price.innerHTML;
    },
    changePeople: (peopleNumber) => {
        let roomValue = document.querySelector('#roomType').value;
        let peopleValue = peopleNumber.value;
        let price = document.querySelector('#totalPrice');
        let priceNav = document.querySelector('#totalPriceNav');
        price.innerHTML = "$" + parseInt(roomValue) * parseInt(peopleValue);
        priceNav.innerHTML = price.innerHTML;
    }
};

export default ChangePrice;