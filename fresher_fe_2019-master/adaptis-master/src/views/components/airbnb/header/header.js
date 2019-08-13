const airbnbHeader = {
    timePicker: () => {
        const checkin = document.querySelector('#form-header .form-group #checkin');
        const checkout = document.querySelector('#form-header .form-group #checkout');
        if (checkin) {
            $( checkin ).datetimepicker({
                format: 'd/m/yy',
            });
        }
        if (checkout) {
            $( checkout ).datetimepicker({
                format: 'd/m/yy',
            });
        }
    }
}

export default airbnbHeader;