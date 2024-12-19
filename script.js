const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector("#menubar");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navlist.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    navlist.classList.remove('open');
};
const sr = ScrollReveal({
    origin: 'top',
    distance: '35px',
    duration: '2500',
    reset: true
});

sr.reveal('.home-text', { delay: 150 });
sr.reveal('.home-img', { delay: 200 });
sr.reveal('.container', { delay: 200 });
sr.reveal('.about-img', {});
sr.reveal('.about-text', { delay: 150 });

sr.reveal('.middle-text', {});
sr.reveal('.row-btn, .shop-content', { delay: 150 });

sr.reveal('.review-content, .contact', { delay: 150 });