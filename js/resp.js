burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightNav')



burger.addEventListener('click', () =>{
    navbar.classList.toggle('h-class-resp')
    navList.classList.toggle('v-class-resp')
    rightnav.classList.toggle('v-class-resp')
})



