const box_checkout = {
    init: () => {
        $("#showProd").click(() => {
            $("#Proc-box").toggle();
        });
        // sessionStorage.clear();
        let SP = [];
        const products = [];
        let price = 0;
        SP = JSON.parse(sessionStorage.getItem("product"));
        if (SP) {
            SP.forEach((pro) => {
                let item = `<div class="row m-0 wow fadeIn modalHotsale" data-wow-delay=1s, data-wow-duration="2s">`;
                item += `<div class="col-3 col-lg-3">`;
                item += `<img src="${pro.img}" alt="">`;
                item += `</div>`;
                item += `<div class="col-7">`;
                item += `<p>${pro.content}</p>`;
                item += `</div>`;
                item += `<div class="col-2 text-right">`;
                item += `<p>${pro.price}</p>`;
                item += `</div>`;
                item += `</div>`;
                products.push(item);
                let tam = (pro.price).split("$");

                price += parseFloat(tam[1]);
            });
        }
        if ($(".product")) {
            $(".product").html(products);
        }
        if ($(".totalPrice")) {
            $(".totalPrice").html("$" +price);
        }
    },
}

export default box_checkout;