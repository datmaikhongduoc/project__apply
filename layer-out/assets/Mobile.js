// show menu 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navMenu){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.remove('show-menu')
    })
}
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.add('show-menu')
    })
}