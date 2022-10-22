// Función para sacar el promedio
function valorPromedio(calificaciones){
    let suma = 0, longitudCalif = calificaciones.length;
    for(let i=0; i<longitudCalif; i++){
        suma = suma + calificaciones[i];
    }
    return suma / longitudCalif;
}

// Declaración del arreglo de 20 posiciones para las calificaciones
let calificaciones = [8, 6, 9, 6, 9, 8, 8, 5, 7, 10, 8, 7, 10, 10, 8, 6, 7, 8, 7, 10, 8];
// llamar a la función del valor Promedio y mandar el resultado por consola
console.log("El promedio de las calificaciones es de: " + valorPromedio(calificaciones));

// Función para calcular la cantidad de numeros pares
function valorPares(numeros){
    let contador = 0, longitudNum = numeros.length;
    for(let i=0; i<longitudNum; i++){
        if(numeros[i]%2 == 0){
            contador++;
        }
    }
    return contador;
}

// Declaración del arreglo de 20 posiciones para los numeros que luego serán contabilizado en pares
let numeros = [12, 34, 21, 73, 23, 2, 24, 93, 25, 54, 66, 69, 8, 51, 98, 56, 44, 82, 29, 78];
console.log("La cantidad de números pares es de: " + valorPares(numeros));

// Función para ordenar los valores del arreglo de mayor a menor
function valorOrdenadosMayor(numerosDesordenados){
    let aux, longitudOrdenMayor = numerosDesordenados.length;
    let band = false;
    while(!band){
        band = true;
        for(let i=0; i<longitudOrdenMayor; i++){
            if(numerosDesordenados[i+1] > numerosDesordenados[i]){
                aux = numerosDesordenados[i];
                numerosDesordenados [i] = numerosDesordenados [i+1];
                numerosDesordenados[i+1] = aux;
                band = false;
            }
        }
    }    
    return numerosDesordenados;
}


// Declaración del arreglo de 20 posiciones donde los numeros están desordenados
let numerosDesordenados = [12, 25, 65, 43, 98, 42, 2, 54, 66, 442, 53, 532,18, 86, 3, 35, 60, 31, 24, 6];
// llamar a la función y mandar resultado por la consola
console.log("Los valores ordenados de mayor a menor son: " + valorOrdenadosMayor(numerosDesordenados));


function llenar(){
    var limite = document.getElementById('limite').value;
    var listanumeros = document.getElementById('numeros');
    var arreglo = [];

    // Limpiar las opciones del select
    while(listanumeros.options.length>0){
        listanumeros.remove(0);
    }

    for(let con = 0; con<limite; con++){

        let aleatorio = Math.floor(Math.random()*50)+1;
        listanumeros.options[con] = new Option(aleatorio,'valor:' + con);
        arreglo[con] = aleatorio;
    }

    let orden = ordenarValoresSelect(arreglo);

    for(let con = 0; con<limite; con++){
        listanumeros.options[con] = new Option(orden[con]);
    }

}

function validar(){
    validarLimite = document.querySelector('#limite').value;

    if(validarLimite == 0){
        alert('Capture un valor');
    }
}

function ordenarValoresSelect(numeros){
    let arr = numeros, longitudOrdenMayor = numeros.length;
    let band = false;

    while(!band){
        band = true;
        for(let i=0; i<longitudOrdenMayor; i++){
            if(arr[i] > arr[i+1]){
                aux = arr[i+1];
                arr [i+1] = arr [i];
                arr[i] = aux;
                band = false;
            }
        }
    }
    return arr;
}

// Hacer Commit 'Generación de numeros aleatorios
// Hacer Commit 'Validación de caja de texto (limite) REQUERIDO Y NUMERICO
// Hacer Commit con la listanumeros ORDENADOS ASCENDENTE
// Contar los numeros pares e impares para saber su porcentaje
// La diferencia no sea mayor al 25%