//Toggel class active
//menu mau diklik
const navbarNav = document.querySelector ('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
//menghilangkan navbar
const hamburger = document.querySelector ('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    });