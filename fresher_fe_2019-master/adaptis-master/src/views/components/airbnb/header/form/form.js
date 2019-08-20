const Form = {
    init: () =>{
        let room = document.getElementById('Room');
        let people = document.getElementById('People');
        room.addEventListener('change', () => {
            finalPrice.innerHTML = "$"+room.value*people.value;
            finalprice.innerHTML = "$"+room.value*people.value;
        });
        people.addEventListener('change', () => {
            finalPrice.innerHTML = "$"+room.value*people.value;
            finalprice.innerHTML = "$"+room.value*people.value;
        });
    }   
}

export default Form;