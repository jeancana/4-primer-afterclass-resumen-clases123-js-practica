
/* //Haciendo la verificacion Inicial de Linkeo - para chequear que el main.js esta bien
alert('Hola') */

// ******** HACIENDO UN SIMULADOR INTERACTIVO --- USANDO LOS CONOCIMIENTOS VISTOS EN LAS CLASES 1, 2 Y 3 

// ************ Juego de pelea Goku Vs Superman *********************
// El objetivo del Simulador es:  Hacer que la Energia vaya bajando en la medida que se desarrolla la pelea 

//1. Usando las Constantes Para solo Permitir que los GOLPES resten Energia entre un RANGO  Minimo y un Maximo 
const MIN_POWER = 10;
const MAX_POWER = 30;

// 2. Energias iniciales de los Peleadores
let energiaGoku = 100;
let energiaSuperman = 100;

// Variable Round 
let round = 0; 

// Asignandole un Nro Random a la variable golpe 
// El objeto Math dentro de JS tiene un muchas herramientas ahora usaremos el .random
// el .random te da un Nro Random entre 0 y 1  
let golpe = Math.random();
// Verificando que Nro Random me entrega
console.log(golpe);

// 3. Formaas de Redondear un NRO con el Objeto Math 
console.log('----3 Formaas de Redondear un NRO con el Objeto Math --------------') 
// Forma 1 - este redondea aletorio (puede ser para arriba o para abajo) 
console.log(Math.round(golpe*100));
// Forma 2 - este redondea para abajo 
console.log(Math.floor(golpe*100));
// Forma 3 - redondea para Arriba (El mas recomendado)
console.log(Math.ceil(golpe*100));

console.log('----formula random correcta Con Buena Practica/ todo en un sola linea --------------') 
//Poniendo todo en una sola Variable para Hacer la buena Practica
let golpe2 = Math.ceil(Math.random()*100);
// Verificando que funcione
console.log(golpe2) 

console.log('----Para que el Golpe me de SOLO con 2 decimales --------------')
let golpe3 = (golpe*100).toFixed(2)
// Verificando que funcione
console.log(golpe3);

console.log('----OTRA forma de Hacerlo Parsearlo con "parseInt" --------------') 
//**** OTRA forma de Hacerlo es: Volviendo la Variable Golpe un Nro Entero al Parsearlo con "parseInt"
let golpeEntero = parseInt(golpe*100);
// Verificando que funcione 
console.log(golpeEntero);

console.log('----CREANDO EL JUEGO" --------------')

console.log('----Creando los Golpes" --------------')

// 4. CREANDO LOS GOLPEs CORRECTO PARA USAR EN EL JUEGO - EL PELEADOR DARA GOLPE MINIMO DE 10 Y MAXIMO DE 30 GOLPE = ( 10 && 30  )

let golpe4 = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
// Verificando que funcione
//console.log(golpe4); 

let golpe5 = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
// Verificando que funcione
//console.log(golpe5); 

// 5. ASIGNANDOLE GOLPE A LOS PELEADORES 

let golpeGoku = golpe4;
console.log("Golpe Goku "+ golpeGoku)

let golpeSuperMan = golpe5;
console.log("Golpe Superman " + golpeSuperMan)

// 6. CREANDO LAS CONDICIONES PARA QUE EL JUEGO FUNCIONE 

// 6.1 Creando condicion Nro 1 - Haciendo Posible que Puedan Pelear (cayendose a Golpes)

// Logica Operando: Si el Golpe de Goku es Mayor al golde e Superma, le resto el valor de la variable "golpeGoku" a la variable "energiaSuperman". SINO en caso contrario le resto el valor de la variable "golpeSuperma" a la variable "energiaGoku"
// NOTA: Para ir restando Energias uso un decrementador (sugar sintactic de JavaScript)

console.log('----Probando los Golpes" esta en modi texto para que no interfiera con el WHILE de los Round--------------')
/* if (golpeGoku > golpeSuperMan) {

    // formula tradicional - Decrementador
    // energiaSuperman = energiaSuperman - golpeGoku

    // Usandolo como Decrementador (forma reducida/Azucar Sintatica)
    energiaSuperman -= golpeGoku;
    
    // Explicando la pelea
    console.log('Goku golpea con una Fuerza de ' + golpeGoku)
    console.log('La Energia de Goku es ' + energiaGoku)
    console.log('La Energia de Superman es ' + energiaSuperman)

} else {

    energiaGoku -= golpeSuperMan;
    console.log('Superman golpea con una Fuerza de ' + golpeSuperMan)
    console.log('La Energia de Superman es ' + energiaSuperman)
    console.log('La Energia de Goku es ' + energiaGoku)
} */


