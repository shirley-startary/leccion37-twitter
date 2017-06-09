// Cuando carga la página
window.addEventListener("load", cargarPagina);

function cargarPagina() {
	// Envío de To - Do
	var toDoForm = document.getElementById("to-do-form");
	var contenedorMensaje = document.getElementById("mensaje")
	contenedorMensaje=document.addEventListener("keyup",validarContenido);
	toDoForm.addEventListener("submit", enviarForm);

}

function enviarForm(e) {
	e.preventDefault();
	// Obtenemos datos
	var contenedor = document.getElementById("posts");
	var mensajeContenedor = document.getElementById("mensaje");
	var mensaje = mensajeContenedor.value;

	// Creamos elementos
	var postContenedor = document.createElement("article");
	var post = document.createElement("p");

	// Personalizamos elementos
	postContenedor.className = "jumbotron";
	post.textContent = mensaje;

	// Agregarlos al DOM
	postContenedor.appendChild(post);

	// Agregarlo a un elemento existente para visualizarlo
	contenedor.appendChild(postContenedor);

	// Borrar contenido de textarea
	mensajeContenedor.value = "";
	validarContenido()
}

function validarContenido(){
	var btnEnviar=document.getElementById("btnEnviar");
	var mensajeContenedor= document.getElementById("mensaje")

	// .trim() solo borra los espacios de sobra a los costados (izquierda y derecha)
	if(mensajeContenedor.value.trim().length> 0) {
		btnEnviar.removeAttribute("disabled");

	} else {
		btnEnviar.setAttribute("disabled", true);
	}
}

var contador=140;
var contarCarac;
var mensajeContenedor = document.getElementById("mensaje");
mensajeContenedor.addEventListener("keyup",contarCaracteres);
function contarCaracteres(){
	 	contarCarac=mensajeContenedor.value.length;
		
		console.log(contarCarac);
}
