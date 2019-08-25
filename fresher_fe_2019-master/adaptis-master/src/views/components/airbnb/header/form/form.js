const form = {
    init: () => {
        let room= document.getElementById('room');
        let guests= document.getElementById('guests');
        let priceTop =document.getElementById('text-price');
        let priceBottom = document.getElementById('price');
       if (room) {
           form.tinhtien(room,guests,priceTop,priceBottom);
       }
    },
    tinhtien: (room,guests,priceTop,priceBottom) =>{       
        room.addEventListener('change', () =>{
            priceTop.innerHTML = room.value*guests.value;
            priceBottom.innerHTML = room.value*guests.value;
        })
        guests.addEventListener('change', () =>{
            priceTop.innerHTML = room.value*guests.value;
            priceBottom.innerHTML = room.value*guests.value;
        })
    }
}

export default form;