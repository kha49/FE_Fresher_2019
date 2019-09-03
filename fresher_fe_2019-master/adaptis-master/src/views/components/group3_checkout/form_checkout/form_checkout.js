const form_checkout = {
    init: () => {

        let checkoutBtn = document.getElementById("checkoutBtn");
        let email = document.getElementById("email");
        let u_email = document.getElementById("u_email");
        let u_fname = document.getElementById("u_fname");
        let u_lname = document.getElementById("u_lname");
        let u_address = document.getElementById("u_address");
        let u_ap = document.getElementById("u_ap");
        let u_code = document.getElementById("u_code");
        if(checkoutBtn){
            checkoutBtn.addEventListener('click', ()=>{
                form_checkout.checknull(email);
                form_checkout.checknull(u_email);
                form_checkout.checknull(u_fname);
                form_checkout.checknull(u_lname);
                form_checkout.checknull(u_address);
                form_checkout.checknull(u_ap);
                form_checkout.checknull(u_code);
            });
        }
    },
    checknull: (a) => {
        if (a.value == "") {
            a.style.border = "1px solid red";
            form_checkout.MessageEvent(a.id+"-erro");
        }else{
            a.style.border = "1px solid";
        }
    },
    MessageEvent: (b) => {
        console.log(b);
        const erro = document.getElementById(b);
        if(erro){
            erro.style.color = "red";
            erro.innerHTML = "Không được để rỗng";
        }
    }
}

export default form_checkout;