function calcular() {
    // Define la función 'calcular' que ejecuta el cálculo

    let act1 = +document.getElementById('act1').value;
    // Obtiene el valor ingresado en el campo 'act1' y lo convierte en número

    let act2 = +document.getElementById('act2').value;
    // Obtiene el valor ingresado en el campo 'act2' y lo convierte en número

    let act3 = +document.getElementById('act3').value;
    // Obtiene el valor ingresado en el campo 'act3' y lo convierte en número

    let promedio = ((act1 * 0.15) + (act2 * 0.10) + (act3 * 0.10));
    // Calcula el promedio ponderado de las tres actividades, usando un 15%, 10% y 10% respectivamente

    console.log(promedio);
    // Muestra el promedio en la consola para propósitos de depuración

    document.getElementById('display').value = promedio;
    // Asigna el valor calculado del promedio al campo de texto 'display' para mostrarlo al usuario
}
