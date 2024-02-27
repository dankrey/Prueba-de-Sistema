window.onload = function () {
   
};


function encriptarTexto() {
    // Ocultar la imagen y los mensajes al inicio
    ocultarImagenYMensaje();

    var texto = document.getElementById("texto").value;

    // Verificar si el texto contiene caracteres no permitidos
    if (/[^a-z\s]/.test(texto)) {
        // Mostrar modal de advertencia
        swal("Error", "Solo se permiten letras minúsculas sin acentos y sin caracteres especiales.", "error");
        return; // Salir de la función si hay caracteres no permitidos
    }

    var resultado = texto.replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("resultado").value = resultado;
    // Mostrar los elementos necesarios después de la encriptación
    mostrarResultado();

    // Borrar el contenido del textarea
    document.getElementById("texto").value = "";
}



function desencriptarTexto() {
     // Ocultar la imagen 
     ocultarImagenYMensaje();
    var texto = document.getElementById("texto").value.toLowerCase();
    var resultado = texto.replace(/enter/g, "e")
                         .replace(/imes/g, "i")
                         .replace(/ai/g, "a")
                         .replace(/ober/g, "o")
                         .replace(/ufat/g, "u");
    
    document.getElementById("resultado").value = resultado;
    document.getElementById("resultado").style.display = "block"; // Mostrar el textarea
      // Mostrar los elementos necesarios después de la encriptación
      mostrarResultado();
      // Borrar el contenido del textarea
    document.getElementById("texto").value = "";
    
}


function ocultarImagenYMensaje() {
    var welcomeImage = document.querySelector(".welcome-image");
    welcomeImage.style.display = "none";

    var welcome = document.getElementById("welcome");
    var instruction = document.getElementById("instruction");
    welcome.classList.add("hide");
    instruction.classList.add("hide");
}
function copiarTexto() {
    var resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
    
    var notificacion = document.getElementById("notificacion"); // Corregir el id aquí
    notificacion.classList.add("show");

    // Ocultar la notificación después de un tiempo
    setTimeout(function() {
        notificacion.classList.remove("show");
    }, 3000); // Mostrar durante 3 segundos, puedes ajustar este valor según lo desees
}



function mostrarResultado() {
    var resultadoTextarea = document.getElementById("resultado");
    var mensajeEncriptado = document.getElementById("mensaje-encriptado");

    resultadoTextarea.style.display = "block"; // Mostrar el textarea
    mensajeEncriptado.style.display = "none"; // Ocultar el mensaje de bienvenida
    document.querySelector(".btn-copiar").style.display = "block"; // Mostrar el botón de copiar
}

