var mainNavbar = document.getElementById('main-navbar');
var hero = document.getElementById('hero');
var secction = document.getElementById('trigger');

var stickyTriggerPoint = secction.offsetTop;
var heroTriggerPoint = hero.offsetTop;

window.onscroll = () => {
    stickyDetect();
};

stickyDetect = () => {
    if (window.pageYOffset > stickyTriggerPoint) {
        mainNavbar.classList.add('position-fixed', 'w-100');
        hero.classList.add('container--padding__top');
        mainNavbar.classList.add('notHidden');
        mainNavbar.classList.remove('hidden');
    } else {
        mainNavbar.classList.add('hidden');
        mainNavbar.classList.remove('notHidden');
    }
    if (
        window.pageYOffset > heroTriggerPoint &&
        window.pageYOffset < stickyTriggerPoint
    ) {
        mainNavbar.classList.add('hidden', 'transition__active');
        mainNavbar.classList.remove('notHidden');
    } else {
        mainNavbar.classList.add('notHidden');
        mainNavbar.classList.remove('hidden');
        mainNavbar.addEventListener(
            'transitionend',
            function (event) {
                if (window.pageYOffset < heroTriggerPoint) {
                    mainNavbar.classList.remove('position-fixed', 'w-100');
                    hero.classList.remove('container--padding__top');
                    mainNavbar.classList.remove('transition__active');
                }
            },
            false
        );
    }
};

function scroll() {
    $(document).on('scroll', function () {
        let posY = $(document).scrollTop();
        console.log(posY);
        $('#navItemAbout').removeClass('active');
        $('#navItemSkills').removeClass('active');
        $('#navItemProjects').removeClass('active');
        $('#navItemExperience').removeClass('active');
        $('#navItemContact').removeClass('active');
        switch (true) {
            case posY >= 900 && posY < 1700:
                $('#navItemAbout').addClass('active');
                break;
            case posY >= 1701 && posY < 3185:
                $('#navItemSkills').addClass('active');
                break;
            case posY >= 3185 && posY < 3980:
                $('#navItemProjects').addClass('active');
                break;
            case posY >= 3981 && posY < 4100:
                $('#navItemExperience').addClass('active');
                break;
            case posY >= 4101 && posY < 4200:
                $('#navItemContact').addClass('active');
                break;
        }
    });
}

function scrollTowards(targetTag) {
    $('html, body').animate({
        scrollTop: $('#' + targetTag).offset().top - 50,
    });
    $('#navbarNav').removeClass('show');
}

$('document').ready(function () {
    scroll();
});
