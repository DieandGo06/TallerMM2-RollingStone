//---------------------------------------------------------------------
//Oculta o muestra el menu horizontal
var menu = document.getElementById("menuHorizontal");
var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 650) {
        menu.classList.remove('ocultar');
        menu.classList.add('mostar');
    } else {
        menu.classList.remove('mostrar');
        menu.classList.add('ocultar');
    }
};
window.addEventListener("scroll", myScrollFunc);




//---------------------------------------------------------------------
//Menu deplegable
var comprimido = document.getElementById('reproComprimido');
var desplegado = document.getElementById('reproDesplegado');
var items = desplegado.getElementsByTagName('h3');

function Desplegar() {
    desplegado.style.height = "auto";
    desplegado.style.zIndex = "0";

}
comprimido.addEventListener('click', Desplegar)


function Cerrar() {
    desplegado.style.height = "0";
    if (desplegado.style.height > "0") {
        desplegado.style.height = "0";
    }
}
desplegado.addEventListener('mouseleave', Cerrar);
desplegado.addEventListener('click', Cerrar);


function CambiarLista(index) {
    var texto = document.getElementById('lista__elegida');
    texto.innerHTML = items[index].innerHTML;
}
items[1].addEventListener('click', function () { CambiarLista(1) });
items[2].addEventListener('click', function () { CambiarLista(2) });
items[3].addEventListener('click', function () { CambiarLista(3) });
items[4].addEventListener('click', function () { CambiarLista(4) });
items[5].addEventListener('click', function () { CambiarLista(5) });
items[6].addEventListener('click', function () { CambiarLista(6) });

/*
for (var i = 0, j = items.length-1; i < j; i++) {
    items[i].addEventListener('click', function () { CambiarLista(i) });
}
*/





//---------------------------------------------------------------------
//Reproductor de Audio
let audioState = 'pause';
var reproducirIcon = document.getElementById('play-icon');
var audio = new Audio('./music/carnival-rust.mp3');

function ReproducirAudio() {
    if (audioState == 'pause') {
        reproducirIcon.src = 'img/home/repro-pause.png';
        audioState = 'play';
        audio.play();
    }
    else if (audioState == 'play') {
        reproducirIcon.src = 'img/home/repro-play.png';
        audioState = 'pause';
        audio.pause();
    }
}
reproducirIcon.addEventListener('click', ReproducirAudio);



