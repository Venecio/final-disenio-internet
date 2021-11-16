var cssFile = document.createElement('estilos.css');
var horario = Date();

document.getElementById("menuNavegacion").innerHTML = "<ul id='ulMenu'>" +
    "<a href='index.html'><h1 id = 'logo'> <span class = 'logoP'>P</span>Cabin</h1>" +
    "<li id='liMenu'><a  href='index.html'>Inicio</a></li>" +
    "<li id='liMenu'><a  href='institucion.html'>Institución</a></li>" +
    "<li id='liMenu'><a  href='cabanias.html'>Cabañas</a></li>" +
    "<li id='liMenu'><a  href='novedades.html'>Novedades</a></li>" +
    "<li id='liMenu'><a  href='contacto.html'>Contacto</a></li>" +
    "<li id='liMenu'><a class='bonusColor' href='bonus.html'>Bonus</a></li>" +

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
///////////////////////////////////contacto.html////////////////////
function cuit() {
    let cuit = document.getElementById("Cuit").value;
    let Cuit = cuit.replace(/-/g, "");
    let arreglo = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    let arregloCuit = [];
    if (Cuit.length != 11) {
        alert("Faltan numeros en el campo CUIT / CUIL");
    } else {
        //Valor 1
        let sumaTotal = 0;
        for (i = 0; i < 10; i++) {
            arregloCuit[i] = parseInt(Cuit[i]);
            sumaTotal = sumaTotal + arregloCuit[i] * arreglo[i];
        }
        //  console.log("Valor 1 " + sumaTotal);
        //Valor 2
        let valor2 = sumaTotal % 11;
        //   console.log(valor2);
        //valor 3
        let valor3 = parseInt(11 - valor2);
        //   console.log(valor3);

        let numVerificacion = Cuit % 10;
        let preCuit1 = (Cuit[0]);
        let preCuit2 = (Cuit[1]);
        let preCuit = preCuit1 + preCuit2;

        switch (valor3) {
            case 11:
                numVerif = 0;
                break;
            case 10:
                numVerif = 9;
                break;
            default:
                numVerif = valor3;

        }
        //      console.log("Num veri " + numVerif);
        //      console.log("Num  " + numVerificacion);
        if (preCuit == 30 && numVerif == numVerificacion) {
            
        } else if (preCuit == 30 && numVerif != numVerificacion) {
            alert("Tu CUIT es invalido!");
        } else if (numVerif == numVerificacion) {
             ("Tu CUIL es valido! ");
        }else{
            alert("Tu CUIL es invalido!");
        }
    }


}

function esMenor() {
    let fechaNacimiento = document.getElementById("fechaNacimiento").valueAsDate;
    let hoy = new Date();
    let hAnio = hoy.getFullYear();

    if (hAnio - fechaNacimiento.getFullYear() < 18) {
        alert("Por favor solo enviar el formulario si es mayor de edad");
    }
}

////////////////////////////////////*Bonus*///////////////////////////////////////////////////////////////////////////
//Calcular edad
function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return (edad);
}

/*function calcularDias() {
    let hoy = new Date();
    var cumpleanos = new Date(fecha);
    console.log(cumpleanos);
    if (cumpleanos <= hoy) {
        let diferenciaTiempo = hoy.getTime() - cumpleanos.getTime();
        let diferenciaEnDias = parseInt(diferenciaTiempo / (1000 * 60 * 60 * 24));
        console.log("Pásaron " + diferenciaEnDias + " De tu cumpleaños :(");
    } else {
        let diferenciaTiempo = cumpleanos.getTime() - hoy.getTime();
        let diferenciaEnDias = parseInt(diferenciaTiempo / (1000 * 60 * 60 * 24));
        console.log("Faltan " + diferenciaEnDias + " dias para tu cumpleaños :D");
    }

}
calcularDias("2022-01-28");
*/
//Signo zodiaco
function signoZodiaco(fecha) {
    let fechaNacimiento = new Date(fecha);
    let mes = fechaNacimiento.getMonth() + 1;
    let dia = fechaNacimiento.getDate();
    console.log(fechaNacimiento);

    if (mes == 1 && dia >= 20 || mes == 2 && dia <= 18) {
        resultado = ("Acuario");
    }

    if (mes == 2 && dia >= 19 || mes == 3 && dia <= 20) {
        resultado = ("Piscis");
    }

    if (mes == 3 && dia >= 21 || mes == 4 && dia <= 19) {
        resultado = ("Aries");
    }

    if (mes == 4 && dia >= 20 || mes == 5 && dia <= 20) {
        resultado = ("Tauro");
    }

    if (mes == 5 && dia >= 21 || mes == 6 && dia <= 20) {
        resultado = ("Gemini");
    }

    if (mes == 6 && dia >= 21 || mes == 7 && dia <= 22) {
        resultado = ("Cancer");
    }

    if (mes == 7 && dia >= 23 || mes == 8 && dia <= 22) {
        resultado = ("Leo");
    }

    if (mes == 8 && dia >= 23 || mes == 9 && dia <= 22) {
        resultado = ("Virgo");
    }

    if (mes == 9 && dia >= 23 || mes == 10 && dia <= 22) {
        resultado = ("Libra");
    }

    if (mes == 10 && dia >= 23 || mes == 11 && dia <= 21) {
        resultado = ("Escorpio");
    }

    if (mes == 11 && dia >= 22 || mes == 12 && dia <= 21) {
        resultado = ("Sagitario");
    }

    if (mes == 12 && dia >= 22 || mes == 1 && dia <= 19) {
        resultado = ("Capricornio");

    } else if (mes > 12 || dia > 31) {
        alert("Por favor, ingresa una fecha valida ! ");
    }
    return (resultado);
}

