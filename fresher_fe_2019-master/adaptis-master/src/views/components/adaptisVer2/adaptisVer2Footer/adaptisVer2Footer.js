const adaptisFooter = {
    init: () => {
        let adaptisFooterItems = document.querySelectorAll('.adaptis-footer-item');
        let adaptisClientLocation = document.querySelectorAll('.adaptis-footer-clock__text--location');
        let adaptisClientEmail = document.querySelectorAll('.adaptis-footer-clock__text--email');
        let adaptisClientPropertiesArray = [adaptisClientLocation, adaptisClientEmail];     
        let initializationDelay = 0.2;
        adaptisFooterItems.forEach((val, index) => {
            let adaptisFooterItemChild = document.querySelector(`.adaptis-footer-item:nth-child(${index+1})`);
            if(adaptisFooterItemChild) {
                adaptisFooterItemChild.style = `animation-delay: ${initializationDelay}s`;
                initializationDelay += 0.2;
            }
        });
        if(adaptisClientPropertiesArray) {
            adaptisClientPropertiesArray.forEach((val, index) => {
                if(adaptisClientPropertiesArray[index]) {
                    adaptisFooter.upperCase(adaptisClientPropertiesArray[index]);
                }
            });
        }
    },
    upperCase: (variable) => {
        variable.forEach((val, index) => {
            variable[index].style = 'text-transform: uppercase';
        });
    }
}

export default adaptisFooter