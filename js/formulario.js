(function(){

//VARIABLES
var formulario = document.getElementById('formulario')
    nombre = formulario.nombre,
    email = formulario.email,
    mensaje = formulario.mensaje,
    error = document.getElementById('error')




//FUNCIONES
function validarNombre(e){
    if(nombre.value == '' || nombre.value == null){
        console.log('por favor complete el nombre');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor complete el Nombre</li>';

        e.preventDefault();
    }else {
        error.style.display = 'none';
    }
}


function validarEmail(e){
    if(email.value == '' || email.value == null){
        console.log('por favor complete el email');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor complete el Email</li>';

        e.preventDefault();
    }else {
        error.style.display = 'none';
    }
}

function validarMensaje(e){
    if(mensaje.value == '' || mensaje.value == null){
        console.log('por favor escriba el mensaje');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor escriba el Mensaje</li>';

        e.preventDefault();
    }else {
        error.style.display = 'none';
    }
}


function validarFormulario(e){
    error.innerHTML = '';
    
    validarNombre(e)
    validarEmail(e)
    validarMensaje(e)

}


// BOTON PARA VALIDAR LAS FUNCIONES
formulario.addEventListener('submit', validarFormulario);
}())