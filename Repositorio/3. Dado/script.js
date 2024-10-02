function dice() {
    // Define la función 'dice' que se ejecuta al hacer clic en el botón
    
    let minVal = document.getElementById('min').value;
    // Obtiene el valor del campo de entrada del número mínimo y lo almacena en la variable 'minVal'
    
    let maxVal = document.getElementById('max').value;
    // Obtiene el valor del campo de entrada del número máximo y lo almacena en la variable 'maxVal'
    
    let out = document.getElementById('salida');
    // Obtiene la referencia al elemento HTML con el id 'salida' donde se mostrará el resultado
    
    let number = Math.floor(Math.random() * (maxVal - minVal + 1)) + parseInt(minVal);
    // Genera un número aleatorio entre los valores mínimo y máximo ingresados por el usuario,
    // usando la fórmula para generar un entero aleatorio entre dos valores.
    // Math.random() genera un número entre 0 y 1.
    // Math.floor() redondea el número hacia abajo.
    
    out.textContent = number;
    // Muestra el número generado en el elemento con el id 'salida' (h2).
}
