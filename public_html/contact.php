<?php
 
// database connection code
 
// $con = mysqli_connect('localhost', 'id19588536_carritocompras', 'Qh^q8Sp-IKm@N2?@','id19588536_esquema');
 
$con = mysqli_connect('localhost', 'id19588536_carritocompras','Qh^q8Sp-IKm@N2?@','id19588536_esquema');
 
// get the post records
 
$txtNameUsuario = $_POST['txtNameUsuario'];
 
$txtCorreo = $_POST['txtCorreo'];
 
$txtTarjetaCredito = $_POST['txtTarjetaCredito'];

$txtNombreProducto = $_POST['txtNombreProducto'];

$txtCantidad = $_POST['txtCantidad'];

 
// database insert SQL code
 
$sql = "INSERT INTO tbl_contact (Nombre_Usuario, Correo, Tarjeta_Credito, Id, Nombre_Producto, Cantidad) VALUES ('$txtNameUsuario', '$txtCorreo', '$txtTarjetaCredito', '0', '$txtNombreProducto', '$txtCantidad')";
 
// insert in database
 
$rs = mysqli_query($con, $sql);
 
if($rs)
 
{
 
echo "Contact Records Inserted";
 
}
 
?>