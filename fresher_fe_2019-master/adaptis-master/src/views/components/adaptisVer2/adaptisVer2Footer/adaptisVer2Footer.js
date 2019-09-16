const adaptisFooter = {
    init: () => {
        let adaptisFooterItems = document.querySelectorAll('.adaptis-footer-item');
        let initializationDelay = 0.2;
        for(let i = 0; i <= adaptisFooterItems.length; i++) {
            let adaptisFooterItemChild = document.querySelector(`.adaptis-footer-item:nth-child(${i})`);
            if(adaptisFooterItemChild) {
                adaptisFooterItemChild.style = `animation-delay: ${initializationDelay}s`;
                initializationDelay += 0.2;
            }
        }
    }
}

export default adaptisFooter