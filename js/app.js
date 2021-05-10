let intro = document.querySelector('.intro');
let logo = document.querySelector('.splash-header');
let logoSpan = document.querySelectorAll('.splash');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('actives');
            }, (idx + 1) * 400)
        });

        setTimeout(() => {

            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('actives');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);
        
        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300)

    })
})