const navMobile = {
    init: () => {
        let navBtn = document.getElementById('navBtn');
        let navContent = document.getElementById('nav-content');
        let main = document.getElementById('main');
        navBtn.addEventListener('click', ()=>{
            navContent.style.width = "50%";
            main.style.marginLeft = "50%";
        });
    }
}

export default navMobile;