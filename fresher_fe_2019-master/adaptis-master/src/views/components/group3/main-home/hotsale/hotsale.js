const hotSale = {
    init: () => {
        let showMoreBtn = document.getElementById("showMoreBtn");
        const products = [
            {
                img: "//cdn.shopify.com/s/files/1/0098/9705/0209/products/product-image-631792964_large.jpg?v=1560156059",
                label: "sold out",
                content: "Brand Makeup Lip Gloss Waterproof Batom Lips Tint Red Brown Nude Long Lasting Liquid Matte Lipstick Makeup Lipgloss kyliejenner",
                old: "$1.67",
                new: "$0.99",
                span: "Add to card",
                status: 0
            },
            {
                img: "//cdn.shopify.com/s/files/1/0098/9705/0209/products/product-image-821634520_large.jpg?v=1560156404",
                label: "sold out",
                content: "Brand Makeup Lip Gloss Waterproof Batom Lips Tint Red Brown Nude Long Lasting Liquid Matte Lipstick Makeup Lipgloss kyliejenner",
                old: "$1.67",
                new: "$0.99",
                span: "Add to card",
                status: 0
            },
            {
                img: "//cdn.shopify.com/s/files/1/0098/9705/0209/products/product-image-986749718_large.jpg?v=1560242548",
                label: "sold out",
                content: "Brand Makeup Lip Gloss Waterproof Batom Lips Tint Red Brown Nude Long Lasting Liquid Matte Lipstick Makeup Lipgloss kyliejenner",
                old: "$1.67",
                new: "$0.99",
                span: "Add to card",
                status: 0
            },
            {
                img: "//cdn.shopify.com/s/files/1/0098/9705/0209/products/product-image-934683218_large.jpg?v=1560242547",
                label: "sold out",
                content: "Brand Makeup Lip Gloss Waterproof Batom Lips Tint Red Brown Nude Long Lasting Liquid Matte Lipstick Makeup Lipgloss kyliejenner",
                old: "$1.67",
                new: "$0.99",
                span: "Add to card",
                status: 0
            },
            {
                img: "//cdn.shopify.com/s/files/1/0098/9705/0209/products/product-image-821634520_large.jpg?v=1560156404",
                label: "sold out",
                content: "Brand Makeup Lip Gloss Waterproof Batom Lips Tint Red Brown Nude Long Lasting Liquid Matte Lipstick Makeup Lipgloss kyliejenner",
                old: "$1.67",
                new: "$0.99",
                span: "Add to card",
                status: 0
            }
        ];
        const product = [];
        let delay = 0;
        products.forEach(pro => {
            delay+= 0.3;
            let item = `<div class="grid-item wow fadeIn modalHotsale" data-wow-delay=${delay}s, data-wow-duration="2s">`;
            item += `<div class="trending__product">`;
            item += `<span class="label">${pro.label}</span>`;
            item += `<img src="${pro.img}" alt="">`;
            item += `<div class="trend__content-hover">`;
            item += `<a href="" class="icon">`;
            item += ` <span class="fas fa-heart"></span></a>`;
            if (pro.status == 0) {
                item += ` <div class="trend__button-selectd select disable" id=""><span>${pro.span}</span></div>`;
            }else{
                item += ` <div class="trend__button-selectd select" id=""><span>${pro.span}</span></div>`;
            }
            item += ` <a href="" class="view">QUICK VIEW</a></div>`;
            item += ` <div class="trending__text"><a href="" title="">${pro.content}</a></div>`;
            item += `<div class="trending__price">`;
            item += `<span class="old">${pro.old}</span><span class="new">${pro.new}</span>`;
            if (pro.status == 0) {
                item += ` <div class="trend__button-select select disable"><span>${pro.span}</span>`;
            }else{
                item += ` <div class="trend__button-select select disable"><span>${pro.span}</span></div></div></div></div>`;
            }
            
            product.push(item);
            console.log(product);
        });
        if (showMoreBtn) {
            showMoreBtn.addEventListener("click", () => {
                $("#hotSale").append(product);
            });
        }
    }
}

export default hotSale;