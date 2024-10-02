function conteo() {
    let num = +document.querySelector('#seconds').value; // Obtiene el valor ingresado por el usuario en segundos y lo convierte a número.
    setTimeout(finalizar, num * 1000); // Establece un temporizador que ejecutará la función 'finalizar' después de que pase el tiempo ingresado.
}

function finalizar() {
    document.querySelector('#salida').textContent = 'Encendido'; // Cambia el texto de salida a "Encendido" cuando el tiempo termina.
    let alarma = document.querySelector('#alarm'); // Selecciona el audio con id 'alarm'.
    alarma.play(); // Reproduce el audio de alarma.
}

function renicio() {
    location.reload(); // Recarga la página para restablecer el contador y reiniciar el estado.
}
