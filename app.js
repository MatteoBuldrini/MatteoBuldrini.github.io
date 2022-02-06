const hamburger = document.querySelector('#nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('#nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('#nav-bar .nav-list ul li a');
const header = document.querySelector('#nav-bar');

/*Show/Hide menu while clicking*/
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

/*Add background to header when scrolling down*/
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position >= 0) {
        /*Color of top bar*/
        /*Blue: #0d3666 - Dark grey: #29323c - Light grey: #3b4753 - Black: #0d1013 */
        header.style.backgroundColor = '#0d1013';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

/*Automatically close the hamburger menu when selecting a section*/
menu_item.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})
