const FormAirBnb = {
    multipleFunction: () => {
        let r = document.querySelector('#room').value;
        let g = document.querySelector('#guest').value;
        document.querySelector('#onChange').innerHTML = "$" + r*g;
    }
}

export default FormAirBnb;

// const modalAirBnbStart = {
//     getStartedFunction: () => {
//         let btn = document.querySelector('#getStarted');

//     }
// }

// export default modalAirBnbStart;