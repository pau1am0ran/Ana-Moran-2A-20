function mostrarResultado(resultado){
    document.getElementById("display").value = resultado; /* Muestra el resultado en el campo 'display' */
}

function suma(){
    let numero1 = +document.getElementById("num1").value; /* Obtiene el valor del primer número */
    let numero2 = +document.getElementById("num2").value; /* Obtiene el valor del segundo número */
    mostrarResultado(numero1 + numero2); /* Muestra el resultado de la suma */
}

function resta(){
    let numero1 = +document.getElementById("num1").value; /* Obtiene el valor del primer número */
    let numero2 = +document.getElementById("num2").value; /* Obtiene el valor del segundo número */
    mostrarResultado(numero1 - numero2); /* Muestra el resultado de la resta */
}

function multi(){
    let numero1 = +document.getElementById("num1").value; /* Obtiene el valor del primer número */
    let numero2 = +document.getElementById("num2").value; /* Obtiene el valor del segundo número */
    mostrarResultado(numero1 * numero2); /* Muestra el resultado de la multiplicación */
}

function division(){
    let numero1 = +document.getElementById("num1").value; /* Obtiene el valor del primer número */
    let numero2 = +document.getElementById("num2").value; /* Obtiene el valor del segundo número */
    mostrarResultado(numero1 / numero2); /* Muestra el resultado de la división */
}

function potencia(){
    let numero1 = +document.getElementById("num1").value; /* Obtiene el valor del primer número */
    let numero2 = +document.getElementById("num2").value; /* Obtiene el valor del segundo número */
    mostrarResultado(Math.pow(numero1, numero2)); /* Muestra el resultado de elevar el primer número al segundo */
}

function raiz(){
    let numero1 = +document.getElementById("num1").value; /* Obtiene el valor del primer número */
    mostrarResultado(Math.sqrt(numero1)); /* Muestra la raíz cuadrada del primer número */
}

function ce(){
    document.getElementById("display").value = " "; /* Limpia el campo de resultados */
    document.getElementById("num1").value = " "; /* Limpia el campo del primer número */
    document.getElementById("num2").value = " "; /* Limpia el campo del segundo número */
}
