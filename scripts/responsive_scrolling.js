document.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('responsive-scrolling');
    } else {
        header.classList.remove('responsive-scrolling');
    }
});
