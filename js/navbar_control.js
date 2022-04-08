const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 75) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
};