//Toggle mobile menu
const menuToggleOpen = document.querySelector('.menu-toggle-open');
const menuToggleClose = document.querySelector('.menu-toggle-close');
const navMobileElement = document.querySelector('.nav-mobile');

menuToggleOpen.addEventListener('click', () => navMobileElement.classList.add('active'));
menuToggleClose.addEventListener('click', () => navMobileElement.classList.remove('active'));


//Show notifications 
document.addEventListener('click', element => {
    const dropdown = document.querySelector('.dropdown');

    if (element.target.classList.contains('dropdown-btn')) {
        dropdown.classList.add('active');
        
    } else {
        dropdown.classList.remove('active');
    }
});

//Gauge

