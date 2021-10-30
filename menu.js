var cssFile = document.createElement('estilos.css');


document.getElementById("encabezado").innerHTML = "<header id='encabezado'>" +
    "<h1 id='logo'><span class='logoP'>P</span>Cabin</h1>" +
    "</header>"

document.getElementById("menuNavegacion").innerHTML = "<ul id='ulMenu'>" +
    "<li id='liMenu'><a  href='index.html'>Inicio</a></li>" +
    "<li id='liMenu'><a  href='institucion.html'>Institución</a></li>" +
    "<li id='liMenu'><a  href='cabanias.html'>Cabañas</a></li>" +
    "<li id='liMenu'><a  href='novedades.html'>Novedades</a></li>" +
    "<li id='liMenu'><a  href='contacto.html'>Contacto</a></li>" +
    "</ul>"

/*
const abrir = document.getElementById('abrir');
const modal_contenedor = document.getElementById('modal_contenedor');
const botonX = document.getElementById('botonX');   

abrir.addEventListener('click', () => {
    modal_contenedor.classList.add('mostrar'); 
});

botonX.addEventListener('click', () =>{
    modal_contenedor.classList.remove('mostrar');
})  
*/
//Footer//

document.getElementById("piePagina").innerHTML = "<footer id='piePagina'>"+
"<i id='iconoFA' class='fas fa-envelope'></i>  <span class='piePag'>pcabinscontacto@gmail.com</span><br>"+
"<i id='iconoFA' class='fas fa-phone'></i>  <span class='piePag'>2657-207020</span><br>"+
"<i id='iconoFA' class='fas fa-map-marker-alt'></i> <span class='piePag'>Buenos Aires 120</span><br>"+
"<a href='https://www.facebook.com/' target='_blank' <i id='iconoFA' class='fab fa-facebook'></i></a>"+
"<a href='https://www.twitter.com/' target='_blank' <i id='iconoFA' class='fab fa-twitter'></i></a>"+
"<a href='https://www.instagram.com/' target='_blank' <i id='iconoFA' class='fab fa-instagram'></i>"+
"</footer>"