// 6.2 Creando Condicion Nro2 - Que se MATEN hasta llegar a CERO
// Logica Operando: si la energia de alguno de los peleadores es mayor a CERO seguira ejecutandoese el Ciclo (bucle) WHILE
 
console.log('----Inicia el Combate" --------------')

while (energiaGoku > 0 && energiaSuperman > 0) {

    //Asignado los ROUND usando un Incrementador
    console.log('Round: ' + (round += 1))
    
    if (golpeGoku > golpeSuperMan) {
        
        energiaSuperman -= golpeGoku;

        // Hacido que SOLO llegue a CERO sin pasarse al Negativo - 0 / Pisando el Valor
        if (energiaSuperman < 0) {
            energiaSuperman = 0
        }
        console.log('Goku golpea con una Fuerza de ' + golpeGoku)
        console.log('La Energia de Goku es ' + energiaGoku)
        console.log('La Energia de Superman es ' + energiaSuperman)
        console.log('------------------')

        document.write('<div class = "card"><img src="img/goku.jpeg"/></div>')

    } else {

        energiaGoku -= golpeSuperMan;
        if (energiaGoku < 0) {
            energiaGoku = 0
        }
        console.log('Superman golpea con una Fuerza de ' + golpeSuperMan)
        console.log('La Energia de Superman es ' + energiaSuperman)
        console.log('La Energia de Goku es ' + energiaGoku)
        console.log('------------------')

        document.write('<div class = "card"><img src="img/descarga.jpeg" /></div>')
    }
     
 }

if (energiaGoku > 0) {
    console.log("Ha Ganado Goku ---- Juego Nro1 ")
    document.write('Ha Ganado Goku')
    document.write('<div class="ganador" > <img src="img/descarga2.jpeg" /></ >')
    
} else {
    console.log("Ha Ganado Superman ---- Juego Nro1")
    document.write('Ha Ganado Superman')
    document.write('<div class="ganador" > <img src="img/descarga2.jpeg" /></ >')
}

console.log('----OTRA FORMA de Hacer ---> el Combate" --------------')

document.write('<br>---- JUEGO NRO2 /OTRA FORMA de Hacer ---> El Combate" --------------')

const MIN_POWER2 = 10;
const MAX_POWER2 = 30;
let energiaGoku2 = 100;
let energiaSuperman2 = 100;
let round2 = 0; 
let golpeGoku2 = Math.ceil(Math.random() * (MAX_POWER2 - MIN_POWER2) + MIN_POWER2);
let golpeSuperman2 = Math.ceil((Math.random() * (MAX_POWER2 - MIN_POWER2)) + MIN_POWER2);


while (energiaGoku2 !== 0 && energiaSuperman2 !== 0) {

    console.log('Round: ' + (round2 += 1))

    if (golpeGoku2 > golpeSuperman2) {

        energiaSuperman2 -= golpeGoku2;

        if (energiaSuperman2 < 0) {
            energiaSuperman2 = 0
        }
        console.log('Goku golpea con una Fuerza de ' + golpeGoku2)
        console.log('La Energia de Goku es ' + energiaGoku2)
        console.log('La Energia de Superman es ' + energiaSuperman2)
        console.log('------------------')

        document.write('<div class = "card"><img src="img/goku.jpeg"/></div>')

    } else {

        energiaGoku2 -= golpeSuperman2;
        if (energiaGoku2 < 0) {
            energiaGoku2 = 0
        }
        console.log('Superman golpea con una Fuerza de ' + golpeSuperman2)
        console.log('La Energia de Superman es ' + energiaSuperman2)
        console.log('La Energia de Goku es ' + energiaGoku2)
        console.log('------------------')

        document.write('<div class = "card"><img src="img/descarga.jpeg" /></div>')
    }

}

if (energiaGoku2 > 0) {
    console.log("Ha Ganado Goku ---- Juego Nro2 ")
    document.write('Ha Ganado Goku')
    document.write('<div class="ganador" > <img src="img/descarga2.jpeg" /></ >')
} else {
    console.log("Ha Ganado Superman ---- Juego Nro2")
    document.write('Ha Ganado Superman')
    document.write('<div class="ganador" > <img src="img/descarga2.jpeg" /></ >')
}