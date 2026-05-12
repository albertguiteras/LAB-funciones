let nombre = prompt("Nombre: ")
let apellido = prompt("Apellido: ")


function saludo(){
    document.getElementById("div1").innerHTML = "Hola " + nombre + " " + apellido + " !"; 
}

function suma(a, b){
    return a + b; 
}

function resta(a , b){
    return a - b;
}

function operacion(){
    let num1 = parseInt(prompt("Introduzca el primer numero: "));
    let num2 = parseInt(prompt("Introduzca el segundo numero: "));
    let ope = prompt("Elige que operacion quieres hacer: (+ o -)");

    if (ope === "+"){
        return suma(num1, num2);
    }
    else if (ope === "-") { 
        return resta(num1, num2);
    }
}

let res = document.getElementById("div2").innerHTML = "Ressultado de tu poeracion: " + operacion(); 





