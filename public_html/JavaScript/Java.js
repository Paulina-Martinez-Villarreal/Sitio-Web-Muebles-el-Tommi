/* 
FUNCIONES DE DARK MODE
*/



var cuerpo = document.getElementById('body');
var theme = document.getElementById('result');
storagetheme = localStorage.getItem("storagetheme");

if (storagetheme == 'oscuro') {
  result.innerHTML += 'OSCURO';
  $(cuerpo).addClass("black");
} else {
  result.innerHTML += 'CLARO'
}

$(tema).click(function() {
  $(cuerpo).toggleClass("black");
  revisartema();
});


function revisartema() {
  storagetheme = localStorage.getItem("storagetheme");
  if (storagetheme == 'oscuro') {
    localStorage.setItem("storagetheme", "claro");
    result.innerHTML = 'CLEAR MODE';
    return false;
  }
  if (storagetheme == 'claro') {
    localStorage.setItem("storagetheme", "oscuro");
  }
  if (storagetheme == null) {
    localStorage.setItem("storagetheme", "oscuro");
  }
  result.innerHTML = 'DARK MODE';

}

/*ALERTAS PERSONALIZADAS */

(async() => { 
const {value: pais} = await swal.fire({
	
	
	
	title: 'BIENVENIDO',
	text: 'Selecciona tu país',
	icon: 'question',
	confirmButtonText: 'Seleccionar',
	footer: 'Esta es información importante',
	//width: '85%',
	padding: '1rem',
	//grow: 'row'
	background: true,
	//timer: 5000,
	//timerProgressBar: true,
	
	allowOutsideClick: false,
	allowEscapekey: false,
	allowEnterkey: false,
	stopkeydownpropagation: false,
	
	input: 'select',
	inputPlaceholder: 'País:',
	inputvalue:'',
	inputOptions: {
	
		mexico: 'México',
		españa: 'España',
		estados: 'Estados Unidos', 
		otro: 'Otro'
	},
	
	
showConfirmButton: true,
confirmButtonColor: '#FFF416',
confirmButtonAriaLabel: 'Confirmar',

showCloseButton: true,
closeButtonAriaLabel: 'Cerrar alerta',

/*IMAGENES DE LAS ALERTAS PERSONALIZADAS */

imageUrl: 'imagenes/avion.jpg',
imagewidth: '200px',
imageAlt: 'Avión',



});



if (pais){
	Swal.fire({
	title: 'Seleccionasté tu país'
	

});


}

})()


/*
EVENTO DE LA IMAGEN DE VOLVER AL INICIO LA CASITA
*/

function imagen1() {
 document.getElementById('i').setAttribute('src','imagenes/casa-verde.jpg');
 }
 function imagen2() {
 document.getElementById('i').setAttribute('src','imagenes/casa-blanca.png');
 }

 /*
EVENTO DE LA IMAGEN DE LAS FLECHITAS
*/

 function imagen3() {
 document.getElementById('o').setAttribute('src','imagenes/Flecha-Amarilla-1.jpg');
 }
 function imagen4() {
 document.getElementById('o').setAttribute('src','imagenes/Flecha-Amarilla-2.png');
 }
 
