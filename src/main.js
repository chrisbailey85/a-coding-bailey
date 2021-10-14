const mobileMenuBtn = document.querySelector('.hamburger');


mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('is-active');
    mobileMenuBtn.classList.contains('is-active') ? mobileMenuBtn.ariaExpanded = true : mobileMenuBtn.ariaExpanded = false;
})