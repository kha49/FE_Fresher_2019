const adaptisFooter = {
    init: () => {
        let adaptisFooterItems = document.querySelectorAll('.adaptis-footer-item');
        let adaptisClientLocation = document.querySelectorAll('.adaptis-footer-clock__text--location');
        let adaptisClientEmail = document.querySelectorAll('.adaptis-footer-clock__text--email');
        let adaptisClientArray = [adaptisClientLocation, adaptisClientEmail];     
        let initializationDelay = 0.2;
        for(let i = 0; i <= adaptisFooterItems.length; i++) {
            let adaptisFooterItemChild = document.querySelector(`.adaptis-footer-item:nth-child(${i})`);
            if(adaptisFooterItemChild) {
                adaptisFooterItemChild.style = `animation-delay: ${initializationDelay}s`;
                initializationDelay += 0.2;
            }
        }
        if(adaptisClientArray) {
            for(let i = 0; i < adaptisClientArray.length; i++) {
                if(adaptisClientArray[i]) {
                    adaptisFooter.upperCase(adaptisClientArray[i]);
                }
            }
        }
    },
    upperCase: (variable) => {
        for(let i = 0; i < variable.length; i++) {
            variable[i].style = 'text-transform: uppercase';
        }
    }
}

export default adaptisFooter