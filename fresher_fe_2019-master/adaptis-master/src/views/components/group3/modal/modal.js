const Modal = {
    init: () => {
        let modalTrending = document.querySelectorAll('.ModalTrending');
        let modalHotsale = document.querySelectorAll(".modalHotsale");
        const modals = [];
        const products = [];
        // sessionStorage.clear();
        let SP = [];
        const productsShow = [];
        let price = 0;
        SP = JSON.parse(sessionStorage.getItem("product"));
        if (SP) {
            SP.forEach((pro) => {
                let item = `<div class="row wow fadeIn modalHotsale" data-wow-delay=1s, data-wow-duration="2s">`;
                item += `<div class="col-3 col-lg-3">`;
                item += `<img src="${pro.img}" alt="">`;
                item += `</div>`;
                item += `<div class="col-8 col-lg-7">`;
                item += `<p>${pro.content}</p>`;
                item += `<p>${pro.price}</p>`;
                item += `</div>`;
                item += `<div class="col-1 col-lg-1">`;
                item += ` <span>&times</span>`;
                item += `</div>`;
                item += `</div>`;
                productsShow.push(item);
                let tam = (pro.price).split("$");

                price += parseFloat(tam[1]);
            });
        }
        
        if ($("#cartContent")) {
            $("#cartContent").html(productsShow);
        }
        if ($("#box-shoppingCart")) {
            $("#box-shoppingCart").html(productsShow);
        }
        if ($(".totalPriceCart")) {
            $(".totalPriceCart").html("$" + price);
        }
        productCount.innerText = productsShow.length;
        modalTrending.forEach((val, index) => {
            modals.push(
                {
                    modalBtn: "modalBtn" + index,
                    modalBtnMD: "modalBtnMD" + index,
                    modal: "modalContent" + index,
                    closerBtn: "closeBtn" + index,
                    addToCard: "addToCart" + index
                }
            );
        });

        modalHotsale.forEach((val, index) => {
            modals.push(
                {
                    modalBtn: "modalHotsaleBtn" + index,
                    modalBtnMD: "modalHotsaleBtnMD" + index,
                    modal: "modalHotsaleContent" + index,
                    closerBtn: "closeHotsaleBtn" + index,
                    addToCard: "addToCarta" + index
                }
            );
        });

        modals.forEach(items => {
            const modalBtn = document.getElementById(items.modalBtn);
            const modalBtnMD = document.getElementById(items.modalBtnMD);
            const modalContent = document.getElementById(items.modal);
            const closerBtn = document.getElementById(items.closerBtn);
            const addToCardBtn = document.getElementById(items.addToCard);
            if (modalBtnMD) {
                Modal.showModal(modalBtnMD, modalContent);
            }
            if (modalBtn) {
                Modal.showModal(modalBtn, modalContent);
                Modal.closeModal(closerBtn, modalContent);
                if (addToCardBtn) {
                    addToCardBtn.addEventListener("click", () => {
                        products.push(Modal.addToCard(modalContent));
                        Modal.showToCart(products);
                        let modal = document.getElementsByClassName("add-modal");
                        modal[0].style.display = "none";
                        modalContent.style.display = "none";
                    });
                }
            }
        });

    },
    showModal: (modalBtn, modalContent) => {
        let modal = document.getElementsByClassName("add-modal");
        modalBtn.addEventListener('click', () => {
            modal[0].style.display = "block";
            modalContent.style.display = "block";
        });
    },
    closeModal: (closerBtn, modalContent) => {
        let modal = document.getElementsByClassName("add-modal");
        closerBtn.addEventListener('click', () => {
            modal[0].style.display = "none";
            modalContent.style.display = "none";
        });
        window.addEventListener('click', (e) => {
            if (e.target == modal[0]) {
                modal[0].style.display = "none";
                modalContent.style.display = "none";
            }
        });
    },
    addToCard: (modalContent) => {
        let price = document.querySelector("#" + (modalContent.id) + " " + ".proPrice");
        let content = document.querySelector("#" + (modalContent.id) + " " + ".proContent");
        let img = document.querySelector("#" + (modalContent.id) + " " + "img");
        let product = {
            price: price.innerText,
            content: content.innerText,
            img: img.src
        }
        return product;
    },
    showToCart: (products) => {
        let productCount = document.querySelector("#productCount");
        const SP = [];
        let price = 0;
        products.forEach((pro) => {
            let item = `<div class="row wow fadeIn modalHotsale" data-wow-delay=1s, data-wow-duration="2s">`;
            item += `<div class="col-3 col-lg-3">`;
            item += `<img src="${pro.img}" alt="">`;
            item += `</div>`;
            item += `<div class="col-8 col-lg-7">`;
            item += `<p>${pro.content}</p>`;
            item += `<p>${pro.price}</p>`;
            item += `</div>`;
            item += `<div class="col-1 col-lg-1">`;
            item += ` <span>&times</span>`;
            item += `</div>`;
            item += `</div>`;
            SP.push(item);
            let tam = (pro.price).split("$");
            price += parseFloat(tam[1]);
            console.log(price)
        });
        if ($("#box-shoppingCart")) {
            $("#box-shoppingCart").html(SP);
        }
        if ($("#cartContent")) {
            $("#cartContent").html(SP);
        }
        if ($(".totalPriceCart")) {
            $(".totalPriceCart").html(price);
        }
        if ($(".totalPrice")) {
            $(".totalPrice").html(price);
        }
        productCount.innerText = products.length;
        sessionStorage.setItem("product", JSON.stringify(products));
        // console.log(JSON.stringify(products));
    }
}

export default Modal;