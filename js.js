/*const usu = document.querySelector("#nombre");

nombre.addEventListener( "submit", validarFormulario )

function validarFormulario(e){
	e.preventDefault();
	const nombre = document.querySelector("#usu").value
	const respuesta = document.getElementById("respuesta");
	respuesta.textContent = "BIENVENID(@) " + nombre + ", encantado de verte..."
}*/
function sub() {
    var usuario = null;
    usuario = document.getElementById("usuario").value;

    document.getElementById('usu').innerHTML = usuario;
}


function cambio(){
	var dol = 6.97; 
	var re ;   
	var bs =parseInt(document.getElementById('bolivianos').value, 10);
	 
	re = bs * dol ;
	document.getElementById('resul').value= re;
	
	}