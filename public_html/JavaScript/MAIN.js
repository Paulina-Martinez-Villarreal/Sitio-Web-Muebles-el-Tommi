const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		opciones.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
	});
});

select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
});


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


/* 
VALIDACIÓN DEL SEXO
*/


var formulario = document.getElementsByName('formulario')[0],
elementos = formulario.elements;
boton = document.getElementById('btn_enviar');

<!--Funcion para validar el nombre, (solo es necesario hacerlo si lo corremos en internet explorer pues no agarra los required) -->

var validarNombre=function(e){
if (formulario.nombre.value==0){
<!--Si es ==  0 entonces -->
alert("Por favor completa el campo Nombre XD");
e.preventDefault();
}
};

<!--Funcion para validar el sexo) -->


var validarRadio=function(e){
if(formulario.sexo[0].checked ==true || formulario.sexo[1].checked==true){
}else{
	alert("Por favor completa el campo Sexo :)");
	e.preventDefault();
}
};

<!--Funcion para validar el telefono, (solo es necesario hacerlo si lo corremos en internet explorer pues no agarra los required) -->

var validarTelefono=function(e){
if (formulario.telefono.value==0){
<!--Si es ==  0 entonces -->
alert("Por favor completa el campo Telefono XD");
e.preventDefault();
}
};

<!--Funcion para validar el correo, (solo es necesario hacerlo si lo corremos en internet explorer pues no agarra los required) -->

var validarCorreo=function(e){
if (formulario.correo.value==0){
<!--Si es ==  0 entonces -->
alert("Por favor ompleta el campo Correo XD");
e.preventDefault();
}
};

<!--Funcion para validar el asunto, (solo es necesario hacerlo si lo corremos en internet explorer pues no agarra los required) -->

var validarAsunto=function(e){
if (formulario.asunto.value==0){
<!--Si es ==  0 entonces -->
alert("Por favor completa el campo Asunto :)");
e.preventDefault();
}
};


<!--validaciones XD -->

var validar = function(e){
validarRadio(e);
validarNombre(e);
validarTelefono(e);
validarCorreo(e);
validarAsunto(e);
};

formulario.addEventListener("submit",validar);

/*
EVENTO DE LA IMAGEN DE VOLVER AL INICIO LA CASITA
*/

function imagen1() {
 document.getElementById('i').setAttribute('src','imagenes/casa-blanca.png');
 }
 function imagen2() {
 document.getElementById('i').setAttribute('src','imagenes/casita-Amarilla.jpg');
 }

 function imagen3() {
 document.getElementById('o').setAttribute('src','imagenes/Flecha-Amarilla-1.jpg');
 }
 function imagen4() {
 document.getElementById('o').setAttribute('src','imagenes/Flecha-Amarilla-2.png');
 }