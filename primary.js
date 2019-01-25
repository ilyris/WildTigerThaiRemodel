
window.onscroll = () => {
  const logo = document.querySelector('.logo');
  const navUl = document.querySelector('.main-ul');

  navUl.classList.toggle(
    'scrolled-ul',  
    navUl.scrollTop  > 25 ||  document.documentElement.scrollTop > 25);

    logo.classList.toggle(
      'scrolled-logo',  
      navUl.scrollTop  > 25 ||  document.documentElement.scrollTop > 25);
}




/* Initalize Slick Slider */

$(document).ready(function(){
  $('.single-item').slick({
  });
});