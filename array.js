"use strict"


//01 - adicionar 100 a cada elemento
//02 - pares
//03 - somar
//04 - quadrado de cada elemento
//05 - numeros menores que 20
//06 - soma de tos os numeros menor que 20 elevado ao quadrado
//07 - desconto de 20% para os numeros impares
//08 - desconto de 20% para os numeros pares
//PELOS METODO (MAP)
//             (FILTER)
//             (REDUCE)


const numero = [3, 12, 81, 13, 20, 17]

//let cont = 0
//const limite = 6
//let numeros100 =[]

//while(cont < limite){
//    numeros100[cont] = numero[cont]+100
//    cont ++
//}

//mesma coisa mais de forma "MAP"

//const adiciona100= (numero) => numero +100

//const numeros100 = numero.map (adiciona100)

//console.log (numero)

//2

//let cont = 0
//const limite = 6
//let numerosPares = []

//while(cont < limite){
//    if(numeros[cont] % 2 == 0){
//        numeroPares[cont] = numeros[cont]
//    }
//    cont++
//}

//mesma coisa mais de forma filter

//const ePar = (numero) => numero %2==0

//const numerosPares = numeros.filter(ePar)

//console.log (numero)


//3

//let cont = 0
//const limite = 6
//let total = 0 

//while(cont < limite){
//    total = total + numero[cont]
//    cont++
//}

//mesma coisa mais da forma reduce

//const somar = (a, b) => a + b

//consttotal = numero.reduce(somar, 0)

//4

//const quadrado = (numero) => numero ** 2
//constnumerosQuadrados = numeros.map(quadrado)
//console.log(numerosQuadrados)

//5
//const eMenorQue20 = (numero) => numero < 20
//const numeroMenores20 = numeros.filter(eMenorQue20)
//console.log(numerosMenores20)

//6

//const soma = (a, b) => a + b 
//const resultado = numero.filter(eMenorQue20)
//                        .map(quadrado)
//                        .reduce(soma)
//console.log (resultado)
