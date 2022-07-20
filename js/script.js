//slider

$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        adaptiveHeight: true,
      });
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
       
    });
});

// const animBurger = document.querySelector('.burger span');
// const menuBurger = document.querySelector('.burger').addEventListener('click', function(){
// document.querySelector('.burger span').classList.toggle('active');
// if (animBurger.classList.contains('active')) {
//     iconMenu.classList.remove('active');
//     menuBody.classList.remove('active');
// }
// })
// document.querySelector('.menu').classList.toggle("animate");
// const btn = document.querySelector('.burger');
// btn.onclick = function(e) {
// 	var element = document.querySelector(".menu__body");
//   if(element.classList.contains("show-block")) {
//   	element.classList.remove("show-block");
//   } else {
//   	element.classList.add("show-block");
//   }
  
// }
//burger
const iconMenu = document.querySelector('.burger');
const menuBody = document.querySelector('.menu__body');
const animBurger = document.querySelector('.burger span');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        animBurger.classList.toggle('active');
    });
}


//scroll
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const  gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
        if (iconMenu.classList.contains('active')) {
            iconMenu.classList.remove('active');
            menuBody.classList.remove('active');
            animBurger.classList.remove('active');
        }
        
        window.scrollTo({
        top: gotoBlockValue,
        behavior:"smooth"
        });
        e.preventDefault();
        }
    }
}