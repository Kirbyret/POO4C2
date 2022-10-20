// Función para sacar el promedio
function valorProm(calificaciones){
    let suma = 0, longitudCalif = calificaciones.length;
    for(let i=0; i<longitudCalif; i++){
        suma = suma + calificaciones[i];
    }
    return suma / longitudCalif;
}

let calificaciones = [6, 10, 6, 9, 10, 8, 9, 10, 10, 6, 5, 8, 9, 10, 6, 7, 10, 7, 4, 8];
console.log("El promedio de las calificaciones es de: " +valoProm(calificaciones));

//Calcular la cantidad de pares
function valorPares(numeros){
    let contador = 0, longitudNum = numeros.length;
    for(let i=0; i<longitudNum; i++){
        if(numeros[i]%2 == 0){
            contador++;
        }
    }
    return contador;
}
// El arreglo de 20 posiciones para los numeros
let numeros = [51 , 40 , 2 , 4 , 54 , 23 , 75 , 10 , 28 , 29 , 62 , 24 , 89 , 24 , 54 , 25 , 87 , 6 , 8 , 74];
console.log("La cantidad de números pares es de: " + valorPares(numeros));

// Hacer Commit 'Validación de caja de texto (limite) REQUERIDO Y NUMERICO
function validar(){
    validarLimite = document.querySelector('#limite').value;

    if(validarLimite == 0){
        alert('Por favor, Capture un valor');
    }
}
// Hacer Commit con la listanumeros ORDENADOS ASCENDENTE