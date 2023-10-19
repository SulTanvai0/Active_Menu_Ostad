// Active Menu Switcher
const navList =  document.querySelector(".nav-list");

navList.addEventListener('click' ,(event)=>{

    const navLink = event.target.parentElement 

    if(navLink.classList.contains("link")){
        navList.querySelector(".active").classList.remove("active")
        navLink.classList.add("active")
    }
})