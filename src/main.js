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


function enfocar(post1, post2, post3){
    post1.addEventListener('mouseenter', function(){
        post1.classList.add('infocus');
        post2.classList.add('blur');
        post3.classList.add('blur');
    })
}

function desenfocar(post1, post2, post3){
    post1.addEventListener('mouseleave', function(){
        post1.classList.remove('infocus');
        post2.classList.remove('blur');
        post3.classList.remove('blur');
    })
}

/* Primer post */

enfocar(firstPost, secondPost, thirdPost);
desenfocar(firstPost, secondPost, thirdPost);

/* Segundo post */

enfocar(secondPost, firstPost, thirdPost);
desenfocar(secondPost, firstPost, thirdPost);

/* Tercer post */

enfocar(thirdPost, firstPost, secondPost);
desenfocar(thirdPost, firstPost, secondPost);