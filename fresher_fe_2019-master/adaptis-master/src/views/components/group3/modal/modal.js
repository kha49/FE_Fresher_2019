const Modal = {
    init: () => {
        let modalTrending = document.querySelectorAll('.ModalTrending');
        let modalHotsale = document.querySelectorAll(".modalHotsale");
        const modals = [];
        var products = [];
        // localStorage.clear();

        modalTrending.forEach((val, index) => {
            modals.push(
                {
                    modalBtn: "modalBtn" + index,
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
                    modal: "modalHotsaleContent" + index,
                    closerBtn: "closeHotsaleBtn" + index,
                    addToCard: "addToCarta" + index
                }
            );
        });

        modals.forEach(items => {
            const modalBtn = document.getElementById(items.modalBtn);
            const modalContent = document.getElementById(items.modal);
            const closerBtn = document.getElementById(items.closerBtn);
            const addToCardBtn = document.getElementById(items.addToCard);

            if (modalBtn) {
                Modal.showModal(modalBtn, modalContent);
                Modal.closeModal(closerBtn, modalContent);
                if (addToCardBtn) {
                    addToCardBtn.addEventListener("click", () => {
                        products.push(Modal.addToCard(modalContent));
                        Modal.showToCart(products);
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
        products.forEach((pro) => {
            let item = `<div class="row wow fadeIn modalHotsale" data-wow-delay=1s, data-wow-duration="2s">`;
            item += `<div class="col-3">`;
            item += `<img src="${pro.img}" alt="">`;
            item += `</div>`;
            item += `<div class="col-8">`;
            item += `<p>${pro.content}</p>`;
            item += `<p>${pro.price}</p>`;
            item += `</div>`;
            item += `<div class="col-1">`;
            item += ` <span>&times</span>`;
            item += `</div>`;
            item += `</div>`;
            SP.push(item);
        });

        if ($("#box-shoppingCart")) {
            $("#box-shoppingCart").html(SP);
        }
        productCount.innerText = products.length;

    }
}

export default Modal;