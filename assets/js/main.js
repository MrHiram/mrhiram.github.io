var mainNavbar = document.getElementById('main-navbar');
var hero = document.getElementById('hero');
var button = document.getElementById('holis');

var stickyTriggerPoint = button.offsetTop;
var heroTriggerPoint = hero.offsetTop;

window.onscroll = () => {
    stickyDetect();
}

stickyDetect = () => {
    if(window.pageYOffset > stickyTriggerPoint ){
        mainNavbar.classList.add('position-fixed','w-100');
        hero.classList.add('container--padding__top');
        mainNavbar.classList.add('notHidden');
        mainNavbar.classList.remove('hidden');
    }else{
        mainNavbar.classList.add('hidden');
        mainNavbar.classList.remove('notHidden');
    }
    if(window.pageYOffset > heroTriggerPoint && window.pageYOffset < stickyTriggerPoint){
        mainNavbar.classList.add('hidden', 'transition__active');
        mainNavbar.classList.remove('notHidden');
    }else{
        mainNavbar.classList.add('notHidden');
        mainNavbar.classList.remove('hidden');
        mainNavbar.addEventListener("transitionend", function(event) {
            if(window.pageYOffset < heroTriggerPoint){
                mainNavbar.classList.remove('position-fixed','w-100');
                hero.classList.remove('container--padding__top');
                mainNavbar.classList.remove('transition__active');
            }
        }, false);
    }
}