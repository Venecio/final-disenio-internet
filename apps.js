var cssFile = document.createElement('estilos.css');
var horario = Date();

document.getElementById("menuNavegacion").innerHTML = "<ul id='ulMenu'>" +
    "<h1 id = 'logo'> <span class = 'logoP'>P</span>Cabin</h1>" +
    "<li id='liMenu'><a  href='index.html'>Inicio</a></li>" +
    "<li id='liMenu'><a  href='institucion.html'>Institución</a></li>" +
    "<li id='liMenu'><a  href='cabanias.html'>Cabañas</a></li>" +
    "<li id='liMenu'><a  href='novedades.html'>Novedades</a></li>" +
    "<li id='liMenu'><a  href='contacto.html'>Contacto</a></li>" +
    "<li id='liMenu'><a  href='bonus.html'>Bonus</a></li>" +

    "</ul>"

/*var span = document.getElementById('span');

function hora() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(hora, 1000);
*/
/*
let hoy = new Date();  
let fecha = hoy.getDate() + '-' + (hoy.getMonth()+1) + '-' + hoy.getFullYear();
let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
let fechaYHora = "Fecha: "+ fecha + " Hora: " + hora;
document.getElementById("liMenu2").innerHTML = fechaYHora;
*/


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

/*document.getElementById("piePagina").innerHTML =
"<div id='piePagina'>"+
    "<i id='iconoFA' class='fas fa-envelope'></i>  <span class='piePag'>pcabinscontacto@gmail.com</span><br>"+
    "<i id='iconoFA' class='fas fa-phone'></i>  <span class='piePag'>2657-207020</span><br>"+
    "<i id='iconoFA' class='fas fa-map-marker-alt'></i> <span class='piePag'>Buenos Aires 120</span><br>"+
    "<a href='https://www.facebook.com/' target='_blank' <i id='iconoFA' class='fab fa-facebook'></i></a>"+
    "<a href='https://www.twitter.com/' target='_blank' <i id='iconoFA' class='fab fa-twitter'></i></a>"+
    "<a href='https://www.instagram.com/' target='_blank' <i id='iconoFA' class='fab fa-instagram'></i>"+
"</div>"
*/
/*Contacto*/

let hoy = new Date();

function calcularCumple() {
    let fNacimiento = document.getElementById("fNacimiento").valueAsDate;
    if (fNacimiento <= hoy) {
        let MilisegundosFNacimiento = (fNacimiento.getTime());
        let diferenciaTiempo = hoy.getTime() - MilisegundosFNacimiento;

        let diferenciaEnDias = parseInt(diferenciaTiempo / (1000 * 60 * 60 * 24));
        alert(diferenciaEnDias);
    } else {
        let MilisegundosFNacimiento = (fNacimiento.getTime());
        let diferenciaTiempo = MilisegundosFNacimiento - hoy.getTime();

        let diferenciaEnDias = parseInt(diferenciaTiempo / (1000 * 60 * 60 * 24));
        alert(diferenciaEnDias + 1);
    }

}


document.getElementById("piePagina").innerHTML =
    "<div id='piePagina'>" +
    "<table class='tablaFooter' width='100%'>" +
    "<tr>" +
    "<th class='th1'>" +
    "<i id='iconoFA' class='fas fa-envelope'></i><span class='piePag'>pcabinscontacto@gmail.com</span>" +
    "</th>" +
    "<th rowspan='2' class='th2'>" + "<a href='https://www.github.com/Venecio' target='_blank'><img class='imagenVenecio' src='recursos/fondoGit.jpg' alt='ImagenVenecioGithub' ></a>" +
    "</th>" +
    "</tr>" +
    "<tr>" +
    "<th class='th1'>" +
    "<i id='iconoFA' class='fas fa-phone'></i>  <span class='piePag'>2657-207020</span>" +
    "</th>" +

    "</tr>" +
    "<tr>" +
    "<th class='th1'>" +
    "<i id='iconoFA' class='fas fa-map-marker-alt'></i> <span class='piePag'>Buenos Aires 120</span>" +
    "</th>" +
    "<th class='th2'>Venecio</th>" +
    "</tr>" +
    "<tr>" +
    "<th class='th1'>" +
    "<a href='https://www.facebook.com/' target='_blank' <i id='iconoFA' class='fab fa-facebook'></i></a>" +
    "<a href='https://www.twitter.com/' target='_blank' <i id='iconoFA' class='fab fa-twitter'></i></a>" +
    "<a href='https://www.instagram.com/' target='_blank' <i id='iconoFA' class='fab fa-instagram'></i>" +
    "</th>" +
    "<th class='th2'><a href='https://www.github.com/Venecio' target='_blank'<i id='iconoFA' class='fab fa-github'></i></th>" +
    "</tr>" +
    "</div>"