function saludo() {
    var texto = "Hola Mundo";
    document.getElementById("divMensaje").innerHTML = texto;
}

function saludo2() {
    var nombre=document.getElementById("txtNombre").value;
    var apellidos=document.getElementById("txtApellidos").value;
    if(nombre.length!=0 && apellidos.length!=0){
    var texto = "Hola "+nombre+" "+apellidos;
    document.getElementById("divMensaje").innerHTML = texto;
    } else {
        if (nombre.length == 0) {
            document.getElementById("errorNombre").innerHTML = "Error, el nombre está vacío";
        }
        if (apellidos.length == 0) {
            document.getElementById("errorApellidos").innerHTML = "Error, el apellido está vacío";
        }
    }
}

function puedeSaludar() {
    var nombre = document.getElementById("txtNombre").value;
    var apellidos = document.getElementById("txtApellidos").value;
    if (nombre.length != 0 && apellidos.length != 0) {
        document.getElementById("boton2").removeAttribute("disabled");
    } else {
        document.getElementById("boton2").setAttribute("disabled", "disabled");
    }
}
function saluda() {
    var nombre = document.getElementById("txtNombre").value;
    var apellidos = document.getElementById("txtApellidos").value;
    var texto = "Hola " + nombre + " " + apellidos;
    document.getElementById("divMensaje").innerHTML = texto;
}