function cuit2(cuit) {
    let Cuit = cuit.replace(/-/g, "");
    let arreglo = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    let arregloCuit = [];
    if (Cuit.length != 11) {
        alert("Faltan numeros en el campo CUIT/CUIL");
    } else {
        //Valor 1
        let sumaTotal = 0;
        for (i = 0; i < 10; i++) {
            arregloCuit[i] = parseInt(Cuit[i]);
            sumaTotal = sumaTotal + arregloCuit[i] * arreglo[i];
        }
        //  console.log("Valor 1 " + sumaTotal);
        //Valor 2
        let valor2 = sumaTotal % 11;
        //   console.log(valor2);
        //valor 3
        let valor3 = parseInt(11 - valor2);
        //   console.log(valor3);

        let numVerificacion = Cuit % 10;
        let preCuit1 = (Cuit[0]);
        let preCuit2 = (Cuit[1]);
        let preCuit = preCuit1 + preCuit2;

        switch (valor3) {
            case 11:
                numVerif = 0;
                break;
            case 10:
                numVerif = 9;
                break;
            default:
                numVerif = valor3;

        }
        //      console.log("Num veri " + numVerif);
        //      console.log("Num  " + numVerificacion);
        if (preCuit == 30 && numVerif == numVerificacion) {
            return ("Tu CUIT es valido!");
        } else if (preCuit == 30 && numVerif != numVerificacion) {
            return ("Tu CUIT es invalido!");
        } else if (numVerif == numVerificacion) {
            return ("Tu CUIL es valido! ");
        }else{
            return ("Tu CUIL es invalido!");
        }
    }

}

//Mostrarvalores
function mostrarInfo() {
    let fNacimiento = document.getElementById("fNacimiento").value;
    let apellido = document.getElementById("apellidoB").value;
    let nombre = document.getElementById("nombreB").value;
    let Cuit = document.getElementById("CuitID").value;

    var select = document.getElementById('selector');
    var valorSelect = select.options[select.selectedIndex].value;
    var favColor = document.getElementById("colorB").value;
    var colorcito = document.getElementById("apellidoYNombreBonus").style.background = favColor;

    let nombreYApellido = apellido + nombre;
    let spliteado = nombreYApellido.split(' ').join(''); //remueve espacios entre nombres y apellido

    document.getElementById("apellidoYNombreBonus").innerHTML = "Hola " + apellido + ", " + nombre;
    document.getElementById("nYA").innerHTML = "Tu nombre y apellido tienen: " + spliteado.length + " letras";
    document.getElementById("infoNacimiento").innerHTML = "Tenes: " + calcularEdad(fNacimiento) + " Años";
    //document.getElementById("infoNacimiento2").innerHTML = "Faltan: ";
    document.getElementById("Cuit").innerHTML = cuit2(Cuit);
    document.getElementById("signo").innerHTML = "Tu signo es: " + signoZodiaco(fNacimiento);

    if (valorSelect === "River") {
        document.getElementById("equipoBonus").innerHTML = "Parece ser que tenes buen gusto por elegir River";
    } else if (valorSelect === "Boca") {
        document.getElementById("equipoBonus").innerHTML = "Bajón que seas de boca";
    } else {
        document.getElementById("equipoBonus").innerHTML = "Decidiste no ser de river ni de boca.";
    };



}





/////////////////////////////////////////////////////////////////////////////////////////////////////////
//pie de pagina//
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