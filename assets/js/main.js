const navbar = document.querySelector('.navbar');
const navList = navbar.querySelectorAll('.nav-link');

const homeLink = navList[0];
const aboutLink = navList[1];
const projectsLink = navList[2];
const contactLink = navList[3];

const homeSection = document.querySelector('.home');
const aboutSection = document.querySelector('.about');
const projectsSection = document.querySelector('.projects');
const contactSection = document.querySelector('.contact');

const navToggler = document.querySelector('.nav-toggler');
const togglerIcon = document.querySelector('i');

const homeBtn = document.getElementById('home-btn');
const contactBtn = document.getElementById('contact-btn');


if(this.window.innerWidth < 1150) {
    navbar.classList.remove('navbar-active');
    navToggler.classList.remove('nav-toggled');
}

navToggler.addEventListener("click", () => {
    if(!navbar.classList.contains('navbar-active')) {
        navbar.classList.add('navbar-active');
        navToggler.classList.add('nav-toggled');

        togglerIcon.classList.add('fa-times');
        togglerIcon.classList.remove('fa-bars');

    } else {
        navbar.classList.remove('navbar-active');
        navToggler.classList.remove('nav-toggled');

        togglerIcon.classList.add('fa-bars');
        togglerIcon.classList.remove('fa-times');
    }
});

homeBtn.addEventListener("click", () => {
    // remove active class
    homeLink.classList.remove('nav-link-active');
    aboutLink.classList.remove('nav-link-active');
    contactLink.classList.remove('nav-link-active');

    // add active class
    projectsLink.classList.add('nav-link-active');

    // hiding sections
    projectsSection.classList.remove('hidden');
    homeSection.classList.add('hidden');
    aboutSection.classList.add('hidden');
    contactSection.classList.add('hidden');
    
    // animation
    projectsSection.classList.add('active');
    homeSection.classList.remove('active');
    aboutSection.classList.remove('active');
    contactSection.classList.remove('active');
});

homeLink.addEventListener("click", () => {
    // remove active class
    aboutLink.classList.remove('nav-link-active');
    projectsLink.classList.remove('nav-link-active');
    contactLink.classList.remove('nav-link-active');

    // add active class
    homeLink.classList.add('nav-link-active');

    // hiding sections
    homeSection.classList.remove('hidden');
    aboutSection.classList.add('hidden');
    projectsSection.classList.add('hidden');
    contactSection.classList.add('hidden');

    // animation
    homeSection.classList.add('active');
    aboutSection.classList.remove('active');
    projectsSection.classList.remove('active');
    contactSection.classList.remove('active');

    // close nav on link click
    if(!navbar.classList.contains('navbar-active')) {
        navbar.classList.add('navbar-active');
        navToggler.classList.add('nav-toggled');
    } else {
        navbar.classList.remove('navbar-active');
        navToggler.classList.remove('nav-toggled');
    }

    togglerIcon.classList.add('fa-bars');
    togglerIcon.classList.remove('fa-times');
});

aboutLink.addEventListener("click", () => {
    // remove active class
    homeLink.classList.remove('nav-link-active');
    projectsLink.classList.remove('nav-link-active');
    contactLink.classList.remove('nav-link-active')
    
    // add active class
    aboutLink.classList.add('nav-link-active');

    // hiding sections
    aboutSection.classList.remove('hidden');
    homeSection.classList.add('hidden');
    projectsSection.classList.add('hidden');
    contactSection.classList.add('hidden');

    // animation
    aboutSection.classList.add('active');
    homeSection.classList.remove('active');
    projectsSection.classList.remove('active');
    contactSection.classList.remove('active');

    // close nav on link click
    if(!navbar.classList.contains('navbar-active')) {
        navbar.classList.add('navbar-active');
        navToggler.classList.add('nav-toggled');
    } else {
        navbar.classList.remove('navbar-active');
        navToggler.classList.remove('nav-toggled');
    }

    togglerIcon.classList.add('fa-bars');
    togglerIcon.classList.remove('fa-times');
});

projectsLink.addEventListener("click", () => {
    // remove active class
    homeLink.classList.remove('nav-link-active');
    aboutLink.classList.remove('nav-link-active');
    contactLink.classList.remove('nav-link-active');

    // add active class
    projectsLink.classList.add('nav-link-active');

    // hiding sections
    projectsSection.classList.remove('hidden');
    homeSection.classList.add('hidden');
    aboutSection.classList.add('hidden');
    contactSection.classList.add('hidden');
    
    // animation
    projectsSection.classList.add('active');
    homeSection.classList.remove('active');
    aboutSection.classList.remove('active');
    contactSection.classList.remove('active');

    // close nav on link click
    if(!navbar.classList.contains('navbar-active')) {
        navbar.classList.add('navbar-active');
        navToggler.classList.add('nav-toggled');
    } else {
        navbar.classList.remove('navbar-active');
        navToggler.classList.remove('nav-toggled');
    }

    togglerIcon.classList.add('fa-bars');
    togglerIcon.classList.remove('fa-times');
});

contactLink.addEventListener("click", () => {
    // remove active class
    homeLink.classList.remove('nav-link-active');
    aboutLink.classList.remove('nav-link-active');
    projectsLink.classList.remove('nav-link-active');

    // add active class
    contactLink.classList.add('nav-link-active');

    // hiding sections
    contactSection.classList.remove('hidden');
    homeSection.classList.add('hidden');
    aboutSection.classList.add('hidden');
    projectsSection.classList.add('hidden');
    
    // animation
    contactSection.classList.add('active');
    homeSection.classList.remove('active');
    aboutSection.classList.remove('active');
    projectsSection.classList.remove('active');

    // close nav on link click
    if(!navbar.classList.contains('navbar-active')) {
        navbar.classList.add('navbar-active');
        navToggler.classList.add('nav-toggled');
    } else {
        navbar.classList.remove('navbar-active');
        navToggler.classList.remove('nav-toggled');
    }

    togglerIcon.classList.add('fa-bars');
    togglerIcon.classList.remove('fa-times');
});


contactBtn.addEventListener("click", () => {
    alert("Contact Form is not yet functional. Please contact my mobile number: 09090843080")
})
