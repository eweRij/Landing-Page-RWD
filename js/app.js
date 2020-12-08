const menuButton = document.getElementById('menu-trigger');
const mobileSection = document.querySelector('.mobile-section');
const body = document.querySelector('body');
function changeVisibility(event) {
        console.log("testy");
            mobileSection.classList.toggle('opened');    
            body.classList.toggle('moved');
        };
const media = window.matchMedia("screen and (max-width:650px)");
media.addListener(function(media) {
    if(media.matches) {
        console.log("ggg")
        menuButton.addEventListener("click", changeVisibility);
    } else {
        mobileSection.classList.remove('opened');    
        body.classList.remove('moved');
    }
})

//działa!!!zapamiętać przy hamburgerze!!!:)