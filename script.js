'use strict'
const addEventOnElem=function(elem,type,callback){
    if(elem.length>1){
        for(let i=0; i<elem.length;i++){
            elem[i].addEventListener(type,callback);
        }
    }
        else{
            elem.addEventListener(type,callback);
        }
    }

const overlay=document.querySelector("[data-overlay]");
const navtoggler=document.querySelectorAll("[data-nav-toggler]");
const navbar=document.querySelector("[data-navbar]");
const navLinks=document.querySelectorAll("[data-nav-link]")

const toggleNavbar=function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElem(navtoggler,"click",toggleNavbar);

const closeFunc=function(){
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}
addEventOnElem(navLinks,"click",toggleNavbar);

//header sticky
const header=document.querySelector("[data-header]");
const backTopBtn=document.querySelector("[data-back-top-btn]")
const headerActive=function(){
    if(window.scrollY>150){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    }
    else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}
addEventOnElem(window,"scroll",headerActive);

let lastscrolledpos=0;

const headerSticky=function(){
    if(lastscrolledpos >=window.scrollY){
        header.classList.remove("header-hide");
    }else {
        header.classList.add("header-hide");
    }
    lastscrolledpos=window.scrollY;
}

addEventOnElem(window,"scroll",headerSticky);

// scroll reavel effect
const sections=document.querySelectorAll("[data-section]");
const scrollReveal=function(){
    for(let i=0;i<sections.length;i++){
        if(sections[i].getBoundingClientRect().top<window.innerHeight/2){
            sections[i].classList.add("active");
        }
    }
}
scrollReveal();
addEventOnElem(window,"scroll",scrollReveal);