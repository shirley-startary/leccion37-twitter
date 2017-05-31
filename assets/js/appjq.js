var cargarPagina = function (){

  var $btnMensaje = $(".enviarMensaje");
  $btnMensaje.click(crearMensaje);

}
$(document).ready(cargarPagina);

var crearMensaje = function () {
  var $mensaje = $("#mensaje").val();
  console.log($mensaje);
  var $parrafoMensaje = $(".contenedorMensaje").append("<p></p>").append($mensaje);
  console.log($parrafoMensaje);
}
