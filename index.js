const menuMobile = document.querySelector(".header-Button__Menu")
const header = document.querySelector(".header")
const currentHeight = header.clientHeight
const menuChose = document.querySelectorAll(".navItem a[href*='#']")
const subNav = document.querySelector(".sub-NavBar")
const dropdown = document.querySelector(".dropdown")

for( var i = 0 ; i < menuChose.length ; i++ ){
    const menuItem = menuChose[i];
    menuItem.onclick = function(event) {
        if(this.nextElementSibling && this.nextElementSibling.classList.contains('sub-NavBar')){
            event.preventDefault();
        }else{
            menuMobile.onclick();
        }
    }
}


menuMobile.onclick = function(){
    isOpen = header.clientHeight === currentHeight
    if(isOpen){header.style.height ='auto' ; header.overflow ='auto'}
    else{header.style.height = '46px'}
};

subNav.onclick = function(event) {
    subNav.style.display = 'none';
    event.stopPropagation();
}
dropdown.onclick = function(){
    subNav.style.display = 'block'
}

dropdown.onmouseover = function(){
    subNav.style.display = 'block'
}