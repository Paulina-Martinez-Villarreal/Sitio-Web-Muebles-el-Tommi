<!DOCTYPE html>
<html lang="es">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<link rel="stylesheet" href="fonts/style.css">
	<link rel="stylesheet" href="fonts2/style.css">
	<link rel="stylesheet" type="text/css" href="estilos/NO-TIENEm.css">
	<link rel="stylesheet" type="text/css" href="estilos/No_Tiene_Margen.css">
	
	
	 <script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>


	<meta charset="UTF-8">
	<title>Muebles el Tommi</title>
	<link rel="stylesheet" href="flexslider.css" type="text/css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<script src="js/jquery.flexslider.js"></script>
	<script type="text/javascript" charset="utf-8">
  $(window).load(function() {
    $('.flexslider').flexslider({
    	touch: true,
    	pauseOnAction: false,
    	pauseOnHover: false,
    });
  });
</script>
</head>


  <body  bgcolor="white" id='body'>
 

	<header class="menu">
	
<img src="imagenes/IMAGEN-ROJO.png" align="right" height="150" width="200">
<img src="imagenes/IMAGEN-ROJO.png" align="left" height="150" width="200">
		<nav>
			<ul>
				<li><a href="https://muebleseltommi.000webhostapp.com/"><span class="primero"><i class="icon icon-home"></i></span>Inicio</a>
					<ul>
					<li><a target="_blank" href="Nuestros_Productos.php">Nuestros productos</a></li>
					</ul>
				</li>
				
				
				<li><a href="#"><span class="segundo"><i class="icon icon-travel-car"></i></span>Muebles</a>
					<ul>
						<li><a href="Ofertas.html" target="_blank">Ofertas</a></li>
						<li><a href="Sucursales.html" target="_blank">Sucursales</a></li>
					</ul>
				</li>
				<li><a href="Objetivo.html" target="_blank"><span class="tercero"><i class="icon icon-book"></i></span>Objetivo</a></li>
				<li><a href="AcercaDe.html" target="_blank"><span class="cuarto"><i class="icon icon-file-text"></i></span>Acerca</a></li>
				<li><a href="Contacto.html" target="_blank"><span class="quinto"><i class="icon icon-mail"></i></span>Contacto</a></li>
				<li><a href="Cuenta.html" target="_blank"><span class="sexto"><i class="icon icon-question"></i></span>Disponible</a></li>
				<li><a href="Compartir.html" target="_blank"><span class="septimo"><i class="icon icon-share2"></i></span>Compartir</a></li>
				<li><a href="Puede_Interesarte.html" target="_blank"><span class="optavo"><i class="icon icon-laptop"></i></span><br>Puede interesarte</a></li>
				 <pre>                    </pre><li><button id='tema'>CAMBIAR TEMA</button>
				<p id="result">TEMA </p></li>

			</ul>
			
		</nav>
	</header>

						
<center><H1 class="titulo">Muebles el Tommi</H1></center>
 <p>
<center><font color ="blue"><font size="5">Bienvenido eres el visitante: #

<?php

function contador()

{
$archivo = "Contador3.txt";
$f = fopen($archivo, "r");
$contador= 0;

if($f)
{
$contador =fread($f, filesize($archivo));
$contador = $contador + 1;
fclose($f);
}

$f = fopen($archivo, "w+");
if ($f)
{
fwrite($f, $contador);
fclose($f);
}	

return $contador;
}

$visitante = contador ();

echo $visitante;
?>
</font></font></center>

<br><p>
 

<br><center>
	<div class="flexslider">
		<ul class="slides">
			<li>
				<img src="imagenes/Mueble_De_Madera_Roble_Macizo.jpg" title="Mueble De Madera Roble Macizo" height="800" width="100">
				<section class="flex-caption">
					
				</section>
			</li>
			<li>
				<img src="imagenes/Mueble_De_Madera_1.jpg" title="Mueble De Madera" height="800" width="100">
				<section class="flex-caption">
		
				</section>
			</li>
			<li>
				<img src="imagenes/Muebles_coloniales_contemporaneos_madera_nogal.jpg"  title="Carro Robot (CARBOT)" height="800" width="100">
				<section class="flex-caption">
					
				</section>
			</li>
			<li>
				<img src="imagenes/Muebles_De_Exterior.jpg"  title="Muebles De Exterior" height="800" width="100">
				<section class="flex-caption">
					
				</section>
			</li>
			<li>
				<img src="imagenes/Muebles_3.jpg"  title="Muebles de sala" height="800" width="100">
				<section class="flex-caption">
					
				</section>
			</li>
			<li>
				<img src="imagenes/Muebles_De_Oficina.jpg"  title="Muebles De Oficina" height="680" width="100">
				<section class="flex-caption">
					
				</section>
			</li>
			<li>
				<img src="imagenes/mueble-de-terciopelo-azul-en-sala.jpg"  title="mueble-de-terciopelo-azul-en-sala" height="750" width="100">
				<section class="flex-caption">
					
				</section>
			</li>
			<li>
				<img src="imagenes/Muebles_Para_Jardin.jpg"  title="muebles para jardines" height="750" width="100">
				<section class="flex-caption">
					
				</section>
			</li>
			<li>
				<img src="imagenes/Muebles_De_Lujo.jpg" title="Muebles de lujo" height="700" width="100">
				<section class="flex-caption">
					
				</section>
			</li>
		</ul>
	</div></center><br><br>
	
<! -- libreria de SweetAlert2 XD --> 
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
	
</body>
 <script src="JavaScript/Java.js" type="text/javascript" charset="utf-8"></script>
 

</html>