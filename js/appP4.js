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
let numeros = [54 , 61 , 71 , 21 , 52 , 34 , 48 , 49 , 27 , 68 , 73 , 32 , 96 , 89 , 70 , 47 , 24 , 5 , 7 , 45];
console.log("La cantidad de números pares es de: " + valorPares(numeros));


// Hacer Commit 'Generación de numeros aleatorios
// Hacer Commit 'Validación de caja de texto (limite) REQUERIDO Y NUMERICO
// Hacer Commit con la listanumeros ORDENADOS ASCENDENTE