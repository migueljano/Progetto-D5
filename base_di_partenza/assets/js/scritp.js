const headerNav = document.getElementById('headerNav');
const colorButton = document.querySelectorAll('.colorButton')

window.addEventListener('scroll', () => {
    if (window.scrollY > 225) {
        headerNav.classList.add('scrolled');
        colorButton.forEach (button => {
            button.classList.add('scrolled')
        })
    }else {
        headerNav.classList.remove('scrolled');
        colorButton.forEach(button => {
            button.classList.remove('scrolled')
        })
    }
});
