document.addEventListener('DOMContentLoaded', function(){
    
    const menuBtn = document.querySelector('.menuButton');
    const menu = document.querySelector(".menu");
    
    menuBtn.addEventListener('click', function(){
        menu.classList.toggle('inactive-menu');
        menu.classList.toggle('active-menu');
    });
    
});