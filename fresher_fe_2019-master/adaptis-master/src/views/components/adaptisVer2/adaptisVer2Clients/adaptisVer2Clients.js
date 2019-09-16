const adaptisClients = {
    init: () => {
        let adaptisClientsArray = document.querySelectorAll('.adaptis-clients-container-grid-item');
        let initializationDelay = 0.2;
        let checkWidth = window.innerWidth;
        // var UID = {
        //     _current: 0,
        //     getNew: function(){
        //         this._current++;
        //         return this._current;
        //     }
        // };
        // HTMLElement.prototype.pseudoStyle = function(element,prop,value){
        //     var _this = this;
        //     var _sheetId = "pseudoStyles";
        //     var _head = document.head || document.getElementsByTagName('head')[0];
        //     var _sheet = document.getElementById(_sheetId) || document.createElement('style');
        //     _sheet.id = _sheetId;
        //     var className = "pseudoStyle" + UID.getNew();
            
        //     _this.className +=  " "+className; 
            
        //     _sheet.innerHTML += "\n."+className+":"+element+"{"+prop+":"+value+"}";
        //     _head.appendChild(_sheet);
        //     return this;
        // };
        for(let i = 1; i <= adaptisClientsArray.length; i++) {
            let animatedNthChild = document.querySelector(`.adaptis-clients-container-grid-item:nth-child(${i})`);
            if(animatedNthChild) {
                animatedNthChild.style = `animation-delay: ${initializationDelay}s`;
                initializationDelay += 0.2;
            }
        }
        // if(adaptisClientsArray && checkWidth < 768) {
        //     if(adaptisClientsArray.length % 4 === 0) {
        //         let adaptisClientsRow = Math.ceil(adaptisClientsArray.length / 4);
        //         let temp = -1;
        //         for(let i = 1; i < adaptisClientsRow; i++) {
        //             temp += 2;
        //         }
        //         for(let i = adaptisClientsRow * 2 + temp; i <= adaptisClientsArray.length; i++) {
        //             let adaptisClientsBrand = document.querySelector(`#adaptis-clients-container-grid-item__brand--${i}`);
        //             let adaptisClientsBrandSelector = window.getComputedStyle(adaptisClientsBrand, '::after');
        //             if(adaptisClientsBrand || adaptisClientsBrandSelector) {
        //                 // adaptisClientsBrand.pseudoStyle("after", "content", "none");
        //                 let adaptisAfter = adaptisClientsBrandSelector.getPropertyValue('content: none');
        //             }
        //             let adaptisClientsBrand = document.querySelector(`#adaptis-clients-container-grid-item__brand--${i}::after`);
        //             adaptisClientsBrand.style = 'content: none';
        //         }
        //     }
        // }
    }
}

export default adaptisClients

// let temp = window.getComputedStyle(
//     document.querySelector('#adaptis-clients-container-grid-item__brand--9'), ':after'
// ).getPropertyValue('content');