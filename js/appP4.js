// Función para sacar el promedio
function valorPromedio(calificaciones){
    let suma = 0, longitudCalif = calificaciones.length;
    for(let i=0; i<longitudCalif; i++){
        suma = suma + calificaciones[i];
    }
    return suma / longitudCalif;
}

// Declaración del arreglo de 20 posiciones para las calificaciones
let calificaciones = [7, 2, 5, 10, 10, 9, 9, 8, 8, 7, 9, 10, 10, 10, 8, 6, 5, 7, 9, 8];
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
let numeros = [54 , 61 , 71 , 21 , 52 , 34 , 48 , 49 , 27 , 68 , 73 , 32 , 96 , 89 , 70 , 47 , 24 , 5 , 7 , 45];
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


// Declaración del arreglo donde los numeros están desordenados
let numerosDesordenados = [88, 12, 97, 94, 9, 28, 38, 72, 40, 100, 17, 88, 11, 86, 8, 21, 82, 75, 83, 40];
console.log("Los valores ordenados de mayor a menor son: " + valorOrdenadosMayor(numerosDesordenados));


function llenar(){
    var limite = document.getElementById('limite').value;
    var listanumeros = document.getElementById('numeros');
    var arreglo = [];
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