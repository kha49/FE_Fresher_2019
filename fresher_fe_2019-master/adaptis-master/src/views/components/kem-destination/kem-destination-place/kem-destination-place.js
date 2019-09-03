// const destinationPlace = {
//     init: () =>{
//         const filterArr = [
//             {
//                 idBtn: 'idBtn1',
//                 listFilter: 'listFilter1'
//             },
//             {
//                 idBtn: 'idBtn2',
//                 listFilter: 'listFilter2'
//             },
//             {
//                 idBtn: 'idBtn3',
//                 listFilter: 'listFilter3'
//             },
//             {
//                 idBtn: 'idBtn4',
//                 listFilter: 'listFilter4'
//             }
//         ]

//         filterArr.forEach(filterItem => {
//             const filterBtn = document.querySelector(`#${filterItem.idBtn}`);
//             const filterList = document.querySelector(`#${filterItem.listFilter}`);
//             if (itemQuestion) {
//                 destinationPlace.showModalQuestion(itemQuestion, itemQuestionModal);
//             }
//         });
//     },

//     modalHeaderLang: () => {
//         let langList = document.getElementById("langList");

//         if (langList) {
//             langList.classList.toggle("open");    
//         }
//     },
    
//     modalHeaderAccount: () => {
//         let account = document.getElementById('accountContainer');

//         if (account) {
//             account.classList.toggle("open");    
//         }
//     },
// };

// export default destinationPlace;