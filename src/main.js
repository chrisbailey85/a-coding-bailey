const mobileMenuBtn = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('is-active');
    mobileMenuBtn.classList.contains('is-active') ? mobileMenuBtn.ariaExpanded = true : mobileMenuBtn.ariaExpanded = false;
    navigation.classList.toggle('open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(navigation.classList.contains('open')) {
            navigation.classList.remove('open') 
            mobileMenuBtn.ariaExpanded = false;
            mobileMenuBtn.classList.remove('is-active')
        }
    })
})