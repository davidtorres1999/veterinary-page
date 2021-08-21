/* Despliegue menu-mobile */

const barraNavegacion = document.querySelector("#navegation-bar");
const btnMenu = document.querySelector("#menu-mobile");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const nav = document.querySelector("nav");

btnMenu.addEventListener("click",function(){
    barraNavegacion.classList.remove('menu-oculto');
});

main.addEventListener("touchstart", function(){
    barraNavegacion.classList.add('menu-oculto');
});

nav.addEventListener("click", function(){
    barraNavegacion.classList.add('menu-oculto');
});

/* Funcion para aplicar estilo difuminado a los articulos recent-posts */

let firstPost = document.querySelector("#first-post");
let secondPost = document.querySelector("#second-post");
let thirdPost = document.querySelector("#third-post");

firstPost.addEventListener('mouseenter', function(){
    firstPost.classList.add('infocus');
    secondPost.classList.add('blur');
    thirdPost.classList.add('blur');
})

firstPost.addEventListener('mouseleave', function(){
    firstPost.classList.remove('infocus');
    secondPost.classList.remove('blur');
    thirdPost.classList.remove('blur');
})

secondPost.addEventListener('mouseenter', function(){
    firstPost.classList.add('blur');
    secondPost.classList.add('infocus');
    thirdPost.classList.add('blur');
})

secondPost.addEventListener('mouseleave', function(){
    firstPost.classList.remove('blur');
    secondPost.classList.remove('infocus');
    thirdPost.classList.remove('blur');
})

thirdPost.addEventListener('mouseenter', function(){
    firstPost.classList.add('blur');
    secondPost.classList.add('blur');
    thirdPost.classList.add('infocus');
})

thirdPost.addEventListener('mouseleave', function(){
    firstPost.classList.remove('blur');
    secondPost.classList.remove('blur');
    thirdPost.classList.remove('infocus');
})
