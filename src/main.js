const mobileMenuBtn = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const body = document.querySelector('body');
const toggleModeBtn = document.querySelector('.toggle__mode')
const html = document.querySelector('html')
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('is-active');
    mobileMenuBtn.classList.contains('is-active') ? mobileMenuBtn.ariaExpanded = true : mobileMenuBtn.ariaExpanded = false;
    navigation.classList.toggle('open');
    body.classList.toggle('nav--open');
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if(navigation.classList.contains('open')) {
            navigation.classList.remove('open') 
            mobileMenuBtn.ariaExpanded = false;
            mobileMenuBtn.classList.remove('is-active')
            body.classList.remove('nav--open');
        }
    })
})

toggleModeBtn.addEventListener('click', () => {
    html.classList.toggle('dark--mode');
    html.classList.contains('dark--mode') ?
    toggleModeBtn.innerHTML = '<i class="far fa-moon icon"></i>' :
    toggleModeBtn.innerHTML = '<i class="far fa-sun icon"></i>' 
})
