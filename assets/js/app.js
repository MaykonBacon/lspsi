const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const teste = document.querySelector('.header .nav-bar');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    teste.classList.toggle('active');
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
        teste.classList.toggle('active');
    })
})

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const moveTopButton =  document.querySelector(".topo");
    if (scrollHeight > 420) {
        moveTopButton.style.opacity = 1;
        moveTopButton.style.top = "85vh";
        moveTopButton.style.right = "30px"
    } else {
        moveTopButton.style.opacity = 0;
        moveTopButton.style.top = "50vh";
        moveTopButton.style.right = "20vw";
    }
})

window.onload = function() {
    lax.setup() // init

    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }

    window.requestAnimationFrame(updateLax)
}