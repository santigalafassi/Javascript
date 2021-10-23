// 1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" 
// Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings

// let names=prompt('Cuál es tu nombre?')
// let age=prompt('Cuál es tu edad?')
// let ageNext = 1
// let ageFin = Number(age)+Number(ageNext)

// console.log(`Hola ${names}, tenes ${age} años y el año que viene vas a tener ${ageFin}`)


// 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. 
// En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. 
// triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado)

// let figura=prompt('Qué figura desea calcular? triangulo/rectangulo/circulo')
//    if(figura=='triangulo'){
//     let data1=prompt('Introduzca la BASE')
//     let data2=prompt('Introduzca la ALTURA')
//     area=(Number(data1) * Number(data2) /2)
//     console.log(`El área de tu ${figura} es ${area}`)
//    }else if(figura=='cuadrado'){
//        let data1=prompt('Introduzca la BASE')
//        let data2=prompt('Introduzca la ALTURA')
//       area=(Number(data1) * Number(data2))
//       console.log(`El área de tu ${figura} es ${area}`)
//     }else{
//         let data1=prompt("Introduzca el RADIO")
//         area=(3.14 *(Number(data1) * Number(data1)))
//         console.log(`El área de tu ${figura} es ${area}`)
//     }


// 3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número 
// es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar

// let numero = prompt('Introducir un numero del 1 al 9')
// var hidden = 0

// while(hidden < numero){
//     var hidden = (Number(hidden) + 1)
//          if(hidden % 2 == 0){
//       console.log(`${hidden} es par`)
//         }else{
//       console.log(`${hidden} es impar`)  }
// }


// 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número es primo o no. 
// Un número primo es aquel que solo es divisible por sí mismo y la unidad

// let numero = prompt("Ingresar un numero mayor que 1")
// i=2
// primo=true

// do{
//   if(numero % i==0){
//     primo=false; 
//   }i++
// }while(i<numero)

// if(primo==true){
//   console.log(`${numero} es primo`)
// }else{
//   console.log(`${numero} no es primo`)
// }


// 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. 
// El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
// !5 = 5*4*3*2*1 = 120


// 6 - Escribe un programa que permita ir introduciendo una serie indeterminada de números mientras su suma no supere 50. 
// Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido





// 7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. 
// Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda 
// ese número en el array de pares y si es impar en el array de impares. 
// Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares

// 8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. 
// El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23
// const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// 9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.

// 10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a 
// través de un prompt se encuentra dentro del array o no.