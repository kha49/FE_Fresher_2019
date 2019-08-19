// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//     if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementsByClassName("airbnbUpdate-header-sticky__bottom").style.bottom = "0";
//     }
//     else {
//         document.getElementsByClassName("airbnbUpdate-header-sticky__bottom").style.bottom = "-50px";
//     }
// }

// window.onscroll = function() {myFunction()};
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

const HeaderAirBnb = {
    scrollFunction: () => {
        const headerSticky = document.querySelector('.airbnbUpdate-header-sticky__bottom');
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            if (headerSticky){
                headerSticky.style.bottom = "0";
            }
        }
        else {
            if (headerSticky){
                headerSticky.style.bottom = "-50px";
            }
        }
    }
};

export default HeaderAirBnb;