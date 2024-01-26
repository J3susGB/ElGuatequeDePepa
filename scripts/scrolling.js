document.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scrolling');
    } else {
        header.classList.remove('scrolling');
    }
});
